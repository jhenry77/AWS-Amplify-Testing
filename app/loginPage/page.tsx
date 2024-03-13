import React from 'react';
import Navbar from "../components/AppNav";
import { Amplify } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Home from '../page';
import { useRouter } from 'next/navigation';




import { Authenticator, Placeholder } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../components/styles/aboutpage.module.css';

import awsExports from '../../src/aws-exports';
import AuthClient from '../components/AuthClient';




Amplify.configure(awsExports);


// const TestingApp = () => {
//   const {authStatus} = useAuthenticator((context) => [context.authStatus]);
//   const router = useRouter()
//   return (
//     <>
//       {authStatus === 'configuring' && 'Loading...'}
//       {authStatus !== 'authenticated' ? <Authenticator /> : router.push('/testAboutPage')}
//     </>
//   );

// };

// // function home({signOut,user}: any){

// //   return (
// //     <>
// //           <h1>hello {user.username}</h1>
// //           <button onClick={signOut}>Sign Out</button>
// //         </>
// //   )
// // }

// export default function App() {
//   return (
//     <Authenticator.Provider>
//         <Navbar />
//         <TestingApp />
//     </Authenticator.Provider>
//   );
// }

// // export default withAuthenticator(home);
// export default function Signin(){
//   return (<AuthClient />);
// };

const SignIn = () =>{
  return <AuthClient></AuthClient>;
};
export default SignIn;


