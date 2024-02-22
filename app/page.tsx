import Image from "next/image";

// Amplify.configure(amplifyconfig);

const callAPI = async () => {
	try {
		const res = await fetch(`https://fo9xpwxinl.execute-api.us-east-1.amazonaws.com/dev/about/1`);
		const data = await res.json();
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};

callAPI()

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        {/* <Image
          src="/teamlogo.jpg"
          alt="Team Photo"
          width={640}
          height={360}
          className="mx-auto"
        /> */}
        <p className="text-lg mt-6">
          Welcome to <strong>Team 3&apos;s Website</strong>! We&apos;re dedicated to providing the best experience for our users. <br />
          <strong>Our mission is to innovate and inspire.</strong>
        </p>
        <p className="text-lg mt-4">
        <strong>Team Members:  </strong><br />
          Connor Love <br /> 
          Rinzo Martinelli <br /> 
          Jason Senf<br /> 
          Jackson Henry <br/>
          <br />
          With a focus on quality and community, we strive to bring you the latest in our field. Our team is made up of passionate professionals committed to excellence in everything we do.
          <br />
        </p>
      </div>
    </main>
  );
}
