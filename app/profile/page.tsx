"use client"
import styles from "../components/styles/profile.module.css";
import React, { useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { fetchAuthSession } from "aws-amplify/auth";

// import {
//     updateUserAttribute,
//     type UpdateUserAttributeOutput
//   } from 'aws-amplify/auth';

//   async function handleUpdateUserAttribute(attributeKey: string, value: string) {
//     try {
//       const output = await updateUserAttribute({
//         userAttribute: {
//           attributeKey,
//           value
//         }
//       });
//       handleUpdateUserAttributeNextSteps(output);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   function handleUpdateUserAttributeNextSteps(output: UpdateUserAttributeOutput) {
//     const { nextStep } = output;
  
//     switch (nextStep.updateAttributeStep) {
//       case 'CONFIRM_ATTRIBUTE_WITH_CODE':
//         const codeDeliveryDetails = nextStep.codeDeliveryDetails;
//         console.log(
//           `Confirmation code was sent to ${codeDeliveryDetails?.deliveryMedium}.`
//         );
//         // Collect the confirmation code from the user and pass to confirmUserAttribute.
//         break;
//       case 'DONE':
//         console.log(`attribute was successfully updated.`);
//         break;
//     }
//   }

//   async function handleUpdateEmailAndNameAttributes(
//     updatedEmail: string,
//     updatedName: string
//   ) {
//     try {
//       const attributes = await updateUserAttributes({
//         userAttributes: {
//           email: updatedEmail,
//           name: updatedName
//         }
//       });
//       // handle next steps
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
export default function Profile(){
    const {authStatus} = useAuthenticator((context) => [context.authStatus]);
    const user = useAuthenticator((context) => [context.user]);

    const[groups, setGroups] = useState(undefined);
    const[userName, setUserName] = useState(String);

    useEffect(() => {
        fetchAuthSession({forceRefresh: true})
        .then(({tokens}) => {
            const idToken = tokens?.idToken as any;
            console.log(idToken);
            const userGroups = idToken.payload['cognito:groups'];
            const username = idToken.payload["name"] + " " + idToken.payload["family_name"];
            setGroups(userGroups ? userGroups[0] : "No active Groups");
            setUserName(username);
            console.log(username);
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
        </div>
    );
};