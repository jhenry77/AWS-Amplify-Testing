"use client";
import Link from "next/link"
import { useAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from "aws-amplify/auth";

export default function Navbar() {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    const {authStatus} = useAuthenticator((context) => [context.authStatus]);

    if (authStatus !== 'authenticated'){
        return null;
    }
    
    return <nav className="nav flex">
        <a href="/" className="site-title">Home</a>
        <ul className="flex">
            <li className="px-3">
                <Link href="/">About</Link>
            </li>
            <li>
                <>
                {authStatus === 'configuring' && 'Loading...'}
                {authStatus !== 'authenticated' ? <Link href="/testLogin">Login</Link> : <button className = "justify-end" onClick={signOut}>Sign Out</button>}
                </>
            </li>
        </ul>
    </nav>
};

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
