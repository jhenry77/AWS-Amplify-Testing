
"use client";
import React, { useContext, useState, useEffect } from 'react';
import styles from '../components/styles/purchaseHistory.module.css';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { createUser, createSponsorApplication, updateUserSponsor, createPurchase, createPurchaseItem } from "../../src/graphql/mutations"
import { getSponsorApplication, getUser, listSponsorApplications, listTodos, listUsers, listUserSponsors } from '../../src/graphql/queries';
import config from '@/src/amplifyconfiguration.json';

import { fetchAuthSession } from "aws-amplify/auth";


Amplify.configure(config);

const client = generateClient();
// const [userId, setUserId] = useState(0); // State to control dropdown

function PurchaseHistory() {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState<any | null>(null);
  const [sponsoredUsers, setSponsoredUsers] = useState<any | null>(null);
  const [userGroup, setGroup] = useState(String);
  const [isSponsor, setIsSponsor] = useState(Boolean);
  const [isAdmin, setIsAdmin] = useState(Boolean);

  const sponsorIdMapping: { [key: string]: string } = {
    'Sponsors1': '0',
    'Sponsors2': '1',
    'Sponsors3': '2'
  };


  useEffect(() => {
    fetchAuthSession({ forceRefresh: true })
      .then(({ tokens }) => {
        const idToken = tokens?.idToken as any;
        const id = idToken.payload["sub"];
        const group = idToken.payload["cognito:groups"];
        setGroup(group);
        setUserId(id);
        console.log(id);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

 
  useEffect(() => {
    if (userGroup) {
      const currId = sponsorIdMapping[userGroup[0]];
      console.log("currid is", currId);
      if (userGroup[0] == "Admins") {
        setIsSponsor(false);
        setIsAdmin(true);
        client.graphql({
          query: listUserSponsors,
        })
          .then(result => {
            console.log("listUserSponsors");
            setSponsoredUsers(result.data.listUserSponsors.items);
            console.log(result);
          })
          .catch(error => {
            console.error('Error fetching sponsor users:', error);
          });
      } else if (userGroup[0].toLowerCase().includes('sponsor'.toLowerCase())) {
        setIsSponsor(true);
        setIsAdmin(false);
        console.log("doing the querey for sponsors");
        client.graphql({
          query: listUserSponsors, variables: {
            filter: {
              sponsorId: {
                eq: currId
              }
            }
          }
        })
          .then(result => {
            console.log("Listing user SPonsors for a certain sponsor")
            console.log(result);
            setSponsoredUsers(result.data.listUserSponsors.items);
          })
          .catch(error => {
            console.error('Error fetching sponsor users:', error);
          });
      }else{
        if (userId){
          client.graphql({query: getUser, variables: {id: userId}})
          .then(result => {
            setUserData(result.data.getUser)
          })
        }
      }

    } else {
      console.log("couldnt find userGroup");
    }
  }, [userGroup])

  
  const user = userData;
  const sponsors = user && user.sponsors ? user.sponsors.items : [];
  console.log(sponsors);
  console.log("that was sponsors");

  
  return (
    <div className={styles.container}>
      {isAdmin ? (
         sponsoredUsers && sponsoredUsers.map((userSponsor:any, index:any) => (
          <div key={index} className={styles.sponsor}>
            <h2 className={styles.sponsorName}>Sponsored User: {userSponsor.user.name} {userSponsor.user.familyName}</h2>
            {userSponsor.user.sponsors.items[0].purchases.items.sort((a:any, b:any) => new Date(b.purchaseDate).getTime() - new Date(a.purchaseDate).getTime()).map((purchase:any, index:any) => (
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
        ))
      ) : isSponsor ? (
        sponsoredUsers && sponsoredUsers.map((userSponsor:any, index:any) => (
          <div key={index} className={styles.sponsor}>
            <h2 className={styles.sponsorName}>Sponsored User: {userSponsor.user.name} {userSponsor.user.familyName}</h2>
            {userSponsor.user.sponsors.items[0].purchases.items.sort((a:any, b:any) => new Date(b.purchaseDate).getTime() - new Date(a.purchaseDate).getTime()).map((purchase:any, index:any) => (
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
        ))
      ) : (
        sponsors.map((sponsor:any, index:any) => (
          
          <div key={index} className={styles.sponsor}>
            <h1 className={styles.title}>Purchases for {user.name} {user.familyName}</h1>
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
        ))
      )}
    </div>
  );
}
export default PurchaseHistory;
