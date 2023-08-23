import { gradientList, opacityList, roundedList } from "@/store/data/overlay";
import {
  aligns,
  fonts,
  sizes,
  weightList,
  trackingList,
  marginList,
} from "./typography";
import { objectPosition } from "./objectposition";
import tailwindColors from "./tailwindcolors";
import { widthList } from "./widthList";

export const allVariables: allVariablesType = {
  align: aligns,
  font: fonts,
  size: sizes,
  color: tailwindColors,
  weight: weightList,
  "margin-top": marginList,
  "margin-bottom": marginList,
  "margin-left": marginList,
  "margin-right": marginList,
  "color-from": tailwindColors,
  "color-to": tailwindColors,
  opacity: opacityList,
  gradient: gradientList,
  rounded: roundedList,
  fit: objectPosition,
  width: widthList,
  background: tailwindColors,
  hover: tailwindColors,
  text: tailwindColors,
  tracking: trackingList,
};

export interface tailwindColorsType {
  monoNames: string[];
  colorNames: string[];
  colorVariants: number[];
}
export interface allVariablesType extends Record<string, any> {
  align: string[];
  font: string[];
  size: string[];
  color: tailwindColorsType;
  weight: string[];
  "margin-top": string[];
  "margin-bottom": string[];
  "margin-left": string[];
  "margin-right": string[];
  "color-from": tailwindColorsType;
  "color-to": tailwindColorsType;
  opacity: string[];
  gradient: string[];
  rounded: string[];
  fit: string[];
  width: string[];
  background: tailwindColorsType;
  hover: tailwindColorsType;
  text: tailwindColorsType;
  tracking: string[];
}

export const exclusionList = [
  "color",
  "color-from",
  "color-to",
  "background",
  "hover",
  "text",
];

export const exclusionListForTypography = [
  "size",
  "align",
  "color",
  "weight",
  "italic",
  "uppercase",
];
