"use client";

import {Authenticator} from '@aws-amplify/ui-react'
import { useAuthenticator } from '@aws-amplify/ui-react';
import Navbar from "../components/AppNav";
import { useRouter } from 'next/navigation'



const AuthUser = () => {
  const {user, signOut} = useAuthenticator((context) => [context.user]);
  return user;
}

export default AuthUser