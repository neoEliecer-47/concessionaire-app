"use client";

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import SearchButton from "./SearchButton";
import Image from "next/image";
import classNames from "classnames";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (manufacturer === "" || model === "")
      return alert("Please fill in all fields");
    updateSearchParams(
      model.toLocaleLowerCase(),
      manufacturer.toLocaleLowerCase()
    );
  }

  function updateSearchParams(model: string, manufacturer: string) {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname, { scroll: false });
    //return searchParams.toString();
  }

  return (
    <form
      className="searchbar"
      onSubmit={handleSearch}
      style={{ gap: "0.3rem" }}
    >
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
      <div className={classNames("searchbar__item", "")}>
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
            width: "100%",
          }}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
