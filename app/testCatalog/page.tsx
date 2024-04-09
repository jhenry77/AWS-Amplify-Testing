"use client";
import React,{useContext} from 'react';
import Navbar from "../components/AppNav";
import { Amplify } from 'aws-amplify';
// import  useAuthenticator  from '../components/useAuthenticator';
import { useState, useEffect } from 'react';
import CatalogUI from '../components/CatalogUI';
import styles from '../components/styles/catalogpage.module.css';
import { generateClient } from 'aws-amplify/api';



import { UseAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { getCurrentUser } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth';




import { Authenticator, Placeholder } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import currentAuthenticatedUser from '../components/AuthUser';
import AuthUser from '../components/AuthUser';

import awsExports from '../../src/aws-exports';
import AuthClient from '../components/AuthClient';
import { getUser } from '@/src/graphql/queries';
import CartContext from '../components/cart';
const client = generateClient();

Amplify.configure(awsExports);





export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userId, setUserId] = useState(null);
  const [userPoints, setPoints] = useState(0);
  const { cart, addItem, removeItem } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: any) => {
    event.preventDefault();
    setLoading(false); // Initially set loading to false

    const timeoutId = setTimeout(() => {
      setLoading(true); // Set loading to true if API call hasn't completed within 200ms
    }, 200);

    searchiTunes(searchTerm).then(results => {
      setData(results);
      clearTimeout(timeoutId); // Clear the timeout if search completes in time
      setLoading(false); // Set loading to false as search has completed
    })
    .catch(error => {
      console.error(error);
      clearTimeout(timeoutId); // Ensure to clear timeout on error as well
      setLoading(false); // Also, set loading to false on error
    });
  };

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    searchiTunes('').then(data => setData(data));
  }, []);

  // Other useEffect hooks and function definitions remain unchanged

  return (
    <main className="min-h-screen flex flex-row p-12 flex-wrap justify-center">
      <div className={styles.searchbar}>
        Points: {userPoints}
        <form onSubmit={handleSearchSubmit}>
          <input className="text-black" type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search iTunes" />
          <button type="submit" className={styles.searchButton}>Search</button>
        </form>
        {loading && <p>Loading...</p>}
      </div>
      {data && data.map((item, index) => (
        <CatalogUI
          key={index}
          songTitle={item.trackName}
          albumTitle={item.collectionName}
          albumCover={item.artworkUrl100}
          price={item.collectionPrice}
          trackId={item.trackId}
        />
      ))}
    </main>
  );
}
    




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
