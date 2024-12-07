import { MouseEventHandler } from "react"

export type CustomButtonProps = {
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}