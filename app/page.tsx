"use client"; 
import React from 'react';
import Navbar from "./components/AppNav";
import { Amplify } from 'aws-amplify';
// import  useAuthenticator  from '../components/useAuthenticator';
import { useState, useEffect } from 'react';
import styles from './components/styles/about.module.css'





import { UseAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { getCurrentUser } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth';
import { AuthSession } from 'aws-amplify/auth';







import { Authenticator, Placeholder } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import currentAuthenticatedUser from '../components/AuthUser';
import AuthUser from './components/AuthUser';

import awsExports from '../src/aws-exports';
import AuthClient from './components/AuthClient';

import { generateClient } from 'aws-amplify/api';
import {createSponsor, createUser, deleteSponsor } from "../src/graphql/mutations"
import { getUser, listSponsors, listTodos, listUsers } from '../src/graphql/queries';
import config from '@/src/amplifyconfiguration.json';
import Link from "next/link"
import { signOut } from "aws-amplify/auth";
Amplify.configure(config);

const client = generateClient();


type User = {
    id: string;
    name: string;
    familyName: string;
    email: string;
    address: string;
  } | null;

    
Amplify.configure(awsExports);


type AboutData = {
  teamNumber: string
  VersionNum : string
  SprintDate : string
  Productname: string
  ProductDescription: string
}



export default function Home() {

  const [groups, setGroups] = useState(undefined);
    const [userName, setUserName] = useState(String);
    const [userID, setUserID] = useState(String);
    const [userfName, setFname] = useState(String);
    const [userLName, setUserLName] = useState(String);
    const [userEmail, setUserEmail] = useState(String);
    const [userAddress, setUserAddress] = useState(String);

    const [user, setUser] = useState<User>(null);



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

    useEffect(() => {
        if (!user) {
          return;
        }
    client.graphql({ query: getUser, variables: { id: userID } })
    .then(result => {
      if (result.data.getUser) {
        // console.log('User already exists in database');
        return;
      }else{
        client.graphql({ query: createUser, variables: { input: user } })
        .then(() => {
          console.log('User added to database');
        })
        .catch(error => {
          console.error('Error adding user to database:', error);
        });
      }
      })

    
        const sponsorName = 'Sponsor1'


client.graphql({query: listSponsors}).then(result =>{
        console.log(result);
      })
      .catch(error => {
        console.error('Error listing sponsors:', error);
      });
      })
  

  const {authStatus} = useAuthenticator((context) => [context.authStatus]);
  const Curruser = useAuthenticator((context) => [context.user]);
  const router = useRouter();
 



  useEffect(() => {
    if (authStatus === 'configuring') {
        router.push('/login');
    } else if (authStatus !== 'authenticated') {
        router.push('/login');
    } else {
        router.push('/');
    }
}, [authStatus]);



  const [data, setData] = useState<{ success: { teamNumber: any; VersionNum: any; SprintDate: any; ProductName: any; ProductDescription: any; }[]; } | null>(null);

  useEffect(() => {
    getAboutData()
      .then((formattedResponse) => {
        // Access the formatted response here
        // sconsole.log(formattedResponse);
        setData(formattedResponse); // Set the data here
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error:', error);
      });
  }, []);
  // const {user, signOut} = useAuthenticator((context) => [context.user]);


  // handleFetchUserAttributes();
  // useEffect(() => {
  //   if (user) {
  //     console.log(user);
  //   }
  // }, [user]);

  const[userDeatails, setUserDetails] = useState(null);
  
  // useEffect(() => {
  //   fetchAuthSession({forceRefresh: true})
  //     .then(({tokens}) => {
  //       console.log(tokens);
  //       const groups = tokens?.idToken;
  //       console.log(groups);
  //       // console.log(`The userId: ${userId}`);
  //       // console.log(`The signInDetails: ${signInDetails}`);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);
  
  return (
    <main>
        <h1 className={styles['title']}>About Us</h1>
        <Image
          src="/teamlogo.jpg"
          alt="Team Photo"
          width={400}
          height={400}
          className="mx-auto"
        />
        <br/>
        <p className={styles['text']}>
          Welcome to <strong>Team 3&apos;s Website</strong>! We&apos;re dedicated to providing the best experience for our users. <br />
          <strong>Our mission is to innovate and inspire.</strong>
        </p>
        <p className={styles['text']}>
        <strong>Team Members:  </strong><br />
          Connor Love <br /> 
          Rinzo Martinelli <br /> 
          Jason Senf<br /> 
          Jackson Henry <br/>
          <br />
          With a focus on quality and community, we strive to bring you the latest in our field.<br/> Our team is made up of passionate professionals committed to excellence in everything we do.
          <br />
          <br/>
        </p>
        {data && (
          <h1 className={styles['text']}>
            teamNumber: {data.success[0].teamNumber}<br></br>
            VersionNum: {data.success[0].VersionNum}<br></br>
            SprintDate: {data.success[0].SprintDate}<br></br>
            Productname: {data.success[0].ProductName}<br></br>
            Product Description: {data.success[0].ProductDescription}
          </h1>
        )}
       
      
    </main>
  );
}
function getAboutData() {
  return fetch('https://fo9xpwxinl.execute-api.us-east-1.amazonaws.com/dev/about/1')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      return res.json();
    })
    .then((data) => {
      // Extract the relevant data
      const { teamNumber, VersionNum, SprintDate, ProductName, ProductDescription } = data.success[0];

      // Create a new object with the desired structure
      const formattedResponse = {
        success: [
          {
            teamNumber,
            VersionNum,
            SprintDate,
            ProductName,
            ProductDescription,
          },
        ],
      };

      console.log(JSON.stringify(formattedResponse));
      
      return formattedResponse; // Return the formatted data
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      // Handle errors
      throw error;
    });
}
 