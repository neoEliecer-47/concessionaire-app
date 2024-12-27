"use client";

import React from "react";
import { useScrollDetector } from "../../hooks/useScrollDetector";
import styles from "./ScrollToFiltersButton.module.css";
import ArrowScroll from "./icons/ArrowScroll";

const ScrollToFiltersButton = () => {
  const scrollPostion = useScrollDetector();

  function handleScroll() {
    const filtersContainer = document.getElementById("filters");
    filtersContainer?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.buttonContainer}>
      {scrollPostion > 1500 && (
        <button className={styles.buttonStyles} onClick={handleScroll}>
          <ArrowScroll otherStyles={styles.stylesForIcon}/>
        </button>
      )}
    </div>
  );
};

export default ScrollToFiltersButton;
