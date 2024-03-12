"use client"; 
import React from 'react';
import Navbar from "../components/AppNav";
import { Amplify } from 'aws-amplify';
// import  useAuthenticator  from '../components/useAuthenticator';
import { useState, useEffect } from 'react';



import { UseAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { getCurrentUser } from 'aws-amplify/auth';




import { Authenticator, Placeholder } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import currentAuthenticatedUser from '../components/AuthUser';
import AuthUser from '../components/AuthUser';

import awsExports from '../../src/aws-exports';
import AuthClient from '../components/AuthClient';
Amplify.configure(awsExports);





export default function Home() {
  const {authStatus} = useAuthenticator((context) => [context.authStatus]);
  const router = useRouter();
//   authStatus === 'configuring' && router.push('/testLogin');
//   authStatus !== 'authenticated' ? router.push('/testLogin') : router.push('/testCatalog');

  

  // handleFetchUserAttributes();

  
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      <div className="max-w-4xl w-full text-center">        
        
       
      </div>
    </main>
  );
}


 

