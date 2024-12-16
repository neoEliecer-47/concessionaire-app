'use client'

import Image from "next/image";
import { CarProps } from "../../types";
import { calculateCarRent } from "../../utils";
import styles from "./CarCard.module.css";
import CustomButton from "./CustomButton";
import { useState } from "react";
import CarModalDetails from "./CarModalDetails";

type CarCardProps = {
  car: CarProps;
};

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [open, setOpen] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)


  function toggleModal(){
    setIsOpen(!isOpen)
  }

  return (
    <div className="car-card">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} - {model}
        </h2>
      </div>

      <p className={styles.carRentContainer}>
        <span className={styles.carRentSpanOne}>$</span>
        {carRent}
        <span className={styles.carRentSpanTwo}>/day</span>
      </p>

      <div className={styles.containerImage}>
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className={styles.transmissionContainer}>
        <div className={styles.transmissionContainerTwo}>
          <div className={styles.transmissionContainerThree}>
            <Image
              src="/steering-wheel.svg"
              alt="steering wheel"
              width={40}
              height={40}
            />
            <p>{transmission === "a" ? "Automatic" : "Manual"}</p>
          </div>
          <div className={styles.transmissionContainerThree}>
            <Image src="/tire.svg" alt="tire" width={40} height={40} />
            <p>{drive.toLocaleUpperCase()}</p>
          </div>
          <div className={styles.transmissionContainerThree}>
            <Image src="/gas.svg" alt="gas" width={30} height={30} />
            <p>{city_mpg} MPG</p>
          </div>
        </div>

        <div
          className="car-card__btn-container"
          style={{ transition: "all 500ms ease" }}
        >
          <CustomButton
            title="View More"
            containerStyles="buttonStylesCarCard"
            textStyles="textStylesCarCard"
            rightIcon="/right-arrow.svg"
            handleClick={()=> setIsOpen(true)}
          />
        </div>
      </div>

      {isOpen && (
        <CarModalDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car}/>
      )}
    </div>
  );
};

export default CarCard;
