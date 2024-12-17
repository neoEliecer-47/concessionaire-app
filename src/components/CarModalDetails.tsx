"use client";
import React, { useEffect, useRef, useState } from "react";
import { CarModalDetailsProps } from "../../types";
import styles from "./CarModalDetails.module.css";
import classNames from "classnames";

const CarModalDetails = ({ isOpen, car, onClick }: CarModalDetailsProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  function handleCloseModal() {
    setIsClosing(true); //trigger the closing animation

    //wait for the animation to complete
    setTimeout(() => {
      setIsClosing(false);
      onClick(false);
    }, 450);
  }

  function handleClickOutside(e: MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCloseModal();
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
      <div
        className={classNames(
          styles.modalContent,
          isClosing ? styles.modalAnimationOut : ""
        )}
        ref={modalRef}
      >
        <button style={{ zIndex: "1000" }} onClick={handleCloseModal}>
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
