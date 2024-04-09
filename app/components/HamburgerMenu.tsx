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
        <div className={styles['left-menu-header']}>
          <div className={styles['left-menu-title']}>Dashboard</div>
          <button onClick={onCloseLeftMenu} className={styles['left-close-button']}>×</button>
        </div>
        {/* Menu Items */}
      </div>

      <div className={`${styles['right-menu-content']} ${showRightMenu ? styles['show-menu'] : ''}`}>
        <div className={styles['right-menu-header']}>
          <button onClick={onCloseRightMenu} className={styles['right-close-button']}>×</button>
          <div className={styles['right-menu-title']}>Dev Tools</div>
        </div>
        
        {/* Menu Items */}
      </div>
    </>
  );
};

export default HamburgerMenu;