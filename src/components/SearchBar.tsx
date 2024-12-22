"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import SearchButton from "./SearchButton";
import Image from "next/image";
import classNames from "classnames";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");
  ``;
  function handleSearch() {}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className={classNames("searchbar__item", "")} style={{}}>
        <Image
          src="/model-icon.png"
          alt="model image icon"
          width={25}
          height={25}
          style={{
            position: "absolute",
           
            marginLeft: "1rem",
            padding: "0",
          }}
        />
        <input
          type="text"
          name="model"
          value={model}
          placeholder="Tiguan"
          className={classNames("searchbar__input", "inputFocus")}
          style={{
            padding: "1rem",
            paddingLeft: "3rem",
            border: "none",
            backgroundColor: "rgba(59, 60, 152, 0.07)",
            borderRadius: "9999px",
          }}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
