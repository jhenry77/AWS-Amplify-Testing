// HamburgerMenu.tsx
import Link from "next/link";
import React, { useState } from 'react';
import styles from "./styles/HamburgerMenu.module.css";
import Popup from './Popup'; // Update the path to your actual Popup component file

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
  const [showPopup, setShowPopup] = useState(false);
  const [activePopup, setActivePopup] = useState('');

  // const handlePopupOpen = () => setShowPopup(true);
  // Function to handle opening a popup
  const handlePopupOpen = (popupType: string) => {
    setActivePopup(popupType);
  };
  // Function to handle closing the currently active popup
  const handlePopupClose = () => {
    setActivePopup('');
  };


  const [showSponsorPopup, setShowSponsorPopup] = useState(false);
  const toggleSponsorPopup = () => setShowSponsorPopup(!showSponsorPopup);

  // const [showGetProductsPopup, setShowGetProductsPopup] = useState(false);
  // const toggleGetProductsPopup = () => setShowGetProductsPopup(!showGetProductsPopup);

  return (
    <>
      <div className={`${styles['left-menu-content']} ${showLeftMenu ? styles['show-menu'] : ''}`}>
        <div className={styles['left-menu-header']}>
          <div className={styles['left-menu-title']}>Dashboard</div>
          <button onClick={onCloseLeftMenu} className={styles['left-close-button']}>×</button>
        </div>
        {/* Menu Items */}
        <div className={styles['left-menu-section']}>
          {/* <div className={styles['menu-section']}> */}
          <div className={styles['left-menu-section-title']}>Indexes</div>
          <div className={styles['left-menu-item']} onClick={toggleSponsorPopup}>
            Admin Index
          </div>
          {/* FIXME: Change to toggle AddSponsorPopup */}
          <div className={styles['left-menu-item']} onClick={toggleSponsorPopup}>
            Driver Index
          </div>
          {/* FIXME: Change to toggle RemoveSponsorPopup */}
          <div className={styles['left-menu-item']} onClick={toggleSponsorPopup}>
            Sponsor Index
          </div>
          <div className={styles['left-menu-item']} onClick={toggleSponsorPopup}>
            Product Index
          </div>
        </div>
      </div>

      <div className={`${styles['right-menu-content']} ${showRightMenu ? styles['show-menu'] : ''}`}>
        <div className={styles['right-menu-header']}>
          <button onClick={onCloseRightMenu} className={styles["right-close-button"]}>×</button>
          <div className={styles['right-menu-title']}>Dev Tools</div>
        </div>
        {/* Menu Items */}

        <div className={styles['menu-section']}>
          <div className={styles['right-menu-section-title']}>User Sponsors</div>
          <div className={styles['right-menu-item']} onClick={() => handlePopupOpen('Get User Sponsors')}>
            Get User Sponsors
          </div>
          {/* FIXME: Change to toggle AddSponsorPopup */}
          <div className={styles['right-menu-item']} onClick={() => handlePopupOpen('Add User Sponsor')}>
            Add User Sponsor
          </div>
          {/* FIXME: Change to toggle RemoveSponsorPopup */}
          <div className={styles['right-menu-item']} onClick={() => handlePopupOpen('Remove User Sponsor')}>
            Remove User Sponsor
          </div>
          <div className={styles['right-menu-item']} onClick={() => handlePopupOpen('Switch User Sponsor')}>
            Switch User Sponsor
          </div>
        </div>
      </div>

      {activePopup === 'Get User Sponsors' && (
        <Popup isOpen={true} popupTitle="User Sponsors" onClose={handlePopupClose}>
          {/* Content of the Popup, like form inputs and the submit button */}
          <form onSubmit={(e) => {
            e.preventDefault();
            // Handle submit logic here
            handlePopupClose(); // Close the popup on form submission
          }}>
            {/* Your form inputs here */}
            <button type="submit" className="popup-submit-button">Submit</button>
          </form>
        </Popup>
      )}
    </>
  );
};

export default HamburgerMenu;
