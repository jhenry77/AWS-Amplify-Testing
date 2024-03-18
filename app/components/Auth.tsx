'use client';
import {Amplify} from "aws-amplify";
import config from '@/src/amplifyconfiguration.json'
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../src/aws-exports';
import { Authenticator } from "@aws-amplify/ui-react";
Amplify.configure(awsExports, {ssr: true});



const Auth = ({children}: {children: React.ReactNode}) => {
    return(
        <Authenticator.Provider>{children}</Authenticator.Provider>
    );
};

export default Auth;