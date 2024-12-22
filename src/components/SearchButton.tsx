import classNames from "classnames";
import { searchButtonProps } from "../../types";
import styles from "./SearchButton.module.css";
import Image from "next/image";

const SearchButton = ({ otherClasses }: searchButtonProps) => {
  return (
    <button
      type="submit"
      className={classNames(styles.searchButtonContainer, `${otherClasses}`)}
    >
      Search
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        style={{ objectFit: "contain", padding: "0" }}
      />
    </button>
  );
};

export default SearchButton;
