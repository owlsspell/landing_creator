import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";

export const createFontsSlice = (set) => ({
    fonts: defaultValues.fonts,
    updateFonts: (content, field) => set(produce((state) => { state.fonts[field] = content })),
})