'use client'

import { SearchManufacturerProps } from "../../types"
import { Combobox, Transition, ComboboxButton, ComboboxInput } from "@headlessui/react"
import Image from "next/image"


const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div style={{ position: 'relative', width: '100%' }}>
          <ComboboxButton style={{ position: 'absolute', top: '15px', left: '15px', border: 'none', padding: '0' }}>
            <Image src='/car-logo.svg' alt="car logo" width={25} height={25} style={{ padding: '0' }}/>
          </ComboboxButton>
          <ComboboxInput className='search-manufacturer__input' placeholder="Volkswagen" style={{ paddingLeft: '2.5rem' }}/>

          
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer