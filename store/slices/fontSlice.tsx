import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";
import { BackgroundSlice, FontsSlice, FormsSlice, HeroSlice, NoticesSlice, SignInSlice, SuccessPageSlice } from '../types'
import { StateCreator } from "zustand";

export const createFontsSlice: StateCreator<
    FormsSlice & SignInSlice & BackgroundSlice & HeroSlice & FontsSlice & SuccessPageSlice & NoticesSlice,
    [["zustand/devtools", never]],
    [],
    FontsSlice
> = (set) => ({
    fonts: defaultValues.fonts,
    updateFonts: (content, field) => set(produce((state) => { state.fonts[field] = content })),
})