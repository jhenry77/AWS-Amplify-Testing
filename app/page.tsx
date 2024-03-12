// page.tsx

'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import TemplateLayout from './components/TemplateLayout'; // Import the TemplateLayout
import './globals.css'; // Make sure globals.css doesn't contain any client-side code


type AboutData = {
  teamNumber: string
  VersionNum: string
  SprintDate: string
  Productname: string
  ProductDescription: string
}

const Home = () => {
  const [data, setData] = useState<AboutData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAboutData();
        console.log('Data fetched:', result); // Log the data for debugging
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  // Ensure the data rendering logic is correct
  const renderAboutData = (data: AboutData) => (
    <div>
      <p>{data.ProductDescription}</p>
      {/* Render other data properties as needed */}
    </div>
  );

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

          {data ? renderAboutData(data) :
            <p>Loading about data...</p>
          }
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
          {data ? (
            <>
              <h1 className="mb-4 text-4xl">teamNumber: {data.success[0].teamNumber}<br></br>VersionNum: {data.success[0].VersionNum}<br></br>SprintDate: {data.success[0].SprintDate}<br></br>Productname: {data.success[0].ProductName}<br></br>Product Description: {data.success[0].ProductDescription} </h1>
              {/* Other HTML elements using data properties */}
              {/* <p className="mt-6 text-lg">{data.description}</p> */}
              {/* ... */}
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </TemplateLayout>
  );
};


async function getAboutData(): Promise<AboutData> {
  const res = await fetch('https://fo9xpwxinl.execute-api.us-east-1.amazonaws.com/dev/about/1', { cache: 'force-cache' });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json()
}

export default Home;



