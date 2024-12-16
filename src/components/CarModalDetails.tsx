import { CarModalDetailsProps } from "../../types";
import styles from "./CarModalDetails.module.css";

const CarModalDetails = ({ isOpen, car, closeModal }: CarModalDetailsProps) => {
  return (
    
      <div className={styles.modalOverley}>
      <button onClick={closeModal}></button>
      <div className={styles.modalContent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sit
        molestias officia necessitatibus modi accusamus suscipit illum
        voluptatem ipsum! Voluptatibus dolorem accusamus eaque similique numquam
        delectus vitae, rem magni ea.
      </div>
      <div className={styles.bgBlur}/>
    </div>
   
  );
};

export default CarModalDetails;
