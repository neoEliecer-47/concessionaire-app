import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navBox}>
        <Link href="/" className={styles.linkBox}>
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            style={{ objectFit: "contain", padding: "0 5px" }}
          />
        </Link>

        <CustomButton 
          title="Sign In"
          btnType="button"
          containerStyles="headerButtonStyles"
          handleClick={''}
        />
      </nav>
    </header>
  );
};

export default Navbar;
