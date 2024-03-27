import styles from "../components/styles/home.module.css";
import Image from "next/image";

export default function Homepage() {
    return(
        <main>
            <div style={{ position: 'relative', height: '1200px' , zIndex: '-1'}}>
                <Image
                    src="/trucking.jpg"
                    alt="Home Photo"
                    quality={100}
                    fill
                    style={{objectFit: 'cover'}}
                />
            </div>
        </main>
    );
};