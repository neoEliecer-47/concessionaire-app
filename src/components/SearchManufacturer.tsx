'use client'

import { SearchManufacturerProps } from "../../types"
import { Combobox, Transition, ComboboxButton, ComboboxInput } from "@headlessui/react"
import Image from "next/image"


const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div style={{ position: 'relative', width: '100%' }}>
          <Combobox.Button style={{ position: 'absolute', top: '14px', left: '10px', border: 'none' }}>
            <Image src='/car-logo.svg' alt="car logo" width={20} height={20}/>
          </Combobox.Button>
          <ComboboxInput className='search-manufacturer__input' placeholder="Volkswagen" style={{ paddingLeft: '2.5rem' }}/>

          
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer