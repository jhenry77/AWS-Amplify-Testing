/* Popup.tsx */
import React from 'react';
import styles from './styles/Popup.module.css'; // Update the path to your actual CSS file

// Define an interface for the component props
interface PopupProps {
  popupTitle: string;  // Define the type of popupTitle as string
  onClose: () => void; // Define the type of onClose as a function returning void
  children?: React.ReactNode;  // Optionally include children of type React.ReactNode
}

const Popup: React.FC<PopupProps> = ({ popupTitle, onClose, children }) => {
  return (
    <div className={styles.popupBackground}>
      <div className={styles.popup}>
        <h2 className={styles.popupTitle}>{popupTitle}</h2>
        {children}
        <div className={styles.popupButtons}>
            <button type="button" className={styles.popupExitButton} onClick={onClose}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
