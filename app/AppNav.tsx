/* AppNav.tsx

/* @client */
import Link from "next/link";
import React from 'react';
//import React, { useState } from 'react';

// Type definition for the props that Navbar component will accept
type NavbarProps = {
    onLeftMenuToggle: () => void; // Function to toggle the left menu
    onRightMenuToggle: () => void; // Function to toggle the right menu
};

// The Navbar functional component
const Navbar: React.FC<NavbarProps> = ({ onLeftMenuToggle, onRightMenuToggle }) => {
    return (
        // The main navigation container
        <nav className="Navbar">
            <div className="left-content">
                {/* Button that when clicked, will toggle the state of the left hamburger menu */}
                <button onClick={onLeftMenuToggle} className="hamburger-menu-button" aria-label="Open navigation menu">
                    ☰{/* Hamburger icon */}
                </button>
                {/* Navigation links using anchor tags; replace with Link components for client-side routing */}
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/login" className="nav-link">Login</Link>
            </div>

            {/* Right-aligned items */}
            <div className="right-content">
                {/* Button that when clicked, will toggle the state of the right settings menu */}
                <button onClick={onRightMenuToggle} className="settings-menu-button" aria-label="Open settings">
                    ⚙️{/* Settings icon */}
                </button>
            </div>
        </nav>
    );
};

// Exporting Navbar so it can be used in other parts of the application
export default Navbar;

/*
export const Navbar:React.FC = () => {
    return <header className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="px-3">
                    <Link href="/home">
                        Home
                    </Link>
            </div>
            <div className="px-3">
                <Link href="/">
                    About
                </Link>
            </div>
            <div className="px-3">
                <Link href="/loginPage">
                    Login/Signup
                </Link>
            </div>
        </div>
    </header>;
};

export default Navbar
*/
