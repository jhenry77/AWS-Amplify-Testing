import styles from "../components/styles/home.module.css";
import Image from "next/image";

export default function Homepage() {
    return(
        <div className={styles['image']}>
            <img
                src="/trucking.jpg"
                alt="Home Photo"
                />
        </div>
    );
};