// page.tsx

"use client";
import React, { use } from 'react';
import { Amplify } from 'aws-amplify';
// import  useAuthenticator  from '../components/useAuthenticator';
import { useState, useEffect } from 'react';
import styles from './components/styles/about.module.css';
// import showLeftMenu from './components/styles/HamburgerMenu.tsx';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation'
import Image from 'next/image'
//import { getCurrentUser } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth';
//import { AuthSession } from 'aws-amplify/auth';

//import { Authenticator, Placeholder } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import currentAuthenticatedUser from '../components/AuthUser';
//import AuthUser from './components/AuthUser';

import awsExports from '../src/aws-exports';
import { CognitoIdentityProviderClient, AdminAddUserToGroupCommand } from "@aws-sdk/client-cognito-identity-provider"; 
import AuthClient from './components/AuthClient';

import { generateClient } from 'aws-amplify/api';
import { createSponsor, createUser, deleteSponsor, deleteUserSponsor } from "../src/graphql/mutations"
import { getUser, listSponsorApplications, listSponsors, listTodos, listUsers, listUserSponsors } from '../src/graphql/queries';
import config from '@/src/amplifyconfiguration.json';
import Link from "next/link"
import { signOut } from "aws-amplify/auth";
import HamburgerMenuProps from "./components/HamburgerMenu";
import { userAgentFromString } from 'next/server';
Amplify.configure(config);

const client = generateClient();

type User = {
  id: string
  name: string
  familyName: string
  email: string
  address: string
  
} | null;

Amplify.configure(awsExports);


type AboutData = {
  teamNumber: string
  VersionNum: string
  SprintDate: string
  Productname: string
  ProductDescription: string
}

// HamburgerMenuProps = {

// }


export default function Home() {
  // const [showLeftMenu, setShowLeftMenu] = useState('');
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
        console.log("in fetch auth session");
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
          address: idToken.payload["address"].formatted
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
    console.log("right before get user")
    client.graphql({ query: getUser, variables: { id: userID } })
      .then(result => {
        console.log("Inside of get user");
        if (result.data.getUser) {
          console.log('User already exists in database');
          console.log(result.data.getUser);
          return;
        } else {
          client.graphql({ query: createUser, variables: { input: user } })
            .then(() => {
              console.log('User added to database');
            })
            .catch(error => {
              console.log("input is");
              console.log(user);
              console.error('Error adding user to database:', error);
            });
        }
      })
  });

  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    console.log('HERE: BEFORE IF USER GROUPS' + groups);
    if(groups == "No active Groups"){
      console.log('HERE: USER GROUPS');
      const cogClient = new CognitoIdentityProviderClient({
        region: config.aws_project_region,
        credentials: {
          accessKeyId: 'AKIAT77CFA37X6OYBJN5', 
          secretAccessKey: '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'
        }
      });
      const input = {
        UserPoolId: "us-east-1_YSw38Ruze",
        Username: userID,
        GroupName: "Drivers",
      };
      const command = new AdminAddUserToGroupCommand(input);

      const fetchData = () => {
        cogClient.send(command)
          .then(response => {
            setResponse(response);
          })
          .catch(error => {
            console.error(error);
          });
      };
      fetchData();
    }
  }, [groups]); 

  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
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
  }, [authStatus, router]);



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

  const [userDetails, setUserDetails] = useState(null);

 
  // console.log("showLeftMenu = ", showLeftMenu);

  return (
    <main className={styles['body']}>
      <div className='main-content'>
        <h1 className={styles['title']}>About Us</h1>
        <Image
          src="/teamlogo.jpg"
          alt="Team Photo"
          width={400}
          height={400}
          className="mx-auto"
        />
        <br />
        <p className={styles['text']}>
          Welcome to <strong>Team 3&apos;s Website</strong>! We&apos;re dedicated to providing the best experience for our users. <br />
          <strong>Our mission is to innovate and inspire.</strong>
        </p>
        <p className={styles['text']}>
          <strong>Team Members:  </strong><br />
          Connor Love <br />
          Renzo Muzzarelli <br />
          Jason Senf<br />
          Jackson Henry <br />
          <br />
          With a focus on quality and community, we strive to bring you the latest in our field.<br /> Our team is made up of passionate professionals committed to excellence in everything we do.

          <br />
          <br />
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
       <br/><br/>
      </div>
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
