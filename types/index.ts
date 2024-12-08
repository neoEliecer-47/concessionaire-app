import { MouseEventHandler } from "react"

export type CustomButtonProps = {
    title: string,
    containerStyles?: string,
    btnType?: "button" | "submit",
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}