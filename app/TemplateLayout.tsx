// TemplateLayout.tsx

import React, { useState } from 'react';
import Navbar from './AppNav'; // Adjust the import path as necessary
//import Footer from './Footer'; // Adjust the import path as necessary
import HamburgerMenu from './HamburgerMenu'; // Adjust the import path as necessary

type TemplateLayoutProps = {
    children: React.ReactNode;
};

// Define the content for the left menu
const leftMenuContent = [
    // You can replace these <a> tags with Link from 'next/link' or other routing components
    <a>Left Page 1</a>,
    <a>Left Page 2</a>,
];

// Define the content for the right menu
const rightMenuContent = [
    <a /*href="/right-page1" onClick={() => setIsRightMenuOpen(false)}*/>Right Page 1</a>,
    <a /*href="/right-page2" onClick={() => setIsRightMenuOpen(false)}*/>Right Page 2</a>,
];

const TemplateLayout: React.FC<TemplateLayoutProps> = ({ children }) => {
    const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
    const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

    // Functions to toggle the menus open state
    const toggleLeftMenu = () => setIsLeftMenuOpen(!isLeftMenuOpen);
    const toggleRightMenu = () => setIsRightMenuOpen(!isRightMenuOpen);

    // Close menus if backdrop is clicked
    const closeMenus = () => {
        if (isLeftMenuOpen) setIsLeftMenuOpen(false);
        if (isRightMenuOpen) setIsRightMenuOpen(false);
    };

    return (
        <div className="template-layout">
            {/* Navbar Section */}
            <Navbar onLeftMenuToggle={toggleLeftMenu} onRightMenuToggle={toggleRightMenu} />

            {/* Left Hamburger Menu Section */}
            <HamburgerMenu
                isOpen={isLeftMenuOpen}
                toggleMenu={toggleLeftMenu}
                closeMenu={() => setIsLeftMenuOpen(false)}
                position="left"
                content={leftMenuContent} // Pass the left menu content

            />

            {/* Right Hamburger Menu Section */}
            <HamburgerMenu
                isOpen={isRightMenuOpen}
                toggleMenu={toggleRightMenu}
                closeMenu={() => setIsRightMenuOpen(false)}
                position="right"
                content={rightMenuContent} // Pass the right menu content
            />

            {/* Main content */}
            <main className="main-content">{children}</main>
            
            {/* Backdrop */}
            {(isLeftMenuOpen || isRightMenuOpen) && (
                <div className="backdrop" onClick={closeMenus}></div>
            )}

            {/* Footer */}
            {/* <Footer /> Uncomment when Footer is ready */}
        </div>
    );
};

export default TemplateLayout;