import {HTMLProps} from "react";
import "./styles.css"

interface ButtonProps extends HTMLProps<HTMLButtonElement> {

}

export const Button = ({children}: ButtonProps) => {
    return (
        <button className="text-red-500">{children}</button>
    )
}
