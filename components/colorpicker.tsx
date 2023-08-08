import { PortalInputs } from "@/store/types";
import cn from "classnames"
import { ChangeEvent, useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";

interface ColorPickerProps {
    value?: string

    theme?: "dark" | "light"

    setValue: UseFormSetValue<PortalInputs>
}

export const ColorPicker = ({ value = "#000000", theme = "dark", setValue }: ColorPickerProps) => {

    const [color, setColor] = useState(value)

    const [isCopied, setCopied] = useState(false)

    const pickerID = `color-picker_${Date.now()}`

    const classes = {
        base: cn("flex flex-col p-5 rounded-xl", {
            "bg-slate-800": theme === "dark",
            "bg-gray-200": theme === "light",
        }),
        color: cn("w-24 absolute h-20 rounded-xl"),
        backdrop: cn("w-24 blur-md opacity-50 h-20 rounded-xl"),
        button: cn("text-gray-400 mt-4 text-sm w-full border py-2 rounded-xl",
            "transition-colors", {
            "border-gray-400 text-gray-500 hover:border-black hover:text-gray-700 hover:bg-black hover:text-gray-200": theme === "dark",
            "text-gray-400 hover:border-black hover:text-gray-700 hover:bg-white": theme === "light"
        })
    }

    const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
        setValue("form.submit.classes.background", e.target.value)
    }

    const handleCopyToClipBoard = () => {
        navigator.clipboard.writeText(color).then(() => {
            setCopied(true)
        })

        setTimeout(() => setCopied(false), 600)
    }

    useEffect(() => {
        setColor(value);
    }, [value])

    return (
        <section className={classes.base}>
            <input onChange={handleColorChange} type={"color"} id={pickerID} className={"h-0 w-0 opacity-0"} />

            <section className={"relative"}>
                <label htmlFor={pickerID}>
                    <div style={{ backgroundColor: color }} className={classes.color} />
                    <div style={{ backgroundColor: color }} className={classes.backdrop} />
                </label>
            </section>

            <button onClick={handleCopyToClipBoard} className={classes.button}>{isCopied ? "Copied" : color}</button>
        </section>
    )
}