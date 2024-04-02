"use client";
import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import {createUser, createSponsorApplication } from "../../src/graphql/mutations"
import { getSponsorApplication, getUser, listSponsorApplications, listTodos, listUsers } from '../../src/graphql/queries';
import config from '@/src/amplifyconfiguration.json';

import React, {useEffect } from 'react';
import { fetchAuthSession } from "aws-amplify/auth";
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



export default function ApplicationListing() {
   
    const [applications, setApplications] =useState<any[]>([]);
    const [userGroup, setGroup] = useState(String);
    const [userId, setUserId] =useState(null);

    const sponsorIdMapping: { [key: string]: string } = {
        'Sponsors1': '0',
        'Sponsors2': '1',
        'Sponsors3': '2'
    };

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
        console.log("In use effect");
        if (userGroup){
        console.log("In userGroup");
        console.log(userGroup[0]);
        const currId = sponsorIdMapping[userGroup[0]];
        console.log("currid is", currId);
        if(userGroup[0] == "Admins"){
            client.graphql({ query: listSponsorApplications })
            .then(result => {
                setApplications(result.data.listSponsorApplications.items);
                console.log(result);
            })
            .catch(error => {
                console.error('Error fetching sponsor applications:', error);
            });
        }else if(userGroup[0].toLowerCase().includes('sponsor'.toLowerCase())){
            console.log("doing the querey for sponsors");
            client.graphql({ query: listSponsorApplications, variables: { filter: {sponsorId: {eq: currId} }} })
            .then(result => {
                setApplications(result.data.listSponsorApplications.items);
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



    // useEffect(() => {
    //     client.graphql({ query: listSponsorApplications })
    //         .then(result => {
    //             setApplications(result.data.listSponsorApplications.items);
    //             console.log(result);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching sponsor applications:', error);
    //         });
    // }, []);




    return (
           <div className={styles["container"]}>
            {applications.map(application => (
            <div key={application.id} className={styles["application"]}>
                <h2 className={styles["details"]}>{application.sponsorId}</h2>
                <p className={styles["details"]}>{application.reason}</p>
                <p className={styles["details"]}>{application.additionalInfo}</p>
                <p className={styles["details"]}>User Name: {application.user.name}</p>
                <p className={styles["details"]}>Family Name: {application.user.familyName}</p>
                <p className={styles["details"]}>Email: {application.user.email}</p> 
                <p className={styles["details"]}>Address: {application.user.address}</p>
            </div>
        ))}</div>
    );
}