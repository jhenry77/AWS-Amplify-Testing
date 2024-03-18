// HamburgerMenu.tsx
import Link from "next/link";
import React, { useEffect } from 'react';

type HamburgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void; // Used to open and close the menu
  closeMenu: () => void; // Specifically used to close the menu
  position: 'left' | 'right'; // Specify that position can only be 'left' or 'right'
  content: JSX.Element[]; // Array of JSX Elements for menu content
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu, closeMenu, position, content }) => {

// useEffect hook for development logging
  useEffect(() => {
    console.log(`DEV_TEST: ${isOpen ? 'Opening' : 'Closing'} ${position} hamburger menu`);
  }, [isOpen, position]);

  return (
    
    <div className={`hamburger-menu ${position} ${isOpen ? 'open' : ''}`}>
      {/* Close Button */}
      <button className="close-menu-button" onClick={closeMenu}>X</button>

      {/* Actual menu items that are shown when the menu is open */}
      {isOpen && (
        <div className="menu-items">
          {/* Render the passed content here */}
          {content.map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;