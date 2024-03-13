import Image from "next/image";
import styles from "./components/styles/about.module.css";

type AboutData = {
  teamNumber: string
  VersionNum : string
  SprintDate : string
  Productname: string
  ProductDescription: string
}



export default async function Home() {
  var data = await getAboutData();
  
  console.log(data);
  return (
    <main>
        <h1 className={styles['title']}>About Us</h1>
        <Image
          src="/teamlogo.jpg"
          alt="Team Photo"
          width={400}
          height={400}
          className="mx-auto"
        />
        <br/>
        <p className={styles['text']}>
          Welcome to <strong>Team 3&apos;s Website</strong>! We&apos;re dedicated to providing the best experience for our users. <br />
          <strong>Our mission is to innovate and inspire.</strong>
        </p>
        <p className={styles['text']}>
        <strong>Team Members:  </strong><br />
          Connor Love <br /> 
          Rinzo Martinelli <br /> 
          Jason Senf<br /> 
          Jackson Henry <br/>
          <br />
          With a focus on quality and community, we strive to bring you the latest in our field.<br/> Our team is made up of passionate professionals committed to excellence in everything we do.
          <br />
          <br/>
        </p>
        {data ? (
          <>
            <h1 className={styles['text']}>Crlt Alt Elt: {data.success[0].teamNumber}<br></br>Verison: {data.success[0].VersionNum}<br></br>Date: {data.success[0].SprintDate}<br></br>Product: {data.success[0].ProductName}<br></br>Description: {data.success[0].ProductDescription} </h1>
            {/* Other HTML elements using data properties */}
            {/* <p className="text-lg mt-6">{data.description}</p> */}
            {/* ... */}
          </>
        ) : (
          <h1>Loading...</h1>
        )}
    </main>
  );
}
async function getAboutData() {
  const res = await fetch('https://fo9xpwxinl.execute-api.us-east-1.amazonaws.com/dev/about/1')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

