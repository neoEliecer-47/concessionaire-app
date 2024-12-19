"use client";
import React, { useEffect, useRef, useState } from "react";
import { CarModalDetailsProps } from "../../types";
import styles from "./CarModalDetails.module.css";
import classNames from "classnames";
import Image from "next/image";

const CarModalDetails = ({ isOpen, car, onClick }: CarModalDetailsProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  function handleCloseModal() {
    setIsClosing(true); //trigger the closing animation

    //wait for the animation to complete
    setTimeout(() => {
      setIsClosing(false);
      onClick(false);
    }, 220);
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
        <button
          style={{ zIndex: "1000", position: 'absolute', right: '50px', top: '-50px' }}
          onClick={handleCloseModal}
          type="button"
        >
          <Image
            src="/close.svg"
            alt="close"
            width={20}
            height={20}
            style={{ objectFit: "contain", padding: "0" }}
          />
        </button>

        <div className={styles.content}>
          <div className={styles.backgroundImageContainer} style={{ position: 'relative' }}>
            <Image
              src="/hero.png"
              alt="car model"
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum
            cum et, ipsam quasi vel tempora sunt sequi! Delectus, quibusdam.
            Cupiditate corporis nulla animi nihil praesentium ex ab repellat
            dolore.
          </div>
        </div>
      </div>
      <div className={styles.bgBlur} />
    </div>
  );
};

export default CarModalDetails;
