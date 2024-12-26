'use client';

import { useRouter } from "next/navigation";
import { showMoreProps } from "../../types";
import styles from './ShowMore.module.css'
import CustomButton from "./CustomButton";
import { updateSearchParams } from "../../utils";


const ShowMore = ({ pageNumber, isNext }: showMoreProps) => {

    const router = useRouter();

    function handleNavigation() {
        const newLimit = (pageNumber + 1) * 10;//so the first time we click on the button we will get 20, then 30 and so on
        const newPathName = updateSearchParams("limit", newLimit.toString());
     
         router.push(newPathName, { scroll: false });
    }

  return (
    <div className={styles.showMoreContainer}>
        {!isNext && (
            <CustomButton 
                title="Show More"
                btnType="button"
                containerStyles="bg-primary-blue rounded-full text-white"
                handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore