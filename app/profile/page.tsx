"use client"
import styles from "../components/styles/profile.module.css";
import React, { useState, useRef } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { fetchAuthSession } from "aws-amplify/auth";
import { updateUserAttribute, type UpdateUserAttributeOutput } from 'aws-amplify/auth';
import { list } from "postcss";
//import { changePassword } from 'aws-amplify/auth';


async function handleUpdateUserAttribute(attributeKey: string, value: string) {
    try {
      const output = await updateUserAttribute({
        userAttribute: {
          attributeKey,
          value
        }
      });
      handleUpdateUserAttributeNextSteps(output);
    } catch (error) {
      console.log(error);
    }
  }
  
  function handleUpdateUserAttributeNextSteps(output: UpdateUserAttributeOutput) {
    const { nextStep } = output;
  
    switch (nextStep.updateAttributeStep) {
      case 'CONFIRM_ATTRIBUTE_WITH_CODE':
        const codeDeliveryDetails = nextStep.codeDeliveryDetails;
        console.log(
          `Confirmation code was sent to ${codeDeliveryDetails?.deliveryMedium}.`
        );
        // Collect the confirmation code from the user and pass to confirmUserAttribute.
        break;
      case 'DONE':
        console.log(`attribute was successfully updated.`);
        break;
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

    const newEmailRef = useRef('');
    const updateEmail = () => {
        const newEmail = newEmailRef.current;
        handleUpdateUserAttribute('email', newEmail);
    }

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
                {/* <h4 className={styles['blocktext']}>Update Email</h4>
                <p className={styles['subtext']}>Enter New Email</p>
                <input className={styles['input']}
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
                <h5 className={styles['blocktext']}>Update Password</h5>
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
                <button className={styles['button']}>Submit</button>
                <br/>
            </div>
        </div>
    );
};