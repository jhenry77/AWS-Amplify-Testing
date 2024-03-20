// HamburgerMenu.tsx
import Link from "next/link";
import React from 'react';
import styles from "./styles/HamburgerMenu.module.css";

type HamburgerMenuProps = {
  showLeftMenu: boolean;
  showRightMenu: boolean;
  onCloseLeftMenu: () => void; // Callback to close the left menu
  onCloseRightMenu: () => void; // Callback to close the right menu
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  showLeftMenu,
  showRightMenu,
  onCloseLeftMenu,
  onCloseRightMenu,
}) => {
  return (
    <>
      <div className={`${styles['left-menu-content']} ${showLeftMenu ? styles['show-menu'] : ''}`}>
        <button onClick={onCloseLeftMenu} className={styles['close-button']}>Close Left Menu</button>
        <div className={styles['menu-title']}>Dashboard</div>
        {/* <Link href="/home">Dashboard</Link> */}
      </div>

      <div className={`${styles['right-menu-content']} ${showRightMenu ? styles['show-menu'] : ''}`}>
        <button onClick={onCloseRightMenu} className={styles['close-button']}>Close Right Menu</button>
        <div className={styles['menu-title']}>Dev Tools</div>
        {/* Placeholder for right menu items, add as needed */}
      </div>
    </>
  );
};

export default HamburgerMenu;