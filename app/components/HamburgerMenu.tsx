// HamburgerMenu.tsx
import Link from "next/link";
import React from 'react';
import styles from "./styles/HamburgerMenu.module.css";

type HamburgerMenuProps = {
  showLeftMenu: boolean;
  showRightMenu: boolean;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  showLeftMenu,
  showRightMenu,
}) => {
  return (
    <>
      <div className={`${styles['left-content']} ${showLeftMenu ? styles['show-menu'] : ''}`}>
        <div className={styles['menu-title']}>Dashboard</div>
        {/* <Link href="/home">Dashboard</Link> */}
      </div>

      <div className={`${styles['right-content']} ${showRightMenu ? styles['show-menu'] : ''}`}>
        <div className={styles['menu-title']}>Dev Tools</div>
        {/* Placeholder for right menu items, add as needed */}
      </div>
    </>
  );
};

export default HamburgerMenu;