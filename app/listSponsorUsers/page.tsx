"use client";
import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import {createUser, createSponsorApplication } from "../../src/graphql/mutations"
import { getSponsorApplication, getUser, listSponsorApplications, listTodos, listUsers, listUserSponsors } from '../../src/graphql/queries';
import config from '@/src/amplifyconfiguration.json';

import React, {useEffect } from 'react';
import { fetchAuthSession } from "aws-amplify/auth";
import {createUserSponsor, deleteSponsorApplication, updateUser, updateUserSponsor} from "../../src/graphql/mutations"
import styles from "../components/styles/listSponsorApplications.module.css"
Amplify.configure(config);

const client = generateClient();
type SponsorApplication = {
    __typename: string;
    id: string;
    userId: string;
    sponsor: string;
    reason: string;
    additionalInfo?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean  | null;
    _lastChangedAt: number  | null;
    userApplicationsId?: string  | null;
    user: User;
};

type User = {
    id: string;
    name: string;
    familyName: string;
    email: string;
};




export default function SponsorUsers() {


    const [userGroup, setGroup] = useState(String);
    const [userId, setUserId] =useState(null);
    const [userSponsors, setUserSponsors] = useState<any[]>([]);
    const [pointsToAdd, setPointsToAdd] = useState(0);
    

    // useEffect(() => {
    //     client.graphql({
    //         query: listUserSponsors
    //     })
    //     .then(result => {
    //         console.log(result.data.listUserSponsors.items);
    //         setUserSponsors(result.data.listUserSponsors.items);
    //     })
    //     .catch(error => console.error('Error fetching user sponsors:', error));
    // }, []); // Empty dependency array ensures this runs only on mount

    const sponsorIdMapping: { [key: string]: string } = {
        'Sponsors1': '0',
        'Sponsors2': '1',
        'Sponsors3': '2'
    };

    function addPoints(userSponsor:any, points:number) {
        const newPoints = userSponsor.points + points;
        client.graphql({
            query: updateUserSponsor,
            variables: {
                input: {
                    id: userSponsor.id,
                    points: newPoints
                }
            }
        })
        .then(() => {
            // Update the local state
            setUserSponsors(userSponsors.map(sponsor => sponsor.id === userSponsor.id ? {...sponsor, points: newPoints} : sponsor));
        })
        .catch(error => console.error('Error adding points:', error));
    }
      
    function removePoints(userSponsor:any, points:number) {
        const newPoints = userSponsor.points - points;
        client.graphql({
            query: updateUserSponsor,
            variables: {
                input: {
                    id: userSponsor.id,
                    points: newPoints
                }
            }
        })
        .then(() => {
            // Update the local state
            setUserSponsors(userSponsors.map(sponsor => sponsor.id === userSponsor.id ? {...sponsor, points: newPoints} : sponsor));
        })
        .catch(error => console.error('Error removing points:', error));
    }
        
    useEffect(() => {
        fetchAuthSession({ forceRefresh: true })
        .then(({ tokens }) => {
            const idToken = tokens?.idToken as any;
            const id = idToken.payload["sub"];
            const group = idToken.payload["cognito:groups"]
            setGroup(group);
            setUserId(id);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() =>{
        console.log("In use effect for sponsor mapping");
        if (userGroup){
        console.log("In userGroup");
        console.log(userGroup[0]);
        const currId = sponsorIdMapping[userGroup[0]];
        console.log("currid is", currId);
        if(userGroup[0] == "Admins"){
            client.graphql({ query: listUserSponsors, 
            })
            .then(result => {
                console.log("setting applications");
                setUserSponsors(result.data.listUserSponsors.items);
                console.log(result);
            })
            .catch(error => {
                console.error('Error fetching sponsor applications:', error);
            });
        }else if(userGroup[0].toLowerCase().includes('sponsor'.toLowerCase())){
            console.log("doing the querey for sponsors");
            client.graphql({ query: listUserSponsors, variables: { filter: {
                sponsorId: {
                    eq: currId} }} })
            .then(result => {
                setUserSponsors(result.data.listUserSponsors.items);
                console.log("Got this result");
                console.log(result);
            })
            .catch(error => {
                console.error('Error fetching sponsor applications:', error);
            });
        }
        
    }else{
        console.log("couldnt find userGroup");
    }
    }, [userGroup])

    return (
        <div className={styles["container"]}>
        {userSponsors.map(userSponsor => (
            <div key={userSponsor.id} className={styles["application"]}>
                <h2 className={styles["details"]}>Sponsor ID: {userSponsor.sponsorId}</h2>
                <p className={styles["details"]}>UserName: {userSponsor.user.name + " " + userSponsor.user.familyName}</p>
                <p className={styles["details"]}>Points: {userSponsor.points}</p>
                <p className={styles["details"]}>Created At: {userSponsor.createdAt}</p>
                <p className={styles["details"]}>Updated At: {userSponsor.updatedAt}</p>
                <input className = {styles["inputDetails"]} type="number" onChange={(e) => setPointsToAdd( parseInt(e.target.value))} placeholder="Enter points to add"/>
                    <button className={styles["details"]} onClick={() => addPoints(userSponsor, pointsToAdd)}>Add Points</button>
                    <button className={styles["details"]} onClick={() => removePoints(userSponsor, pointsToAdd)}>Remove Points</button>
            </div>
        ))}
    </div>
    );
}