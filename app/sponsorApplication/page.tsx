"use client";
import styles from "../components/styles/sponsorApplication.module.css"
import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import {createUser, createSponsorApplication } from "../../src/graphql/mutations"
import { getUser, listTodos, listUsers } from '../../src/graphql/queries';
import config from '@/src/amplifyconfiguration.json';
import Link from "next/link"
import { useAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from "aws-amplify/auth";
import React, {useEffect } from 'react';
import { fetchAuthSession } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
Amplify.configure(config);

const client = generateClient();


type User = {
    id: string;
    sponsorId: string;
    name: string;
    familyName: string;
    email: string;
    address: string;
  } | null;

export default function SponsorForm() {
    const [formState, setFormState] = useState({
        sponsor: '',
        reason: '',
        additionalInfo: ''
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
        const { sponsor, reason, additionalInfo } = formState;
        const sponsorIdMapping: { [key: string]: string } = {
            'sponsor1': '0',
            'sponsor2': '1',
            'sponsor3': '2'
        };
        const sponsorId = sponsorIdMapping[sponsor];
        // user should be the state variable where you store the user's data
        if (user){
        const { id: userId } = user;

        const newApplication = {
            userId,
            sponsorId,
            reason,
            additionalInfo
        };

        client.graphql({ query: createSponsorApplication, variables: { input: newApplication } })
            .then(() => {
            console.log('Sponsor application submitted');
            setFormState({
                sponsor: '',
                reason: '',
                additionalInfo: ''
            });
            })
            .catch(error => {
            console.error('Error submitting sponsor application:', error);
            });
        }
 };


    
    const [groups, setGroups] = useState(undefined);
    const [userName, setUserName] = useState(String);
    const [userID, setUserID] = useState(String);
    const [userfName, setFname] = useState(String);
    const [userLName, setUserLName] = useState(String);
    const [userEmail, setUserEmail] = useState(String);
    const [userAddress, setUserAddress] = useState(String);

    const [user, setUser] = useState<any>(null);



    useEffect(() => {
        fetchAuthSession({ forceRefresh: true })
        .then(({ tokens }) => {
            const idToken = tokens?.idToken as any;
            console.log(idToken);
            const userGroups = idToken.payload['cognito:groups'];
            const username = idToken.payload["name"] + " " + idToken.payload["family_name"];
            const fName = idToken.payload["name"];
            const lName = idToken.payload["family_name"]
            const id = idToken.payload["sub"];
            const email = idToken.payload["email"]
            const address = idToken.payload["address"];
            setUserAddress(address);
            setUserEmail(email);
            setUserID(id);
            setGroups(userGroups ? userGroups[0] : "No active Groups");
            setUserName(username);
            setFname(fName);
            setUserLName(lName);
            console.log(username);
            const userData = {
                id: idToken.payload["sub"],
                name: idToken.payload["name"],
                familyName: idToken.payload["family_name"],
                email: idToken.payload["email"],
                address: idToken.payload["address"]
              };
              setUser(userData);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
    useEffect(() => {
    }, [userName]);


    // client.graphql({
    //     query: createTodo,
    //     variables: {
    //       input: {
    //         name: 'My first todo!'
    //       }
    //     }
    //   }).then(result => {
    //     // You can handle the result here
    //     console.log(result);
    //   }).catch(error => {
    //     // You can handle any errors here
    //     console.error(error);
    //   });
    //   client.graphql({ query: listTodos })
    //   .then(result => {
    //     // Handle the result here
    //     console.log("here is the query result");
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     // Handle any errors here
    //     console.error(error);
    //   });

    return (
            <form onSubmit={handleSubmit} className={styles['container']}>
                <label>
                    Sponsor:
                    <select name="sponsor" value={formState.sponsor} onChange={handleChange} className={styles['possibleSponsors']}>
                        {/* Here you would map over your sponsors and create an option for each one */}
                        <option value="">--Please choose a sponsor--</option>
                        <option value="sponsor1">Sponsor 1</option>
                        <option value="sponsor2">Sponsor 2</option>
                        <option value="sponsor3">Sponsor 3</option>
                    </select>
                </label>
                <label>
                    Why you'd be a good fit:   
                    <textarea name="reason" value={formState.reason} onChange={handleChange} className={styles['goodFit']} />
                </label>
                <label>
                    Additional information:
                    <textarea name="additionalInfo" value={formState.additionalInfo} onChange={handleChange}className={styles['additionalInfo']} />
                </label>
                <input type="submit" value="Submit" className={styles['submitButton']} />
            </form>
    );
}