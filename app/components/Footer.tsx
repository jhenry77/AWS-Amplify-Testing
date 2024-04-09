// Footer.tsx
import styles from "./styles/footer.module.css";
import Link from "next/link";

export default function Footer() {
    return(
        <div className={styles['footer']}>
            <h1 className={styles['title']}>Crtl Alt Elt</h1>
            <h1 className={styles['bottom']}>
                <p>Contact Us</p>
                <p>Website Terms</p>
                <p>Privacy Policy</p>
                <p>All Rights Reserved</p>
            </h1>
        </div>
    );
};