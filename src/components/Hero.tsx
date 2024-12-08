"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import CustomButton from "./CustomButton";

const Hero = () => {
  function handleScroll() {}

  return (
    <div className="hero">
      <div className={styles.hero2}>
        <h1 className="hero__title">
          Find, book or rent a car - quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="landingPageButtonStyles"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            style={{ objectFit: "contain" }}
          />
          <div className="hero__image-overlay"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
