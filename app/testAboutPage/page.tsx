// "use client";
import React from 'react';
import Navbar from "../components/AppNav";
import { Amplify } from 'aws-amplify';
import {useAuthenticator} from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { getCurrentUser } from 'aws-amplify/auth';
import {fetchUserAttributes} from 'aws-amplify/auth';



import { Authenticator, Placeholder } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import currentAuthenticatedUser from '../components/AuthUser';
import AuthUser from '../components/AuthUser';

import awsExports from '../../src/aws-exports';
Amplify.configure(awsExports);

type AboutData = {
  teamNumber: string
  VersionNum : string
  SprintDate : string
  Productname: string
  ProductDescription: string
}

async function handleFetchUserAttributes() {
  try {
    const userAttributes = await fetchUserAttributes();
    console.log(userAttributes);
  } catch (error) {
    console.log(error);
  }
}


export default async function Home() {
  var data = await getAboutData();
  // const {user, signOut} = useAuthenticator((context) => [context.user]);

  // handleFetchUserAttributes();

  
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      <div className="max-w-4xl w-full text-center">
      <Navbar />
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <Image
          src="/teamlogo.jpg"
          alt="Team Photo"
          width={640}
          height={360}
          className="mx-auto"
        />
        <p className="text-lg mt-6">
          Welcome to <strong>Team 3&apos;s Website</strong>! We&apos;re dedicated to providing the best experience for our users. <br />
          <strong>Our mission is to innovate and inspire.</strong>
        </p>
        <p className="text-lg mt-4">
        <strong>Team Members:  </strong><br />
          Connor Love <br /> 
          Rinzo Martinelli <br /> 
          Jason Senf<br /> 
          Jackson Henry <br/>
          <br />
          With a focus on quality and community, we strive to bring you the latest in our field. Our team is made up of passionate professionals committed to excellence in everything we do.
          <br />
        </p>
        {data ? (
          <>
            <h1 className="text-4xl  mb-4">teamNumber: {data.success[0].teamNumber}<br></br>VersionNum: {data.success[0].VersionNum}<br></br>SprintDate: {data.success[0].SprintDate}<br></br>Productname: {data.success[0].ProductName}<br></br>Product Description: {data.success[0].ProductDescription} </h1>
            {/* Other HTML elements using data properties */}
            {/* <p className="text-lg mt-6">{data.description}</p> */}
            {/* ... */}
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </main>
  );
}
async function getAboutData() {
  const res = await fetch('https://fo9xpwxinl.execute-api.us-east-1.amazonaws.com/dev/about/1')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

