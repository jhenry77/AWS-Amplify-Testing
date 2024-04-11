/* Popup.tsx */
import React from 'react';
import styles from './styles/Popup.module.css'; // Update the path to your actual CSS file

const Popup = ({popupTitle, onClose, children }) => {
  return (
    <div className={styles.popupBackground}>
      <div className={styles.popup}>
        <h2 className={styles.popupTitle}>{popupTitle}</h2>
        {children}
        <div className={styles.popupButtons}>
            <button type="button" className="popup-exit-button" onClick={onClose}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;