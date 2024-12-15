import Image from "next/image";
import { CarProps } from "../../types";
import { calculateCarRent } from "../../utils";
import styles from "./CarCard.module.css";

type CarCardProps = {
  car: CarProps;
};

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

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
            <Image src='/steering-wheel.svg' alt="steering wheel"
            width={40} height={40}/>
            <p>
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
