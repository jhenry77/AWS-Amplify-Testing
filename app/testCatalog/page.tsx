"use client"; 
import React from 'react';
import Navbar from "../components/AppNav";
import { Amplify } from 'aws-amplify';
// import  useAuthenticator  from '../components/useAuthenticator';
import { useState, useEffect } from 'react';
import CatalogUI from '../components/CatalogUI';



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

const [data, setData] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://itunes.apple.com/search?term=jack+johnson');
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  fetchData();
}, []);

  // handleFetchUserAttributes();

  
  return (
    <main className="min-h-screen flex flex-row p-14 flex-wrap justify-center">   
      <CatalogUI/>
      <CatalogUI/>
      <CatalogUI/>  
      <CatalogUI/>
      <CatalogUI/>
      <CatalogUI/> 
      <CatalogUI/>
      <CatalogUI/>
      <CatalogUI/> 
        
       
    </main>
  );
}


 

