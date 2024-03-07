// HamburgerMenu.tsx
import Link from "next/link";
import React, { useEffect } from 'react';

type HamburgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  position: 'left' | 'right'; // Specify that position can only be 'left' or 'right'
  closeMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu, position, closeMenu }) => {

// useEffect hook for development logging
  useEffect(() => {
    console.log(`DEV_TEST: ${isOpen ? 'Opening' : 'Closing'} ${position} hamburger menu`);
  }, [isOpen, position]);

  return (
    <div className={`hamburger-menu ${position} ${isOpen ? 'open' : ''}`}>
      {/* Close button - Clicking this should close the menu */}
      <button onClick={closeMenu} className="close-menu-button">
        X {/* The X icon, or use an actual icon component */}
      </button>

      {/* Hamburger icon - Clicking this should toggle the menu's open state */}
      <button onClick={toggleMenu} className="hamburger-menu-button">
        <span className="hamburger-icon-bar"></span>
        <span className="hamburger-icon-bar"></span>
        <span className="hamburger-icon-bar"></span>
      </button>

      {/* Actual menu items that are shown when the menu is open */}
      {isOpen && (
        <div className="menu-container">
          {/* Add menu items here */}
          <Link href="/page1"><a>Page 1</a></Link>
          <Link href="/page2"><a>Page 2</a></Link>
          {/* ... more menu items */}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;