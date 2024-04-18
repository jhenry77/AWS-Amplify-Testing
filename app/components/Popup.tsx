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
// import { Sponsor } from '@/src/models';
// import { SponsorApplication } from '@/src/models';
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

interface SponsorApplication {
  __typename: "SponsorApplication";
  id: string;
  userId: string;
  sponsorId: string;
  reason: string;
  additionalInfo: string;
  createdAt: string;
  updatedAt: string;
}

interface Sponsor {
  __typename: "Sponsor";
  id: string;
  name: string;
}

interface User {
  __typename: "User";
  id: string;
  name: string;
  familyName: string;
  email: string;
  address: string;
}

// Define an interface for the component props
interface PopupProps {
  isOpen: boolean;
  popupTitle: string;  // Define the type of popupTitle as string
  onClose: () => void; // Define the type of onClose as a function returning void
  children?: React.ReactNode;  // Optionally include children of type React.ReactNode
  users?: User[];
  userSponsors?: UserSponsor[];
  sponsorApplications?: SponsorApplication[];
  sponsors?: Sponsor[];
}

// Helper function to clean the address format
const cleanAddress = (address: any) => {
  const regex = /^\{formatted=|\}$/g;
  return address.replace(regex, '');
};

const Popup: React.FC<PopupProps> = ({ isOpen, popupTitle, onClose, children, users, userSponsors, sponsorApplications, sponsors }) => {
  // State to hold fetched User Sponsors, initialize as empty array.
  const [fetchedUserSponsors, setFetchedUserSponsors] = useState<UserSponsor[]>([]);
  // State to hold fetched Sponsor Applications, initialize as empty array.
  const [fetchedSponsorApplications, setFetchedSponsorApplications] = useState<SponsorApplication[]>([]);
  // State to hold fetched Sponsors, initialize as empty array.
  const [fetchedSponsors, setFetchedSponsors] = useState<Sponsor[]>([]);
  const [fetchedUsers, setFetchedUsers] = useState<User[]>([]);

  // // Fetch User Sponsors when the popup opens and userSponsors prop is provided.
  // console.log("In Popup.tsx: Before UseEffect: ListUserSponsors");

  // Revised onClose function to call reset and close
  const handleClose = () => {
    setFetchedUserSponsors([]);
    setFetchedSponsorApplications([]);
    setFetchedSponsors([]);
    setFetchedUsers([]);
    onClose(); // Call the passed onClose function to handle the close event
  };

  useEffect(() => {
    if (isOpen && !userSponsors) {
      console.log("Fetching UserSponsors");
      client.graphql({ query: listUserSponsors })
        .then((result: any) => {
          const userSponsorItems = result.data.listUserSponsors.items;
          console.log("UserSponsor", result.data.listUserSponsors.items);

          // Logging each item's details
          userSponsorItems.forEach((item: any, userSponsorIndex: number) => {
            console.log(`Item #${userSponsorIndex + 1} ID: ${item.id}`);
            console.log(`Item ${userSponsorIndex} User ID: ${item.userId}`);
            console.log(`Item ${userSponsorIndex} Sponsor ID: ${item.sponsorId}`);
            console.log(`Item ${userSponsorIndex} Points: ${item.points}`);
            console.log(`Item ${userSponsorIndex} Created At: ${item.createdAt}`);
            console.log(`Item ${userSponsorIndex} Updated At: ${item.updatedAt}`);
          });
          setFetchedUserSponsors(userSponsorItems);
        }).catch((error: any) => {
          console.error('Error listing user Sponsors', error);
        });
    }
    // Added a return function to reset state when the popup is closed
    return () => {
      if (!isOpen) {
        setFetchedUserSponsors([]);
      }
    };
  }, [isOpen, userSponsors]);

  useEffect(() => {
    if (isOpen && !sponsorApplications) {
      console.log("Fetching Sponsor Applications");
      client.graphql({ query: listSponsorApplications })
        .then((result: any) => {
          const sponsorAppItems = result.data.listSponsorApplications.items;
          console.log("SponsorApplications", result.data.listSponsorApplications.items);

          // Logging each item's details
          sponsorAppItems.forEach((item: any, index: number) => {
            console.log(`Item #${index + 1} ID: ${item.id}`);
            console.log(`Item ${index} User ID: ${item.userId}`);
            console.log(`Item ${index} Sponsor ID: ${item.sponsorId}`);
            console.log(`Item ${index} Reason: ${item.reason}`);
            console.log(`Item ${index} Reason: ${item.additionalInfo}`);
            console.log(`Item ${index} Created At: ${item.createdAt}`);
            console.log(`Item ${index} Updated At: ${item.updatedAt}`);
          });
          setFetchedSponsorApplications(sponsorAppItems);
        }).catch((error: any) => {
          console.error('Error listing Sponsor Applications', error);
        });
    }
    // Added a return function to reset state when the popup is closed
    return () => {
      if (!isOpen) {
        setFetchedSponsorApplications([]);
      }
    };
  }, [isOpen, sponsorApplications]);

  useEffect(() => {
    if (isOpen && !sponsors) {
      console.log("Fetching Sponsors");
      client.graphql({ query: listSponsors })
        .then((result: any) => {
          const sponsorItems = result.data[Object.keys(result.data)[0]].items;
          sponsorItems.sort((a: any, b: any) => a.id.localeCompare(b.id));

          console.log("Sponsor", result.data.listSponsors.items);
          setFetchedSponsors(sponsorItems);
          // const userItems = result.data[Object.keys(result.data)[0]].items;
          // userItems.sort((a: any, b: any) => a.id.localeCompare(b.id));
          // console.log("User", result.data.listUsers.items);
          // Logging each item's details
          sponsorItems.forEach((item: any, index: number) => {
            console.log(`Sponsor #${index + 1} ID: ${item.id}`);
            console.log(`Sponsor ${index} Name: ${item.name}`);
          });
        }).catch((error: any) => {
          console.error('Error listing Sponsors', error);
          setFetchedSponsors([]);
        });
    }
    // Added a return function to reset state when the popup is closed
    return () => {
      if (!isOpen) {
        setFetchedSponsors([]);
      }
    };
  }, [isOpen, sponsors]);

  useEffect(() => {
    if (isOpen && !users) {
      console.log("Fetching Users");
      client.graphql({ query: listUsers })
        .then((result: any) => {
          const userItems = result.data[Object.keys(result.data)[0]].items;
          userItems.sort((a: any, b: any) => a.id.localeCompare(b.id));
          console.log("User", result.data.listUsers.items);
          setFetchedUsers(userItems);
          // Logging each item's details
          userItems.forEach((item: any, index: number) => {
            console.log(`User #${index + 1} ID: ${item.id}`);
            console.log(`User ${index} Name: ${item.name}`);
            console.log(`User ${index} Family Name: ${item.familyName}`);
            console.log(`User ${index} Email: ${item.email}`);
            console.log(`User ${index} Address: ${item.address}`);
          });
        }).catch((error: any) => {
          console.error('Error listing Users', error);
          setFetchedUsers([]);
        });
    }
    // Added a return function to reset state when the popup is closed
    return () => {
      if (!isOpen) {
        setFetchedUsers([]);
      }
    };
  }, [isOpen, users]);

  let content;
  if (popupTitle === "User Sponsors" && (userSponsors || fetchedUserSponsors)) {
    content = (userSponsors || fetchedUserSponsors).map((userSponsor, index) => (
      <div key={userSponsor.id} className={styles.userSponsorItem}>
        <h3>User Sponsor #{index + 1}</h3>
        <p><strong>ID:</strong> {userSponsor.id}</p>
        <p><strong>Sponsor ID:</strong> {userSponsor.sponsorId}</p>
        <p><strong>User ID:</strong> {userSponsor.userId}</p>
        <p><strong>Points:</strong> {userSponsor.points}</p>
        <p><strong>Created At:</strong> {userSponsor.createdAt}</p>
        <p><strong>Last Updated At:</strong> {new Date(userSponsor.updatedAt).toLocaleString()}</p>
      </div>
    ));
  } else if (popupTitle === "Sponsor Applications" && (sponsorApplications || fetchedSponsorApplications)) {
    content = (sponsorApplications || fetchedSponsorApplications).map((sponsorApplication, index) => (
      <div key={sponsorApplication.id} className={styles.sponsorApplicationItem}>
        <h3>Sponsor Application #{index + 1}</h3>
        <p><strong>ID:</strong> {sponsorApplication.id}</p>
        <p><strong>Sponsor ID:</strong> {sponsorApplication.sponsorId}</p>
        <p><strong>User ID:</strong> {sponsorApplication.userId}</p>
        <p><strong>Reason:</strong> {sponsorApplication.reason}</p>
        <p><strong>Additional Info:</strong> {sponsorApplication.additionalInfo}</p>
        <p><strong>Created At:</strong> {sponsorApplication.createdAt}</p>
        <p><strong>Last Updated At:</strong> {new Date(sponsorApplication.updatedAt).toLocaleString()}</p>
      </div>
    ));
  } else if (popupTitle === "Sponsors" && (sponsors || fetchedSponsors)) {
    content = (sponsors || fetchedSponsors).map((sponsor, index) => (
      <div key={sponsor.id} className={styles.sponsorItem}>
        <h3>Sponsor #{index + 1}</h3>
        <p><strong>ID:</strong> {sponsor.id}</p>
        <p><strong>User ID:</strong> {sponsor.name}</p>
      </div>
    ));
  }

  else if (popupTitle === "Users" && (users || fetchedUsers)) {
    content = (users || fetchedUsers).map((user, index) => (
      <div key={user.id} className={styles.userItem}>
        <h3>User #{index + 1}</h3>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>User ID/First Name:</strong> {user.name}</p>
        <p><strong>Family Name:</strong> {user.familyName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {cleanAddress(user.address)}</p>
      </div>
    ));
  }

  if (!isOpen) { return null };

  return (
    <div className={styles.popupBackground}>
      <div className={styles.popup}>
        <h2 className={styles.popupTitle}>{popupTitle}</h2>

        {/* Render User Sponsors if they are provided or fetched */}
        {(userSponsors || fetchedUserSponsors).length > 0  && (users || fetchedUsers).length > 0 &&  (
          <div className={styles.popupItemList}>
            {content}
          </div>
        )}

        {/* Render children if any */}
        {children}
        <div className={styles.popupButtons}>
          <button type="button" className={styles.popupExitButton} onClick={handleClose}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
