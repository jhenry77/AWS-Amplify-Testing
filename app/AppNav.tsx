/* AppNav.tsx

/* @client */
import Link from "next/link";
import React, { useState } from 'react';

type NavbarProps = {
    onLeftMenuToggle: () => void;
    onRightMenuToggle: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onLeftMenuToggle, onRightMenuToggle }) => {
    return (
        <nav className="Navbar">
            <div className="left-content">
                <button onClick={onLeftMenuToggle} className="hamburger-menu-button">
                    {/* Hamburger icon */}
                </button>
                {/* You can use Link components here as well */}
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/login" className="nav-link">Login</a>
            </div>

            <div className="right-content">
                <button onClick={onRightMenuToggle} className="settings-menu-button">
                    {/* Settings icon */}
                </button>
            </div>
        </nav>
    );
};

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
