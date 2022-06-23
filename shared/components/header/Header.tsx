import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import styles from "../../../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_logo}>
                <Image src="/logo_bibbble_colored.svg" alt="Logo" width={130} height={32}/>
            </div>

            <div className={styles.header_items}>
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Features</Link>
                <Link href="#">Pricing</Link>
                <Link href="#">Gallery</Link>
                <Link href="#">Team</Link>
                <Link href="#">
                    <BsSearch></BsSearch>
                </Link>
            </div>
        </header>
    );
}
