import { classesNames } from "@/store/data/classesnames";

export const getClassNames = (classesObj) =>
  Object.keys(classesObj)
    .map((key) =>
      classesObj[key] === undefined ? "" : classesNames[key] + classesObj[key]
    )
    .filter((item) => item.length > 0)
    .join(" ");
