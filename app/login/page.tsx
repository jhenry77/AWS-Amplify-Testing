"use client";
import React from 'react';
import { Amplify } from 'aws-amplify';

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
  return (
    <Authenticator formFields={signUpFields}> 
      <div>
        <h1>You have logged in</h1>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </Authenticator>
  );
}
