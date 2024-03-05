"use client";
import React from 'react';
import Navbar from "../components/AppNav";
import { Amplify } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';

import { Authenticator, Placeholder } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../../src/aws-exports';
Amplify.configure(awsExports);
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

export default function App() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
    <Authenticator formFields={signUpFields}>
      <div>
        <Navbar />
        <button onClick={signOut}>Sign Out</button>
      </div>
    </Authenticator>
  );
}
