"use client";
import React, { useContext, useState, useEffect } from 'react';
import styles from '../components/styles/purchaseHistory.module.css';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import {createUser, createSponsorApplication, updateUserSponsor, createPurchase, createPurchaseItem} from "../../src/graphql/mutations"
import { getSponsorApplication, getUser, listSponsorApplications, listTodos, listUsers, listUserSponsors } from '../../src/graphql/queries';
import config from '@/src/amplifyconfiguration.json';

import { fetchAuthSession } from "aws-amplify/auth";


Amplify.configure(config);

const client = generateClient();
// const [userId, setUserId] = useState(0); // State to control dropdown



function PurchaseHistory() {
    const [userId, setUserId] = useState(null);
    
      
      const [userData, setUserData] = useState<any | null>(null);
  
    useEffect(() => {
      fetchAuthSession({ forceRefresh: true })
        .then(({ tokens }) => {
          const idToken = tokens?.idToken as any;
          const id = idToken.payload["sub"];
          setUserId(id);
        })
        .catch(err => {
          console.log(err);
        });
    }, [])
  
    useEffect(() => {
      if (userId) {
        client.graphql({ query: getUser, variables: { id: userId } })
          .then(result => {
            if (result.data && result.data.getUser){
            setUserData(result.data.getUser);
            }
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
      }
    }, [userId])
  
    if (!userData) {
      return <div>Loading...</div>;
    }
  
    const user = userData;
    const sponsors = user.sponsors.items;
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Purchases for {user.name} {user.familyName}</h1>
          {sponsors.map((sponsor:any, index:any) => (
            <div key={index} className={styles.sponsor}>
              <h2 className={styles.sponsorName}>Sponsor: {sponsor.sponsor.name}</h2>
              {sponsor.purchases.items.sort((a:any, b:any) => new Date(b.purchaseDate).getTime() - new Date(a.purchaseDate).getTime()).map((purchase:any, index:any) => (
                <div key={index} className={styles.purchase}>
                  <h3 className={styles.purchaseId}>Purchase ID: {purchase.id}</h3>
                  <p className={styles.purchaseDate}>Purchase Date: {new Date(purchase.purchaseDate).toLocaleString()}</p>
                  <p className={styles.totalAmount}>Total Amount: {purchase.totalAmount}</p>
                  <p className={styles.totalItems}>Number of Items: {purchase.items.items.length}</p>
                  {purchase.items.items.map((item:any, index:any) => (
                    <div key={index} className={styles.item}>
                      <p className={styles.itemId}>Item ID: {item.itemId}</p>
                      <p className={styles.itemName}>Item Name: {item.itemName}</p>
                      <p className={styles.price}>Price: {item.price}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }
    
    export default PurchaseHistory;

    
