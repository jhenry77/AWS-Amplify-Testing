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

  const handlePopupOpen = () => setShowPopup(true);
  const handlePopupClose = () => setShowPopup(false);

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
          {/* <div className={styles['menu-section']}> */}
          <div className={styles['right-menu-section-title']}>Points</div>
          {/* FIXME: Change to toggle AddPointsPopup */}
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Add Points
          </div>
          {/* FIXME: Change to toggle RemovePointsPopup */}
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Remove Points
          </div>
          {/* FIXME: Change to toggle EditPointsPopup */}
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Edit Points
          </div>
        </div>
        
        <div className={styles['menu-section']}>
          {/* <div className={styles['menu-section']}> */}
          <div className={styles['right-menu-section-title']}>Admins</div>
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Get Admins
          </div>
          {/* FIXME: Change to toggle AddSponsorPopup */}
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Add Admin
          </div>
          {/* FIXME: Change to toggle RemoveSponsorPopup */}
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Remove Admin
          </div>
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Switch Admin
          </div>
        </div>

        <div className={styles['menu-section']}>
          <div className={styles['right-menu-section-title']}>Drivers</div>
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Get Drivers
          </div>
          {/* FIXME: Change to toggle AddDriverPopup */}
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Add Driver
          </div>
          {/* FIXME: Change to toggle RemoveSponsorPopup */}
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Remove Driver
          </div>
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Switch Driver
          </div>
        </div>

        <div className={styles['menu-section']}>
          <div className={styles['right-menu-section-title']}>Sponsors</div>
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Get Sponsors
          </div>
          {/* FIXME: Change to toggle AddSponsorPopup */}
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Add Sponsor
          </div>
          {/* FIXME: Change to toggle RemoveSponsorPopup */}
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Remove Sponsor
          </div>
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Switch Sponsor
          </div>
        </div>

        <div className={styles['menu-section']}>
          <div className={styles['right-menu-section-title']}>Products</div>
          <div className={styles['right-menu-item']} onClick={handlePopupOpen}>
            Get Products
          </div>

          {/* FIXME: Change to toggle AddProductPopup */}
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Add Products
          </div>
          {/* FIXME: Change to toggle RemoveProductPopup */}
          <div className={styles['right-menu-item']} onClick={toggleSponsorPopup}>
            Remove Product
          </div>
        </div>
      </div>

      {showPopup && (
        <Popup popupTitle="Get Products" onClose={handlePopupClose}>
          {/* Content of the Popup, like form inputs and the submit button */}
          {'popupTitle'}
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
