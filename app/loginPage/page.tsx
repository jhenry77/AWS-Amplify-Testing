import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';

// import config from '../amplifyconfiguration.json';
// Amplify.configure(config);

export function App() {
  return (
    <>
      <h1>Hello </h1>
    </>
  );
}

export default withAuthenticator(App);

// export default function loginPage(){
//   return(
//     <h1>Login Page!</h1>
//   );
// }


