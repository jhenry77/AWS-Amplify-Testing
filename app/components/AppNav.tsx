// "use client";
// import Link from "next/link"
// import { useAuthenticator } from '@aws-amplify/ui-react';
// import { signOut } from "aws-amplify/auth";
// import styles from "./styles/AppNav.module.css";
// import DropdownMenu from "./DropDown";

// export default function Navbar() {
//     const { user, signOut } = useAuthenticator((context) => [context.user]);
//     const {authStatus} = useAuthenticator((context) => [context.authStatus]);

//     if (authStatus !== 'authenticated'){
//         return null;
//     }
    
//     return <nav className={styles['navbar']}>
        
//             <Link href="/home">Home</Link>
//             <Link href="/">About</Link>
//             <Link href="/">Sponsors</Link>
//             <Link href="/">Catalogs</Link>
//             <Link href="/">Reports</Link>
//                 <>
//                 {authStatus !== 'authenticated' ? <Link href="/login">Login</Link> : <button className = "justify-end" onClick={signOut}>Sign Out</button>}
//                 </>
//             <DropdownMenu/>
//     </nav>
// };

// AppNav.tsx
"use client";
import Link from "next/link"
import { useAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from "aws-amplify/auth";
import styles from "./styles/AppNav.module.css";
import HamburgerMenu from "./HamburgerMenu";
import React, { useState, useEffect } from 'react';
import { fetchAuthSession } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import CartUi from "./CartUi";


export default function Navbar() {
    const router = useRouter();
   
    const { user, signOut, authStatus } = useAuthenticator((context) => [context.user, context.signOut, context.authStatus]);
    // const { user, signOut } = useAuthenticator((context) => [context.user]);
    // const { authStatus } = useAuthenticator((context) => [context.authStatus]);

    const [showDropdown, setShowDropdown] = useState(false);
    const [showPointsDropdown, setShowPointsDropdown] = useState(false);
    const [showLeftMenu, setShowLeftMenu] = useState(true); /* change to true */
    const [showRightMenu, setShowRightMenu] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const togglePointsDropdown = () => {
        setShowPointsDropdown(!showPointsDropdown);
    };

    const toggleLeftMenu = () => {
        setShowLeftMenu(!showLeftMenu);
    };

    const toggleRightMenu = () => {
        setShowRightMenu(!showRightMenu);
    };

    const [groups, setGroups] = useState(undefined);
    const [userName, setUserName] = useState(String);

    useEffect(() => {
        fetchAuthSession({ forceRefresh: true })
        .then(({ tokens }) => {
            const idToken = tokens?.idToken as any;
            console.log(idToken);
            const userGroups = idToken.payload['cognito:groups'];
            const username = idToken.payload["name"] + " " + idToken.payload["family_name"];
            setGroups(userGroups ? userGroups[0] : "No active Groups");
            setUserName(username);
            console.log(username);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
    useEffect(() => {
        if (userName === undefined) {
            router.refresh();
        }
    }, [router, userName]);
    
    // Log the current user object to the console
    return (
        
        <nav className={styles['navbar']}>
            <div className="navbar-left-content">
                {/* Button that when clicked, will toggle the state of the left hamburger menu */}
                <button onClick={toggleLeftMenu} className="hamburger-menu-button" aria-label="Open navigation menu">☰</button>
                {/* <HamburgerMenu showLeftMenu={showLeftMenu} /> */}

                <Link href="/home" className="nav-link">Home</Link>
                <Link href="/" className="nav-link">About</Link>
                <Link href="/sponsorApplication" className="nav-link">Sponsor Applications</Link>
                <Link href="/testCatalog" className="nav-link">Catalogs</Link>
                <Link href="/" className="nav-link">Reports</Link>
            </div>

            <div className={styles["navbar-right-content"]}>
                {authStatus === 'authenticated' && user ? (
                    <>
                        <span className="points-info">
                            {"0 points"}
                            {/* {userName} */}
                            <button onClick={togglePointsDropdown} className="points-dropdown-menu-button" aria-label="Open dropdown">
                                ▼{/* Dropdown menu icon */}
                            </button>
                        </span>
                        <span className="user-info">
                            {userName}
                            <button onClick={toggleDropdown} className="dropdown-menu-button" aria-label="Open dropdown">
                                ▼{/* Dropdown menu icon */}
                            </button>
                        </span>
                        <CartUi/>
                        
                        <button onClick={toggleRightMenu} className="settings-menu-button" aria-label="Open settings">
                            ⚙️{/* Settings icon */}
                        </button>
                        {/* <HamburgerMenu showRightMenu={showRightMenu} /> */}

                        {showPointsDropdown && (
                            <div className={`${styles['points-dropdown-menu']} ${showPointsDropdown ? styles['show-dropdown'] : ''}`} role="menu">
                                <Link href="/points">My Points</Link>
                            </div>
                        )}
                        
                        {showDropdown && (
                            <div className={`${styles['dropdown-menu']} ${showDropdown ? styles['show-dropdown'] : ''}`} role="menu">
                                <Link href="/profile">Profile</Link>
                                <button onClick={signOut}>Sign Out</button>
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
                onCloseLeftMenu={() => setShowLeftMenu(false)} // Close left menu
                onCloseRightMenu={() => setShowRightMenu(false)} // Close right menu
            />
        </nav>
    );
}

// // Main content component
// const MainContent = ({ showLeftMenu }) => (
//     <div className={`main-content ${showLeftMenu ? 'main-content-with-menu' : ''}`}>
//       {/* Your main content */}
//     </div>
//   );
