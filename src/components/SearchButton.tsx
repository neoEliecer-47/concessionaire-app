
import { searchButtonProps } from "../../types";
import styles from "./SearchButton.module.css";
import Image from "next/image";

const SearchButton = ({ otherClasses }: searchButtonProps) => {
  return (
    <button
      type="submit"
      className={styles.searchButtonContainer}
    >  
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={35}
        height={35}
        style={{ objectFit: "contain", padding: "0" }}
      />
    </button>
  );
};

export default SearchButton;
