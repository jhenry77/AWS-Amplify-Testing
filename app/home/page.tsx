import styles from "../components/styles/home.module.css";
import Image from "next/image";

export default function Homepage() {
    return(
        <main> 
            <div className={styles['image']}>
                <Image
                    src="/trucking.jpg"
                    alt="Home Photo"
                    quality={50}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </main>
    );
};