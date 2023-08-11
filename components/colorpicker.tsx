'use client';

import tailwindColors from "@/store/data/tailwindcolors";
import { useState } from "react";
import { Label } from "./ui/label";

interface ColorPickerProps {
    label?: string
    value?: string
    setStateValue: (val: string) => any
}

export const ColorPicker = ({ label, value, setStateValue }: ColorPickerProps) => {

    const [color, setColor] = useState(value)

    const [hidePalette, togglePalette] = useState(true);

    const handleColorClick = (event) => {
        setColor(event?.target?.value);
        setStateValue(event?.target?.value)
    };

    return (
        <div className="flex flex-col items-start justify-start">
            {label ? <Label className="mb-2">{label}</Label> : label}
            <div id="color-swatch-and-class-holder" className="flex flex-row justify-start px-1 py-1 border-2 rounded-md shadow-md min-w-fit w-28 gap-x-2">
                <div id="current-color-swatch" onClick={() => togglePalette(!hidePalette)} className={`relative w-6 h-6 shrink-0 bg-${color} border border-gray-700 shadow-lg cursor-pointer`}>

                    <div id="hidden-picker-canvas" className={`${hidePalette ? 'hidden' : 'inline'} absolute left-0 h-64 mt-2 overflow-y-scroll border border-gray-300 rounded-md shadow-lg top-4 z-10`}>
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
                </div>
                <div id="current-color-class">{color}</div>
            </div>
        </div>
    )
}