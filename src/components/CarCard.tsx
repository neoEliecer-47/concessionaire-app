import Image from "next/image";
import { CarProps } from "../../types";
import { calculateCarRent } from "../../utils";

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

      <p
        style={{
          display: "flex",
          marginTop: "1.5rem",
          fontSize: "32px",
          fontWeight: "800",
        }}
      >
        <span
          style={{
            alignSelf: "flex-start",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          $
        </span>
          {carRent}

        <span
          style={{
            alignSelf: "flex-end",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          
          /day
        </span>
      </p>


      <div style={{ position: 'relative', width: '100%', height: '10rem', margin: '0.75rem 0', objectFit: 'contain' }}>
          <Image src='/hero.png' alt="car model" width={110} height={80}/>
      </div>
    </div>
  );
};

export default CarCard;
