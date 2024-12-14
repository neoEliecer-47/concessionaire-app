import { MouseEventHandler } from "react"
import { manufacturers } from "../constants";

export type CustomButtonProps = {
    title: string,
    containerStyles?: string,
    btnType?: "button" | "submit",
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export type CustomFilterProps = {
    title: string
}

export type SearchManufacturerProps = {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void
}

export type CarProps = {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}

// export type CarCardProps = {
//     car: CarProps;
//   };