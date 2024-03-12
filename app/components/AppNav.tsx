import styles from "./styles/AppNav.module.css";
import Link from "next/link";

export default function Navbar() {
    return(
        <nav className={styles['navbar']}>
            <Link href="/home">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Sponsors</Link>
            <Link href="/">Catalogs</Link>
            <Link href="/">Reports</Link>
            <Link href="/login">Login</Link>
        </nav>
    );
};

