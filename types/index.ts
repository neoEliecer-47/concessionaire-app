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