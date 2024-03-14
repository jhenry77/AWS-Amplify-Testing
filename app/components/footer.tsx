import styles from "./styles/footer.module.css";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className={styles['footer']}>
            <h1 className={styles['title']}>Crtl Alt Elt</h1>
            <br/>
            <div className={styles['links']}>
                <Link href="/home">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Sponsors</Link>
                <Link href="/">Catalogs</Link>
                <Link href="/">Reports</Link>
                <Link href="/loginPage">Login</Link>
            </div>
            <h1 className={styles['bottom']}>
                <p>Contact Us</p>
                <p>Website Terms</p>
                <p>Privacy Policy</p>
                <p>All Rights Reserved</p>
            </h1>
        </footer>
    );
};