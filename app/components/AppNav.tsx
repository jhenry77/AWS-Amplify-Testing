// AppNav.tsx
"use client";
import Link from "next/link"
import { useAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from "aws-amplify/auth";
import styles from "./styles/AppNav.module.css";
import HamburgerMenu from "./HamburgerMenu";
import React, { useState, useEffect, useContext } from 'react';
import { fetchAuthSession } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import CartUi from "./CartUi";
import CartContext from "./cart";


export default function Navbar() {
    const router = useRouter();
    const { cart, removeItem, clearCart } = useContext(CartContext); // Use CartContext


    const { user, signOut, authStatus } = useAuthenticator((context) => [context.user, context.signOut, context.authStatus]);
    // const { authStatus } = useAuthenticator((context) => [context.authStatus]);

    const [showDropdown, setShowDropdown] = useState(false);
    const [showPointsDropdown, setShowPointsDropdown] = useState(false);
    const [showLeftMenu, setShowLeftMenu] = useState(true); /* change to true */
    const [showRightMenu, setShowRightMenu] = useState(false);
    const [userGroups, setUserGroups] = useState<string[]>([]);

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

    // const [groups, setGroups] = useState(undefined);
    const [userName, setUserName] = useState(String);

    useEffect(() => {
        fetchAuthSession({ forceRefresh: true })
            .then(({ tokens }) => {
                const idToken = tokens?.idToken as any;
                console.log(idToken);
                const userGroups = idToken.payload['cognito:groups'];
                const username = idToken.payload["name"] + " " + idToken.payload["family_name"];
                setUserGroups(userGroups ? userGroups[0] : "No active Groups");
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

    const isAdmin = userGroups.includes('Admins');
    const isSponsor = userGroups.includes('Sponsors');
    const isDriver = userGroups.includes('Drivers');

    if (isAdmin || isSponsor) {
        console.log("Is the Current User an Admin:", isAdmin);
        console.log("Is sponsor: ", isSponsor);
    };

    // Log the current user object to the console
    return (
        <nav className={styles['navbar']}>
            <div className="navbar-left-content">
                {/* Button that when clicked, will toggle the state of the left hamburger menu */}
                {/* <button onClick={toggleLeftMenu} className="hamburger-menu-button" aria-label="Open navigation menu">☰</button> */}
                {/* <HamburgerMenu showLeftMenu={showLeftMenu} /> */}

                <Link href="/home" className="nav-link">Home</Link>
                <Link href="/" className="nav-link">About</Link>
                {isDriver && (<Link href="/sponsorApplication" className="nav-link">Sponsor Applications</Link>)}
                <Link href="/testCatalog" className="nav-link">Catalog</Link>
                {(isSponsor || isAdmin) && (<Link href="/listSponsorApplications" className="nav-link">Applications</Link>)}
                {(isSponsor || isAdmin) && (<Link href="/listSponsorUsers" className="nav-link">Drivers</Link>)}
                <Link href="/purchaseHistory" className="nav-link">Purchases</Link>
                <Link href="/" className="nav-link">Reports</Link>
            </div>

            <div className={styles["navbar-right-content"]}>
                {authStatus === 'authenticated' && user ? (
                    <>
                        <span className="points-info">
                            {"Points"}
                            {/* {userName} */}
                            <button onClick={togglePointsDropdown} className="points-dropdown-menu-button" aria-label="Open dropdown">
                                ▼{/* Dropdown menu icon */}
                            </button>
                        </span>
                        <CartUi/>
                        <span className="user-info">
                            {userName}
                            <button onClick={toggleDropdown} className="dropdown-menu-button" aria-label="Open dropdown">
                                ▼{/* Dropdown menu icon */}
                            </button>
                        </span>

                         {isAdmin && (
                            <button onClick={toggleRightMenu} className="settings-menu-button" aria-label="Open settings">
                                ⚙️{/* Settings icon */}
                            </button>
                         )}

                        {showPointsDropdown && (
                            <div className={`${styles['points-dropdown-menu']} ${showPointsDropdown ? styles['show-dropdown'] : ''}`} role="menu">
                                <Link href="/points">My Points</Link>
                            </div>
                        )}

                        {showDropdown && (
                            <div className={`${styles['dropdown-menu']} ${showDropdown ? styles['show-dropdown'] : ''}`} role="menu">
                                <Link href="/profile">Profile</Link>
                                <button className="sign-out-button" onClick={() => {
                                    clearCart();
                                    signOut();
                                    router.push('/login');
                                }}>Sign Out</button>
                            </div>
                        )}
                    </>
                ) : (
                    <Link href="/login">Sign In</Link>
                )}
            </div>

            <HamburgerMenu
                showLeftMenu={showLeftMenu}
                showRightMenu={showRightMenu}
                onCloseLeftMenu={() => setShowLeftMenu(false)} // Close left menu
                onCloseRightMenu={() => setShowRightMenu(false)} // Close right menu
            />
        </nav>
    );
}
//     </div>
//   );
