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

export const allVariables = {
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

export const exclusionList = [
  "color",
  "color-from",
  "color-to",
  "background",
  "hover",
  "text",
];
