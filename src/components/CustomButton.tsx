"use client";

import Image from "next/image";
import classNames from "classnames";
import styles from './CustomButton.module.css'

const CustomButton = () => {
  return (
    <button
      disabled={false}
      type="button"
      className={classNames('custom-btn')}
      onClick={() => {}}
    >
        <span className={classNames(styles.spanButton)}>
            title
        </span>
    </button>
  );
};

export default CustomButton;
