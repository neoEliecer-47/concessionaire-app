"use client";

import { SearchManufacturerProps } from "../../types";
import {
  Combobox,
  Transition,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import styles from "./SearchManufacturer.module.css";
import { manufacturers } from "../../constants";
import classNames from "classnames";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLocaleLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div style={{ position: "relative", width: "100%" }}>
          <ComboboxButton
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
              border: "none",
              padding: "0",
            }}
          >
            <Image
              src="/car-logo.svg"
              alt="car logo"
              width={25}
              height={25}
              style={{ padding: "0" }}
            />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            style={{ paddingLeft: "2.5rem" }}
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave={styles.transitionLeave}
            leaveFrom={styles.transitionLeaveFrom}
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions>
              {filteredManufacturers.length === 0 && query !== "" ? (
                <ComboboxOption
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create "{query}"
                </ComboboxOption>
              ) : (
                filteredManufacturers.map((item) => (
                  <ComboboxOption
                    key={item}
                    className={({ active }) =>
                      classNames(
                        styles.manufacterersCombo,
                        "search-manufacterer__option",
                        `${
                          active ? styles.activeOption : styles.unActiveOption
                        }`
                      )
                    }
                    value={item}
                  >
                    {item}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
