"use client";
import Link from "next/link"
import { useAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from "aws-amplify/auth";
import styles from "./styles/AppNav.module.css";
import React, { useState } from 'react';

type NavbarProps = {
    onLeftMenuToggle: () => void; // Function to toggle the left menu
    onRightMenuToggle: () => void; // Function to toggle the right menu
};

export default function Navbar() {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    const { authStatus } = useAuthenticator((context) => [context.authStatus]);

    if (authStatus !== 'authenticated') {
        return null;
    }

    return <nav className={styles['navbar']}>
        <div className="left-content">
            {/* Button that when clicked, will toggle the state of the left hamburger menu */}
            <button /*onClick={onLeftMenuToggle}*/ className="hamburger-menu-button" aria-label="Open navigation menu">
                ☰{/* Hamburger icon */}
            </button>
            <Link href="/home" className="nav-link">Home</Link>
            <Link href="/" className="nav-link">About</Link>
            <Link href="/" className="nav-link">Sponsors</Link>
            <Link href="/" className="nav-link">Catalogs</Link>
            <Link href="/" className="nav-link">Reports</Link>
            <>
                {authStatus !== 'authenticated' ? <Link href="/login">Login</Link> : <button className="justify-end" onClick={signOut}>Sign Out</button>}
            </>
        </div>

        <div className="right-content">
                {/* Button that when clicked, will toggle the state of the right settings menu */}
                <button /*onClick={onRightMenuToggle}*/ className="settings-menu-button" aria-label="Open settings">
                    ⚙️{/* Settings icon */}
                </button>
            </div>
    </nav>
};