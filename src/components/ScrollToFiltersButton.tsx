"use client";

import React from "react";
import { useScrollDetector } from "../../hooks/useScrollDetector";
import styles from "./ScrollToFiltersButton.module.css";
import ArrowScroll from "./icons/ArrowScroll";

const ScrollToFiltersButton = () => {
  const scrollPostion = useScrollDetector();
  console.log(scrollPostion);

  function handleScroll() {
    const filtersContainer = document.getElementById("filters");
    filtersContainer?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.buttonContainer}>
      {scrollPostion > 500 && (
        <button className={styles.buttonStyles} onClick={() => handleScroll()}>
          <ArrowScroll />
        </button>
      )}
    </div>
  );
};

export default ScrollToFiltersButton;
