"use client";

import {Authenticator} from '@aws-amplify/ui-react'
import { useAuthenticator } from '@aws-amplify/ui-react';
import Navbar from "../components/AppNav";
import { useRouter } from 'next/navigation'


const signUpFields = {
    signUp: {
      email: {
        order:1
      },
      password: {
        order: 2
      },
      confirm_password: {
        order: 3
        
      },
      address: {
        order: 4,
        label: 'Address',
        Placeholder: 'Enter your Address'
      },
      name:{
        order:5
      },
      family_name:{
        order:6
      }
    },
  }

const AuthClient = () => {
  const {authStatus} = useAuthenticator((context) => [context.authStatus]);
  const router = useRouter()
  
    return ( 
    <Authenticator formFields={signUpFields}>
        {({ signOut, user }) => (
        <main>
        <Navbar />
          <>
            {authStatus === 'configuring' && 'Loading...'}
            {authStatus !== 'authenticated' ? <Authenticator /> : router.push('/')}
          </>
        </main>
      )}
    </Authenticator>
        );

        }

export default AuthClient;

// import { Amplify } from 'aws-amplify';
// import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
// import config from '../../src/amplifyconfiguration.json';
// Amplify.configure(config);

// export function App({ signOut, user }: WithAuthenticatorProps) {
//   return (
//     <>
//       <h1>Hello {user?.username}</h1>
//       <button onClick={signOut}>Sign out</button>
//     </>
//   );
// }

// export default withAuthenticator(App);