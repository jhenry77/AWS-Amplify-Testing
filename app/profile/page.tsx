"use client"
import styles from "../components/styles/profile.module.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { fetchAuthSession } from "aws-amplify/auth";
import { updateUserAttributes, type UpdateUserAttributesOutput } from 'aws-amplify/auth';
import { list } from "postcss";
//import { changePassword } from 'aws-amplify/auth';


async function handleUpdateEmailAndNameAttributes(
    updatedEmail: string,
    updatedName: string
  ) {
    try {
      const attributes = await updateUserAttributes({
        userAttributes: {
          email: updatedEmail,
          name: updatedName
        }
      });
      // handle next steps
    } catch (error) {
      console.log(error);
    }
  }
  
export default function Profile(){
    const {authStatus} = useAuthenticator((context) => [context.authStatus]);
    const user = useAuthenticator((context) => [context.user]);

    const[groups, setGroups] = useState(undefined);
    const[userName, setUserName] = useState(String);
    const[email, setEmail] = useState(String);
    const[birthday, setBirthday] = useState(String);
    const[address, setAddress] = useState(Array);

    const [formState, setFormState] = useState({
        Email: ''
    });

    const handleChange = (e: any) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Here you would handle the form submission,
        // possibly sending the formState object to your backend
        const { Email } = formState;
        console.log("data we need");
        console.log(Email);
 };


    useEffect(() => {
        fetchAuthSession({forceRefresh: true})
        .then(({tokens}) => {
            const idToken = tokens?.idToken as any;
            console.log(idToken);
            const userGroups = idToken.payload['cognito:groups'];
            const username = idToken.payload["name"] + " " + idToken.payload["family_name"];
            const email = idToken.payload["email"];
            const birthday = idToken.payload["birthdate"];
            const address = idToken.payload["address"].formatted;
            setGroups(userGroups ? userGroups[0] : "No active Groups");
            setUserName(username);
            setEmail(email);
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
            <h1 className={styles['title']}>Profile</h1>
            <h2 className={styles['text']}><>{groups}</></h2>
            <h3 className={styles['text']}>Hi, <>{userName}</></h3>
            <br/><br/>

            {/* Email */}
            <div className={styles['block']}>
                <p className={styles['blocktext']}>Email:</p>
                <p className={styles['subtext']}>{email}</p>
                <p className={styles['blocktext']}>Address</p>
                <p className={styles['subtext']}>{address.toString()}</p>
                <p className={styles['blocktext']}>Birthday</p>
                <p className={styles['subtext']}>{birthday}</p>


                {/* <input className={styles['input']}
                    type="email"
                    placeholder="johnsmith@example.com"
                    // ref={newEmailRef}
                />
                <p className={styles['subtext']}>Old Email</p>
                <input className={styles['input']}
                    type="email"
                    placeholder="johnsmith@example.com"
                />
                <br/>
                <button className={styles['button']}>Submit</button>
                <br/> */}
            </div>
            <br/>

            {/* Password */}
            <div className={styles['block']}>
                <h4 className={styles['blocktext']}>Update Email</h4>
                    <p className={styles['subtext']}>Enter New Email</p>
                    <form onSubmit={handleSubmit} className={styles['container']}>

                        <label>
                            Email: &nbsp;  
                            <input name="Email" value={formState.Email} onChange={handleChange} className="text-black" />
                        </label>
                        <input type="submit" value="Submit" className={styles['submitButton']} />
                    </form>
                {/* <h5 className={styles['blocktext']}>Update Password</h5>
                <p className={styles['subtext']}>Enter New Password</p>
                <input className={styles['input']}
                    type="password"
                    placeholder="New Password"
                />
                <p className={styles['subtext']}>Current Password</p>
                <input className={styles['input']}
                    type="password"
                    placeholder="Current Password"
                />
                <br/>
                <button className={styles['button']}>Submit</button> */}
                <br/>
            </div>
        </div>
    );
};