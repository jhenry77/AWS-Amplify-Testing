// AppNav.tsx
"use client";
import Link from "next/link"
import { useAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from "aws-amplify/auth";
import styles from "./styles/AppNav.module.css";
import React, { useState } from 'react';
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
    const { user, signOut, authStatus } = useAuthenticator((context) => [context.user, context.signOut, context.authStatus]);
    // const { user, signOut } = useAuthenticator((context) => [context.user]);
    // const { authStatus } = useAuthenticator((context) => [context.authStatus]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showLeftMenu, setShowLeftMenu] = useState(false); /* change to true */
    const [showRightMenu, setShowRightMenu] = useState(false);

    const toggleDropdown = () => {
        console.log('Toggling Dropdown Menu');
        setShowDropdown(!showDropdown);
    };

    const toggleLeftMenu = () => {
        console.log('Toggling Left Menu');
        setShowLeftMenu(!showLeftMenu);
    };

    const toggleRightMenu = () => {
        console.log('Toggling Right Menu');
        setShowRightMenu(!showRightMenu);
    };

    if (authStatus !== 'authenticated') {
        return null;
    }

    if (user.username == "84080458-30f1-70d4-ad73-fd0af93c8967") {
        user.username = "BUG:connorlove0@gmail.com";
    }
    // Log the current user object to the console
    console.log(user);

    const displayName = user.username;

    return (
        <nav className={styles['navbar']}>
            <div className="left-content">
                {/* Button that when clicked, will toggle the state of the left hamburger menu */}
                <button onClick={toggleLeftMenu} className="hamburger-menu-button" aria-label="Open navigation menu">☰</button>
                {/* <HamburgerMenu showLeftMenu={showLeftMenu} /> */}

                <Link href="/home" className="nav-link">Home</Link>
                <Link href="/" className="nav-link">About</Link>
                <Link href="/" className="nav-link">Sponsors</Link>
                <Link href="/" className="nav-link">Catalogs</Link>
                <Link href="/" className="nav-link">Reports</Link>
            </div>

            <div className="right-content">
                {authStatus === 'authenticated' && user ? (
                    <>
                        <span className="user-info">
                            {displayName}
                            <button onClick={toggleDropdown} className="dropdown-menu-button" aria-label="Open dropdown">
                                ▼{/* Dropdown menu icon */}
                            </button>
                        </span>
                        <button onClick={toggleRightMenu} className="settings-menu-button" aria-label="Open settings">
                            ⚙️{/* Settings icon */}
                        </button>
                        {/* <HamburgerMenu showRightMenu={showRightMenu} /> */}

                        {showDropdown && (
                            <div className={`dropdown-menu ${showDropdown ? 'show-dropdown' : ''}`} role="menu">
                                {/* <Link href="/profile">Profile</Link>
                                <button onClick={signOut}>Sign Out</button> */}
                            </div>
                        )}
                    </>
                ) : (
                    <Link href="/login">Sign In</Link>
                )}
            </div>

            {/* Integrating HamburgerMenu component here */}
            <HamburgerMenu
                showLeftMenu={showLeftMenu}
                showRightMenu={showRightMenu}
            />
        </nav>
    );
}