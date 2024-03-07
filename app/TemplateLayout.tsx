// TemplateLayout.tsx

import React, { useState } from 'react';
import Navbar from './AppNav'; // Adjust the import path as necessary
//import Footer from './Footer'; // Adjust the import path as necessary
import HamburgerMenu from './HamburgerMenu'; // Adjust the import path as necessary

type TemplateLayoutProps = {
    children: React.ReactNode;
};

const TemplateLayout: React.FC<TemplateLayoutProps> = ({ children }) => {
    const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
    const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

    // Functions to toggle the menus open state
    const toggleLeftMenu = () => setIsLeftMenuOpen(!isLeftMenuOpen);
    const toggleRightMenu = () => setIsRightMenuOpen(!isRightMenuOpen);

    // Close menus if backdrop is clicked
    const closeMenus = () => {
        if(isLeftMenuOpen) setIsLeftMenuOpen(false);
        if(isRightMenuOpen) setIsRightMenuOpen(false);
    };

    return (
        <div className="template-layout">
            {/* Navbar Section */}
            <Navbar onLeftMenuToggle={toggleLeftMenu} onRightMenuToggle={toggleRightMenu} />

            {/* Left Hamburger Menu Section */}
            <HamburgerMenu
                isOpen={isLeftMenuOpen}
                toggleMenu={toggleLeftMenu}
                position="left"
                closeMenu={() => setIsLeftMenuOpen(false)}
            />

            <HamburgerMenu
                isOpen={isRightMenuOpen}
                toggleMenu={toggleRightMenu}
                position="right"
                closeMenu={() => setIsRightMenuOpen(false)}
            />

            {/* Main content */}
            <main className="main-content">{children}</main>

            {/* Backdrop */}
            {(isLeftMenuOpen || isRightMenuOpen) && (
                <div className="backdrop" onClick={closeMenus}></div>
            )}

            {/* Footer */}
        </div>
    );
};

export default TemplateLayout;