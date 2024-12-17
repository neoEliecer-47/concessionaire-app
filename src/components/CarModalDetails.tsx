"use client";
import React, { useEffect, useRef } from "react";
import { CarModalDetailsProps } from "../../types";
import styles from "./CarModalDetails.module.css";

const CarModalDetails = ({ isOpen, car, onClick }: CarModalDetailsProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  function handleClickOutside(e: MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClick(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.modalOverley}>
      <div className={styles.modalContent} ref={modalRef}>
        <button style={{ zIndex: "1000" }} onClick={() => onClick(false)}>
          button
        </button>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sit
        molestias officia necessitatibus modi accusamus suscipit illum
        voluptatem ipsum! Voluptatibus dolorem accusamus eaque similique numquam
        delectus vitae, rem magni ea.
      </div>
      <div className={styles.bgBlur} />
    </div>
  );
};

export default CarModalDetails;
