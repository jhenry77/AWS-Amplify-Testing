"use client"
import styles from "../components/styles/profile.module.css";
import React, { useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { fetchAuthSession } from "aws-amplify/auth";
import { updateUserAttributes, UpdateUserAttributesOutput } from 'aws-amplify/auth';
import { updatePassword, type UpdatePasswordInput } from 'aws-amplify/auth';
import Link from "next/link";
import { generateClient } from 'aws-amplify/api';
import { updateUser } from './../../src/graphql/mutations';
import { MutableModel } from '@aws-amplify/datastore';

const client = generateClient();


async function handleUpdateEmailAttributes(updatedEmail: string) {
    try {
      const attributes = await updateUserAttributes({
        userAttributes: {
          email: updatedEmail
        }
      });
    } catch (error) {
      console.log(error);
    }
}

async function handleUpdateFirstNameAttributes(updatedName: string) {
    try {
      const attributes = await updateUserAttributes({
        userAttributes: {
          name: updatedName
        }
      });
    } catch (error) {
      console.log(error);
    }
}

async function handleUpdateLastNameAttributes(updatedName: string) {
    try {
      const attributes = await updateUserAttributes({
        userAttributes: {
          family_name: updatedName
        }
      });
    } catch (error) {
      console.log(error);
    }
}

async function handleUpdateAddressAttributes(updatedAddress: string) {
    try {
      const attributes = await updateUserAttributes({
        userAttributes: {
          address: updatedAddress
        }
      });
    } catch (error) {
      console.log(error);
    }
}

async function handleUpdateBirthdayAttributes(updatedBirthday: string) {
    try {
      const attributes = await updateUserAttributes({
        userAttributes: {
          birthdate: updatedBirthday
        }
      });
    } catch (error) {
      console.log(error);
    }
}

async function handleUpdatePassword({oldPassword,newPassword}: UpdatePasswordInput) {
    try {
      await updatePassword({ oldPassword, newPassword });
    } catch (err) {
      console.log(err);
    }
}

  
export default function Profile(){
    const {authStatus} = useAuthenticator((context) => [context.authStatus]);
    const user = useAuthenticator((context) => [context.user]);

    const[groups, setGroups] = useState(undefined);
    const[userName, setUserName] = useState(String);
    const [userID, setUserID] = useState(String);
    const[email, setEmail] = useState(String);
    const[birthday, setBirthday] = useState(String);
    const[address, setAddress] = useState(Array);

    const [formState, setFormState] = useState({
        Email: '',
        oldPassword: '',
        newPassword: '',
        firstName: '',
        lastName: '',
        address: '',
        birthday: ''
    });

    const handleChange = (e: any) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitEmail = (e: any) => {
        e.preventDefault();
        const { Email } = formState;
        handleUpdateEmailAttributes(Email);
        client.graphql({ query: updateUser, variables: {input: {
          email: Email,
          id: userID
        }}});
        window.location.reload();
    };

    const handleSubmitPassword = (e: any) => {
        e.preventDefault();
        const { oldPassword, newPassword } = formState;
        const passwords = { oldPassword, newPassword };
        handleUpdatePassword(passwords);
        window.location.reload();
    };

    const handleSubmitFirstName = (e: any) => {
        e.preventDefault();
        const { firstName } = formState;
        handleUpdateFirstNameAttributes(firstName);
        client.graphql({ query: updateUser, variables: {input: {
          name: firstName,
          id: userID
        }}});
        window.location.reload();
    };

    const handleSubmitLastName = (e: any) => {
        e.preventDefault();
        const { lastName } = formState;
        handleUpdateLastNameAttributes(lastName);
        window.location.reload();
        client.graphql({ query: updateUser, variables: {input: {
          familyName: lastName,
          id: userID
        }}});
    };

    const handleSubmitAddress = (e: any) => {
        e.preventDefault();
        const { address } = formState;
        handleUpdateAddressAttributes(address);
        window.location.reload();
        client.graphql({ query: updateUser, variables: {input: {
          address: address,
          id: userID
        }}});
    };

    const handleSubmitBirthday = (e: any) => {
        e.preventDefault();
        const { birthday } = formState;
        handleUpdateBirthdayAttributes(birthday);
        window.location.reload();
    };


    useEffect(() => {
        fetchAuthSession({forceRefresh: true})
        .then(({tokens}) => {
            const idToken = tokens?.idToken as any;
            console.log(idToken);
            const userGroups = idToken.payload['cognito:groups'];
            const username = idToken.payload["name"] + " " + idToken.payload["family_name"];
            const id = idToken.payload["sub"];
            const email = idToken.payload["email"];
            const birthday = idToken.payload["birthdate"];
            const address = idToken.payload["address"].formatted;
            setGroups(userGroups ? userGroups[0] : "No active Groups");
            setUserName(username);
            setEmail(email);
            setUserID(id);
            setBirthday(birthday);
            setAddress(address);
            console.log(username);
            console.log(address);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return(
        <div>
            <br/><br/>
            <p className={styles['title']}>Profile</p>
            <p className={styles['text']}><>{groups}</></p>
            <p className={styles['text']}>Hi, <>{userName}</></p>
            <br/><br/>

            {/* User Info */}
            <div className={styles['block']}>
                <p className={styles['blocktext']}>Email:</p>
                <p className={styles['subtext']}>{email}</p>
                <p className={styles['blocktext']}>Address</p>
                <p className={styles['subtext']}>{address.toString()}</p>
                <p className={styles['blocktext']}>Birthday</p>
                <p className={styles['subtext']}>{birthday}</p>
                <Link className = {styles['button']} href = '/purchaseHistory'>My Purchases</Link>
            </div>
            <br/>

            {/* Update User Info */}

            {/* Email */}
            <div className={styles['block']}>
                <p className={styles['blocktext']}>Update Email</p>
                <form onSubmit={handleSubmitEmail} className={styles['container']}>
                    <label>
                        New Email: &nbsp;  
                        <input name="Email" value={formState.Email} onChange={handleChange} className={styles['inline']}/>
                    </label>
                    <br/>
                    <input type="submit" value="Submit" className={styles['button']}/>
                </form>
            </div>
            <br/>

            {/* Password */}
            <div className={styles['block']}>
                <p className={styles['blocktext']}>Update Password</p>
                <form onSubmit={handleSubmitPassword} className={styles['container']}>
                    <label>
                        New Password: &nbsp;  
                        <input name="newPassword" value={formState.newPassword} onChange={handleChange} className={styles['inline']}/>
                        <br/><br/>
                        Old Password: &nbsp;  
                        <input name="oldPassword" value={formState.oldPassword} onChange={handleChange} className={styles['inline']}/>
                    </label>
                    <br/>
                    <input type="submit" value="Submit" className={styles['button']}/>
                </form>
                <br/>
            </div>
            <br/>

            {/* First name */}
            <div className={styles['block']}>
                <p className={styles['blocktext']}>Update First Name</p>
                <form onSubmit={handleSubmitFirstName} className={styles['container']}>
                    <label>
                        New First Name: &nbsp;  
                        <input name="firstName" value={formState.firstName} onChange={handleChange} className={styles['inline']}/>
                    </label>
                    <br/>
                    <input type="submit" value="Submit" className={styles['button']}/>
                </form>
                <br/>
            </div>
            <br/>

            {/* Last name */}
            <div className={styles['block']}>
                <p className={styles['blocktext']}>Update Last Name</p>
                <form onSubmit={handleSubmitLastName} className={styles['container']}>
                    <label>
                        New Last Name: &nbsp;  
                        <input name="lastName" value={formState.lastName} onChange={handleChange} className={styles['inline']}/>
                    </label>
                    <br/>
                    <input type="submit" value="Submit" className={styles['button']}/>
                </form>
                <br/>
            </div>
            <br/>

            {/* Address */}
            <div className={styles['block']}>
                <p className={styles['blocktext']}>Update Address</p>
                <p className={styles['example']}>Example: 123 University Dr, Clemson, 29630</p>
                <form onSubmit={handleSubmitAddress} className={styles['container']}>
                    <label>
                        New Address: &nbsp;  
                        <input name="address" value={formState.address} onChange={handleChange} className={styles['inline']}/>
                    </label>
                    <br/>
                    <input type="submit" value="Submit" className={styles['button']}/>
                </form>
                <br/>
            </div>    
            <br/>        

            {/* Birthday */}
            <div className={styles['block']}>
                <p className={styles['blocktext']}>Update Birthday</p>
                <p className={styles['example']}>YYYY-MM-DD</p>
                <form onSubmit={handleSubmitBirthday} className={styles['container']}>
                    <label>
                        New Birthday: &nbsp;  
                        <input name="birthday" value={formState.birthday} onChange={handleChange} className={styles['inline']}/>
                    </label>
                    <br/>
                    <input type="submit" value="Submit" className={styles['button']}/>
                </form>
                <br/>
            </div> 


            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
};