"use client";
import React, { useEffect, useRef, useState } from "react";
import { CarModalDetailsProps } from "../../types";
import styles from "./CarModalDetails.module.css";
import classNames from "classnames";
import Image from "next/image";
import ArrowScroll from "./icons/ArrowScroll";

const CarModalDetails = ({ isOpen, car, onClick }: CarModalDetailsProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  //const scrollableRef = useRef<HTMLDivElement | null>(null)
  const [isClosing, setIsClosing] = useState<boolean>(false);

  function scrollDown(){
   if(modalRef.current){
    modalRef.current.scrollBy({
      top: 300,
      behavior: 'smooth'
    })
   }
  }
  
  
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
        <div className={styles.content}>
          <div
            className={styles.backgroundImageContainer}
            style={{ position: "relative" }}
          >
            <button
              style={{
                zIndex: "1000",
                position: "absolute",
                right: "15px",
                top: "10px",
                backgroundColor: "rgba(252, 252, 252, 0.6)",
                border: "none",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "5px 5px",
              }}
              onClick={handleCloseModal}
              type="button"
            >
              <Image
                src="/close.svg"
                alt="close"
                width={20}
                height={20}
                style={{ objectFit: "contain", padding: "0", opacity: "1" }}
              />
            </button>
            <Image
              src="/hero.png"
              alt="car model"
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.descriptionImagesContainer}>
            <div className={styles.descriptionImagesContainerTwo}>
              <Image src='/hero.png' alt="car" fill priority style={{ objectFit: 'contain' }} />
            </div>
            <div className={styles.descriptionImagesContainerTwo}>
              <Image src='/hero.png' alt="car" fill priority style={{ objectFit: 'contain' }} />
            </div>
            <div className={styles.descriptionImagesContainerTwo}>
              <Image src='/hero.png' alt="car" fill priority style={{ objectFit: 'contain' }} />
            </div>

          </div>

          <div className={styles.mainContentContainer}>
           <h2 style={{ fontWeight: '600', fontSize: '1.25rem', textTransform:'capitalize' }}>{car.make} - {car.model}</h2>
           <div className={styles.restContentContainer}>
              {Object.entries(car).map(([key, value])=>(
                <div key={key} className={styles.restContent}>
                  <h4 className={styles.keyStyles}>{key.split('_').join(' ')}</h4>
                  <p className={styles.valueStyles}>{value}</p>
                </div>
              ))}
              <section className={styles.buttonScrollContainer}> 
                <button className={styles.buttonScroll} onClick={scrollDown}>
                  <ArrowScroll />
                </button>
              </section>

        
           </div>
          </div>
        </div>
      </div>
      <div className={styles.bgBlur} />
    </div>
  );
};

export default CarModalDetails;
