"use client";
import React from 'react';
import Navbar from "../components/AppNav";
import { Amplify } from 'aws-amplify';
// import  useAuthenticator  from '../components/useAuthenticator';
import { useState, useEffect } from 'react';
import CatalogUI from '../components/CatalogUI';
import styles from '../components/styles/catalogpage.module.css';



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
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const [isChecked, setIsChecked] = useState(false); // Initialize the checkbox state

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };
  const handleSearchSubmit = (event: any) => {
    event.preventDefault();
    searchiTunes(searchTerm).then(results => setData(results))
    .catch(error => console.error(error));
  };
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const router = useRouter();
  //   authStatus === 'configuring' && router.push('/testLogin');
  //   authStatus !== 'authenticated' ? router.push('/testLogin') : router.push('/testCatalog');

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    searchiTunes('').then(data => setData(data));
    console.log("IN use effect");
    console.log(data);
  }, []);


  // handleFetchUserAttributes();

  return (
    <main className="min-h-screen flex flex-row p-12 flex-wrap justify-center">
      <div className={styles.searchbar}>
        <form onSubmit={handleSearchSubmit}>
          <input className="text-black" type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search iTunes" />
            <label>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
              Include additional options
            </label>
          <button type="submit">Search</button>
        </form>
      </div>
      {data && data.map((item, index) => (
      <CatalogUI
        key={index}
        songTitle={item.trackName}
        albumTitle={item.collectionName}
        albumCover={item.artworkUrl100}
        price={item.collectionPrice}
      />

      ))}
    </main>
  )}
    




function searchiTunes(term: string) {
  const url = `https://itunes.apple.com/search?term=${term}&media=music&entity=song`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      // Return the response data
      console.log(data.results);
      return data.results;
    })
    .catch(error => {
      // Handle the error here
      console.error(error);
    });
}
