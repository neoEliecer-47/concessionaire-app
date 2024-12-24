"use client";

import { useEffect, useState } from "react";
import styles from "./DropdownMenu.module.css";
import { CheckIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { useClickOutsideDetector } from "../../hooks/useClickOutsideDetector";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "../../utils";

interface MyValues {
  item: string;
}

type DropdownMenuProps = {
  placeholder: string;
  data: MyValues[];
  money?: boolean;

  paramValue?: string;
};

export default function DropdownMenu({
  placeholder,
  data,
  money = false,

  paramValue,
}: DropdownMenuProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [option, setOption] = useState<number | null>(null);
  const router = useRouter();

  const { dropMenuRef, isClickOutside, setIsClickOutside } =
    useClickOutsideDetector();

  // function checkIndexInData(value: string | null) {
  //   const string = getValues(value, null);
  //   let indexFromParam = data.findIndex((item) => {
  //     let newItem = getValues(item, null);
  //     return newItem === string; //returns the index in the array when these two values coincide one another
  //   });
  //   setOption(indexFromParam);
  // }

  // function buildValuesIfParams(placeholderIfParam, check) {
  //   const params = new URLSearchParams(window.location.search);
  //   if (params.size === 0 && placeholderIfParam) return placeholder;

  //   if (params.size === 0) return;
  //   const value = params.get(paramValue);
  //   if (params && !option && check) return checkIndexInData(value);
  //   return value;
  // }

  // function handleOpenOptions(e) {
  //   e.stopPropagation();
  //   setOpen(!open);
  // }

  function getValues(item: string | Object, index: number) {
    if (money && index === 0) {
      return "No Minimun";
    }
    if (item instanceof Object)
      return typeof item === "object" ? Object.values(item)[0] : item;
  }

  function handleSearchParams(e: {type: string ,value: string}) {
    const newPathname = updateSearchParams(e.type, e.value);
    router.push(newPathname, { scroll: false });
  }


  function buildPlaceholder(tooltip?: string) {
    if (option === null) return placeholder;
    let item = data[option];
    let currentOptionName = "";
    currentOptionName = getValues(item, option);
    if (tooltip) return placeholder;
    //onValue(placeholder);
    return (
      currentOptionName?.slice(0, 11) +
      `${placeholder?.length > 10 ? "..." : ""}`
    );
  }

  useEffect(() => {
    if (isClickOutside) {
      setOpen(false);
      setIsClickOutside(false);
    }
  }, [isClickOutside]);

  // useEffect(() => {
  //   //use setOption here when there are params
  //   buildValuesIfParams(null, "check");
  // }, []);

  return (
    // <div style={{ position: "relative", zIndex: 6,,  display: 'flex' }}>
    <section
      style={{ cursor: "pointer" }}
      ref={dropMenuRef}
      onClick={() => setOpen(!open)}
    >
      <div className={styles.placeholderContainer}>{buildPlaceholder()}</div>
      {/* <div
        className={classNames(
          styles.placeholderContainer,
          option && styles.placeholderContainerSelected
        )}
        
      >
        {buildPlaceholder("tooltip")?.length > 10 && (
          <div className={styles.tooltipContainer}>
            <span className={styles.tooltipText}>
              {buildPlaceholder("tooltip")}
            </span>
          </div>
        )}

        <h2 className={styles.placeholder}>
          {option === null
            ? buildValuesIfParams("placeholderIfParam")
            : buildPlaceholder()}
        </h2>
        <ChevronDownIcon
          className={classNames(styles.icon, open && styles.iconRotate)}
        />
      </div> */}

      <div
        className={styles.options}
        style={{
          padding: `${open ? "10px 0px" : "0px"}`,
          width: "8rem",
          maxHeight: `${open ? "10rem" : "0px"}`,
        }}
      >
        {open &&
          data.map((item, index) => (
            <div
              style={{
                margin: "0px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              key={index}
              onClick={() => setOption(index)}
              className={styles.containerO}
            >
              <div style={{ width: "1.3rem" }}>
                {option === index && <CheckIcon className={styles.icon} />}
              </div>
              <div className={styles.optionButton}>
                {getValues(item, index)}
              </div>
            </div>
          ))}
      </div>
    </section>
    // </div>
  );
}
