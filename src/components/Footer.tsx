import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { footerLinks } from "../../constants";

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

        <div className="footer__links">
            {footerLinks.map((link)=> (
                <div key={link.title} className="footer__link">
                    <h3>{link.title}</h3>
                    {link.links.map((item)=>(
                        <Link key={item.title} href={item.url} className={styles.linkStyles}>
                            {item.title}
                        </Link>
                    ))}
                </div>
            ))}
        </div>

        <div className={styles.footerBottom}>
            <p>@2024 CarHub. All Rights reserved</p>
            <div className="footer__copyrights-link">
                <Link href='/' style={{ color: 'rgb(107,114,128)' }}>
                Privacy Policy
                </Link>
                <Link href='/' style={{ color: 'rgb(107,114,128)' }}>
                Terms of Use
                </Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
