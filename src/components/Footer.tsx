import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerSecondContainer}>
        <div className={styles.footerThirdContainer}>
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            style={{ objectFit: "contain" }}
          />
          <p className={styles.parraf}>
            Car Hub 2024 <br /> All rights reserved &copy;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
