/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/prefer-default-export */

'use client';

import tailwindColors from './data/tailwindcolors';

export default function PortalEditor() {
  const handleColorClick = (event, color) => {
    console.log(`clicked on string ${color}`);
  }

  return (
    <>
      <div>Portal Editor</div>
      <div>
        <div className="flex flex-col items-center justify-start">
          <div id="color-swatch-and-class-holder" className="flex flex-row justify-start px-1 py-1 mt-4 border border-gray-500 rounded-md w-28 gap-x-2">
            <div id="current-color-swatch" className="relative w-6 h-6 bg-orange-600 border border-gray-700 shadow-lg cursor-pointer">
              <div className="absolute left-0 w-24 font-thin text-tiny bottom-7">choose color</div>
              <div id="hidden-picker-canvas" className="absolute left-0 h-64 mt-2 overflow-y-scroll border border-gray-300 rounded-md shadow-lg top-4">
                <div id="colors-container" className="flex flex-col items-start p-2 bg-white rounded-md shadow-xs gap-y-1">
                  <div className="flex flex-row justify-start gap-x-0">
                    <button type="button" onClick={(event) => handleColorClick(event, 'white')} value="white" className="w-6 h-6 transition-all duration-100 ease-in-out bg-white border shadow-lg cursor-pointer hover:scale-125 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-white" />
                    <button type="button" onClick={(event) => handleColorClick(event, 'black')} value="black" className="w-6 h-6 transition-all duration-100 ease-in-out bg-black border shadow-lg cursor-pointer hover:scale-125 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  {tailwindColors.colorNames.map((color) => (
                    <div key={color} className="flex flex-row justify-start">{tailwindColors.colorVariants.map((variant) => (
                      <button type="button" onClick={(event) => handleColorClick(event, `${color}-${variant}`)} key={color + variant} value={`${color}-${variant}`} title={`${color}-${variant}`} className={`w-6 h-6 transition-all duration-100 ease-in-out bg-${color}-${variant} border shadow-lg cursor-pointer hover:scale-125 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-${color}-${variant}`} />
                    ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div id="current-color-class">red-700</div>
          </div>
        </div>
      </div>
    </>
  );
}
