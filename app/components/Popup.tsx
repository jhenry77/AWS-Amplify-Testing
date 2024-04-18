/* Popup.tsx */

"use client"
import React, { useState, useEffect } from 'react';
import API from '@aws-amplify/api';
import graphqlOperation from '@aws-amplify/api-graphql';

// import * as queries from './graphql/queries';
import styles from './styles/Popup.module.css'; // Update the path to your actual CSS file
// import * as mutations from './graphql/mutations';
import ApplicationListing from '../listSponsorApplications/page';
import { listUserSponsors, getUser, listSponsorApplications, listSponsors, listTodos, listUsers } from "../../src/graphql/queries";
import config from '@/src/amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
Amplify.configure(config);

const client = generateClient();
// const [userSponsors, setUserSponsors] = useState([]);

// import APITypes from "./src/API";
// Interface for UserSponsor data
interface UserSponsor {
  __typename: "UserSponsor";
  id: string;
  userId: string;
  sponsorId: string;
  points: number;
  createdAt: string;
  updatedAt: string;
}

// Define an interface for the component props
interface PopupProps {
  isOpen: boolean;
  popupTitle: string;  // Define the type of popupTitle as string
  onClose: () => void; // Define the type of onClose as a function returning void
  children?: React.ReactNode;  // Optionally include children of type React.ReactNode
  users?: Array<{ id: string; name: string; familyName: string; email: string; address: string; createdAt: string; updatedAt: string; }>;
  userSponsors?: UserSponsor[];
  sponsorApplications?: Array<{ id: string; reason: string; additionalInfo: string; createdAt: string; updatedAt: string; }>;
}

const Popup: React.FC<PopupProps> = ({ isOpen, popupTitle, onClose, children, users, userSponsors /*sponsorApplications*/ }) => {
  // State to hold fetched User Sponsors, initialize as empty array.
  const [fetchedUserSponsors, setFetchedUserSponsors] = useState<UserSponsor[]>([]);

  // State to hold fetched Sponsor Applications, initialize as empty array.
  const [fetchedSponsorApplications, setFetchedSponsorApplications] = useState([]);

  // Fetch User Sponsors when the popup opens and userSponsors prop is provided.
  console.log("In Popup.tsx: Before UseEffect: ListUserSponsors");

  useEffect(() => {
    if (isOpen && !userSponsors) {
      console.log("Fetching UserSponsors");
      client.graphql({ query: listUserSponsors })
        .then((result: any) => {
          const items = result.data.listUserSponsors.items;
          console.log("UserSponsor", result.data.listUserSponsors.items);

          // Logging each item's details
          items.forEach((item: any, index: number) => {
            console.log(`Item #${++index} ID: ${item.id}`);
            console.log(`Item ${index} User ID: ${item.userId}`);
            console.log(`Item ${index} Sponsor ID: ${item.sponsorId}`);
            console.log(`Item ${index} Points: ${item.points}`);
            console.log(`Item ${index} Created At: ${item.createdAt}`);
            console.log(`Item ${index} Updated At: ${item.updatedAt}`);
          });
          setFetchedUserSponsors(items);
        }).catch((error: any) => {
          console.error('Error listing user Sponsors', error);
        });
    }
  }, [isOpen, userSponsors]);

  if (!isOpen) { return null };

  return (
    <div className={styles.popupBackground}>
      <div className={styles.popup}>
        <h2 className={styles.popupTitle}>{popupTitle}</h2>

        {/* Render User Sponsors if they are provided or fetched */}
        {(userSponsors || fetchedUserSponsors).length > 0 && (
          <div className={styles.userSponsorList}>
            {(userSponsors || fetchedUserSponsors).map((sponsor, index) => (

              <div key={sponsor.id} className={styles.userSponsorItem}>
                {/* Displaying sponsor details */}
                <h3>User Sponsor #{index + 1}</h3>
                <p><strong>ID:</strong> {sponsor.id}</p>
                <p><strong>Sponsor ID:</strong> {sponsor.sponsorId}</p>
                <p><strong>User ID:</strong> {sponsor.userId}</p>
                <p><strong>Points:</strong> {sponsor.points}</p>
                <p><strong>Created At:</strong> {sponsor.createdAt}</p>
                <p><strong>Last Updated At:</strong> {new Date(sponsor.updatedAt).toLocaleString()}</p>
              </div>
            ))
            }
          </div>
          
        )}
        {/* Render children if any */}
        {children}
        <div className={styles.popupButtons}>
          <button type="button" className={styles.popupExitButton} onClick={onClose}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
