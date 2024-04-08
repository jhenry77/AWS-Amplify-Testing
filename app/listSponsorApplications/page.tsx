"use client";
import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import {createUser, createSponsorApplication } from "../../src/graphql/mutations"
import { getSponsorApplication, getUser, listSponsorApplications, listTodos, listUsers, listUserSponsors } from '../../src/graphql/queries';
import config from '@/src/amplifyconfiguration.json';

import React, {useEffect } from 'react';
import { fetchAuthSession } from "aws-amplify/auth";
import {createUserSponsor, deleteSponsorApplication, updateUser} from "../../src/graphql/mutations"
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

    function acceptApplication(application:any) {
        // Check if a UserSponsor with the same userId and sponsorId already exists
        client.graphql({
          query: listUserSponsors,
          variables: {
            filter: {
              userId: { eq: application.userId },
              sponsorId: { eq: application.sponsorId }
            }
          }
        })
        .then(result => {
          if (result.data.listUserSponsors.items.length > 0) {
            console.log('A UserSponsor with the same userId and sponsorId already exists.');
          } else {
            // If not, create a new UserSponsor
            const newUserSponsor = {
              userId: application.userId,
              sponsorId: application.sponsorId,
              points: 100,
            };
            client.graphql({ query: createUserSponsor, variables: { input: newUserSponsor } })
              .then(() => declineApplication(application)) // delete the application after it's accepted
              .catch(error => console.error('Error creating UserSponsor:', error));
          }
        })
        .catch(error => console.error('Error checking for existing UserSponsor:', error));
        // client.graphql({
        //   query: updateUser,
        //   variables: {
        //     input: {
        //       id: {eq: application.userId}.toString(), // replace with the actual user id
        //       sponsors: [
        //         // replace with the actual UserSponsor objects
        //         {
        //           id: 'userSponsorId',
        //           sponsor: {
        //             id: 'sponsorId',
        //             name: 'sponsorName'
        //           }
        //         },
        //         // add more UserSponsor objects if needed
        //       ]
        //     }
        //   }
        // }).then(result => {
        //   console.log("we update the user and our result is");
        //   console.log(result);
        // })
        // .catch(error => console.error('Error updating user:', error));
      }
      
      function declineApplication(application:any) {
        client.graphql({
          query: deleteSponsorApplication,
          variables: {
            input: {
              id: application.id,
            }
          }
        })
        .then(() => {
          // remove the application from the local state
          setApplications(applications.filter(app => app.id !== application.id));
        })
        .catch(error => console.error('Error declining application:', error));
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
        console.log("In use effect");
        if (userGroup){
        console.log("In userGroup");
        console.log(userGroup[0]);
        const currId = sponsorIdMapping[userGroup[0]];
        console.log("currid is", currId);
        if(userGroup[0] == "Admins"){
            client.graphql({ query: listSponsorApplications, 
            })
            .then(result => {
                console.log("setting applications");
                setApplications(result.data.listSponsorApplications.items);
                console.log(result);
            })
            .catch(error => {
                console.error('Error fetching sponsor applications:', error);
            });
        }else if(userGroup[0].toLowerCase().includes('sponsor'.toLowerCase())){
            console.log("doing the querey for sponsors");
            client.graphql({ query: listSponsorApplications, variables: { filter: {
                sponsorId: {
                    eq: currId} }} })
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
                <button className={styles["details"]} onClick={() => acceptApplication(application)}>Accept</button>
                <button className={styles["details"]} onClick={() => declineApplication(application)}>Decline</button>
            </div>
        ))}</div>
    );
}