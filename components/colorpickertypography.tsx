'use client';

import tailwindColors from "@/store/data/tailwindcolors";
import { useState } from "react";
import { Label } from "./ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { FontColor } from "./icons";
import { ChevronsUpDown } from "lucide-react";

interface ColorPickerProps {
    label?: string
    value?: string
    // eslint-disable-next-line no-unused-vars
    setStateValue: (val: string) => any
}

export const ColorPickerTypography = ({ label, value, setStateValue }: ColorPickerProps) => {

    const [color, setColor] = useState(value)

    const handleColorClick = (event: any) => {
        setColor(event?.target?.value);
        setStateValue(event?.target?.value)
    };

    return (
        <Popover>
            <div className="flex flex-col items-start justify-start">
                {label ? <Label className="mb-2">{label}</Label> : label}
                <div id="color-swatch-and-class-holder" className="flex flex-row justify-start px-1 py-1 border-1 rounded-md bg-white min-w-fit gap-x-2">
                    <PopoverTrigger>
                        <div id="current-color-swatch" >
                            <div className="flex">
                                <FontColor color={color} />
                                <ChevronsUpDown className="ml-1 h-3 w-3 shrink-0 opacity-50" />
                            </div>
                            <PopoverContent className="p-0">
                                <div id="hidden-picker-canvas" className={` h-64 mt-2 overflow-y-scroll rounded-md shadow-lg z-10`}>
                                    <div id="colors-container" className="flex flex-col items-start p-2 bg-white rounded-md shadow-xs gap-y-1">
                                        <div className="flex flex-row justify-start gap-x-0">
                                            <button type="button" onClick={handleColorClick} value="white" className="w-6 h-6 transition-all duration-100 ease-in-out bg-white border shadow-lg cursor-pointer hover:scale-125 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-white" />
                                            <button type="button" onClick={handleColorClick} value="black" className="w-6 h-6 transition-all duration-100 ease-in-out bg-black border shadow-lg cursor-pointer hover:scale-125 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black" />
                                        </div>
                                        {tailwindColors.colorNames.map((colorName) => (
                                            <div key={colorName} className="flex flex-row justify-start">{tailwindColors.colorVariants.map((variant) => (
                                                <button type="button" onClick={handleColorClick} key={colorName + variant} value={`${colorName}-${variant}`} title={`${colorName}-${variant}`} className={`w-6 h-6 transition-all duration-100 ease-in-out bg-${colorName}-${variant} border shadow-lg cursor-pointer hover:scale-125 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-${color}-${variant}`} />
                                            ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </PopoverContent>
                        </div>
                    </PopoverTrigger>

                </div>
            </div >
        </Popover >
    )
}