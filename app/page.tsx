// page.tsx

'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import TemplateLayout from './components/TemplateLayout'; // Import the TemplateLayout
import './globals.css'; // Make sure globals.css doesn't contain any client-side code
import { UseAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';



type AboutData = {
  teamNumber: string
  VersionNum: string
  SprintDate: string
  Productname: string
  ProductDescription: string
}

export default function Home(){
  const [data, setData] = useState<{ success: { teamNumber: any; VersionNum: any; SprintDate: any; ProductName: any; ProductDescription: any; }[]; } | null>(null);

  useEffect(() => {
    getAboutData()
      .then((formattedResponse) => {
        // Access the formatted response here
        console.log(formattedResponse);
        setData(formattedResponse); // Set the data here
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error:', error);
      });
  }, []);
  const {authStatus} = useAuthenticator((context) => [context.authStatus]);
  console.log("auth status is " + {authStatus});

  return (
    <TemplateLayout>
      {/* Middle column content */}
      <div className="middle-column">
        <div className="main-content">
          <h1 className="mb-4 text-4xl font-bold">About Us</h1>
          <Image
            src="/teamlogo.jpg"
            alt="Team Photo"
            width={640}
            height={360}
            priority
          />
          {/* Conditional rendering to handle data loading state */}

          <p className="mt-6 text-lg">
            Welcome to <strong>Team 3&apos;s Website</strong>! We&apos;re dedicated to providing the best experience for our users. <br />
            <strong>Our mission is to innovate and inspire.</strong>
          </p>
          <p className="mt-4 text-lg">
            <strong> </strong><br />
            Connor Love <br />
            Rinzo Martinelli <br />
            Jason Senf<br />
            Jackson Henry <br />
            <br />
            With a focus on quality and community, we strive to bring you the latest in our field. Our team is made up of passionate professionals committed to excellence in everything we do.
            <br />
          </p>
          {data && (
          <h1 className="text-4xl  mb-4">
            teamNumber: {data.success[0].teamNumber}<br></br>
            VersionNum: {data.success[0].VersionNum}<br></br>
            SprintDate: {data.success[0].SprintDate}<br></br>
            Productname: {data.success[0].ProductName}<br></br>
            Product Description: {data.success[0].ProductDescription}
          </h1>
        )}
        </div>
      </div>
    </TemplateLayout>
  );
};


function getAboutData() {
  return fetch('https://fo9xpwxinl.execute-api.us-east-1.amazonaws.com/dev/about/1')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      return res.json();
    })
    .then((data) => {
      // Extract the relevant data
      const { teamNumber, VersionNum, SprintDate, ProductName, ProductDescription } = data.success[0];

      // Create a new object with the desired structure
      const formattedResponse = {
        success: [
          {
            teamNumber,
            VersionNum,
            SprintDate,
            ProductName,
            ProductDescription,
          },
        ],
      };

      console.log(JSON.stringify(formattedResponse));
      
      return formattedResponse; // Return the formatted data
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      // Handle errors
      throw error;
    });
}



