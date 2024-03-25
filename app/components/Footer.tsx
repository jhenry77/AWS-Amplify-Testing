// Footer.tsx

import styles from "./styles/footer.module.css";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className={styles.footer}>
            {/* Using 'div' for the container of links for semantic purposes */}
            <div className={styles.title}>Ctrl Alt Elt</div>
            <nav className={styles.links}>
                {/* Using 'nav' to wrap navigation links for better semantics */}
                <Link href="/home">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Sponsors</Link>
                <Link href="/">Catalogs</Link>
                <Link href="/">Reports</Link>
                <Link href="/login">Login</Link>
            </nav>
            {/* Utilize 'section' for the bottom part to group related content and improve accessibility */}
            <section className={styles.bottom}>
                <Link href="/contact">Contact Us</Link> {/* Assuming you have a separate page for contact */}
                <Link href="/terms">Website Terms</Link>
                <Link href="/privacy">Privacy Policy</Link>
                <p>All Rights Reserved</p>
            </section>
        </footer>
    );
};