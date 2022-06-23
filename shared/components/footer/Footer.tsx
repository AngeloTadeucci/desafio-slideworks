import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import styles from "../../../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLogo}>
                <Image src="/logo_bibbble_transparent.svg" alt="Logo" width={35} height={32} />
                <p>Libslide</p>
            </div>
            <hr />

            <div className={styles.footerInfo}>
                <div className={styles.footerTerms}>
                    <Link href="#">Terms & Conditions</Link>
                    <Link href="#">Privacy Policy</Link>
                </div>

                <div className={styles.footerSocial}>
                    <Link href="#">
                        <AiFillTwitterSquare size={25} style={{ cursor: "pointer" }} />
                    </Link>
                    <Link href="#">
                        <AiFillInstagram size={25} style={{ cursor: "pointer" }} />
                    </Link>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/AngeloTadeucci">
                        <AiFillGithub size={25} style={{ cursor: "pointer" }} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
