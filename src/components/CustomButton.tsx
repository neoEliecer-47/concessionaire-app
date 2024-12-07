"use client";

import Image from "next/image";
import classNames from "classnames";
import styles from './CustomButton.module.css'
import { CustomButtonProps } from "../../types";

const CustomButton = ( { title, containerStyles, handleClick }: CustomButtonProps ) => {
  return (
    <button
      disabled={false}
      type="button"
      className={classNames('custom-btn', containerStyles)}
      onClick={handleClick}
    >
        <span className={classNames(styles.spanButton)}>
            {title}
        </span>
    </button>
  );
};

export default CustomButton;
