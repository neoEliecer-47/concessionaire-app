"use client"

import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState<string>('')
    function handleSearch (){}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar