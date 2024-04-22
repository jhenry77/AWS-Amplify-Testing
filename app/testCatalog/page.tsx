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
import { UserPointsContext } from '../components/pointsContext';
Amplify.configure(awsExports);
const client = generateClient();

function SearchiTunes(url: string) {

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


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userId, setUserId] = useState(null);
  const [graphuserPoints, setPoints] = useState(0);
  const { cart, addItem, removeItem } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const { userPoints, updateUserPoints } = useContext(UserPointsContext);
  const [userGroup, setGroup] = useState(String);
  const [userSponsorId, setUserSponsorId] = useState(String);
  const [url, setUrl] = useState(String);

  const sponsorIdMapping: { [key: string]: string } = {
    'Sponsors1': '0',
    'Sponsors2': '1',
    'Sponsors3': '2'
  };

  const currId = sponsorIdMapping[userGroup[0]];


  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: any) => {
    console.log("just entered handle search submit");
    const group = userSponsorId;
    console.log(userSponsorId);
    let newUrl = 'https://itunes.apple.com/search?term=' + searchTerm;
    console.log("our url before the if's is" + newUrl);
    if(group == '0'){
      newUrl = `https://itunes.apple.com/search?term=${searchTerm}&entity=song&explicit=N`;
    }
    else if(group == '1'){
      newUrl = `https://itunes.apple.com/search?term=${searchTerm}&entity=audiobook&explicit=N`;
    }
    else if(group == '2'){
      newUrl = `https://itunes.apple.com/search?term=${searchTerm}&entity=movie&explicit=N`;
    }
    console.log("after this if's and our url is");
    console.log(newUrl);
  
    setUrl(newUrl); // Set the state once after determining the correct URL
  
    event.preventDefault();
    setLoading(false); // Initially set loading to false
  
    const timeoutId = setTimeout(() => {
      setLoading(true); // Set loading to true if API call hasn't completed within 200ms
    }, 200);
  
    SearchiTunes(newUrl).then(results => {
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


  // Other useEffect hooks and function definitions remain unchanged
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
}, [])



  useEffect(() =>{
    if (userId){
        client.graphql({ query: getUser, 
            variables: {
                  id: userId
            }
        })
        .then(result => {
            if (result.data.getUser && result.data.getUser.sponsors?.items) {
              const sponsorId = result.data.getUser.sponsors.items[0].sponsor.id;
              const points = result.data.getUser.sponsors.items[0].points;
              updateUserPoints(points);
              setUserSponsorId(sponsorId);
            }
        })
        .catch(error => {
            console.error('Error fetching sponsor applications:', error);
        });
      }
  }, [userId])

  return (
    <main className="min-h-screen flex flex-row p-12 flex-wrap justify-center">
      <div className={styles.searchbar}>
        Points: {userPoints}
        <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
          <input
            className={`text-black ${styles.searchInput}`} // Add or adjust your input class as needed
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Catalog"
          />
          <button type="submit" className={styles.searchButton}>Search</button>
        </form>
        {loading && <p>Loading...</p>}
      </div>
      {data && data.map((item, index) => (
        <CatalogUI
        key={index}
        itemType={item.wrapperType}
        songTitle={item.trackName || item.artistName} // Use artistName for audiobooks
        albumTitle={item.collectionName}
        albumCover={item.artworkUrl100}
        price={item.collectionPrice * 100}
        trackId={item.wrapperType === 'audiobook' ? item.collectionId : item.trackId}      
        />
      ))}
    </main>
  );
}

