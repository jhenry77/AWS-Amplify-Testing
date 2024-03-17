"use client";
import Link from "next/link"
import { useAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from "aws-amplify/auth";
import styles from "./styles/AppNav.module.css";

export default function Navbar() {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    const {authStatus} = useAuthenticator((context) => [context.authStatus]);

    if (authStatus !== 'authenticated'){
        return null;
    }
    
    return <nav className={styles['navbar']}>
        
            <Link href="/home">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Sponsors</Link>
            <Link href="/">Catalogs</Link>
            <Link href="/">Reports</Link>
                <>
                {authStatus !== 'authenticated' ? <Link href="/testLogin">Login</Link> : <button className = "justify-end" onClick={signOut}>Sign Out</button>}
                </>
    </nav>
};