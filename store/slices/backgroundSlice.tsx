import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";
import { StateCreator } from "zustand";
import { BackgroundSlice, FontsSlice, FormsSlice, HeroSlice, NoticesSlice, SignInSlice, SuccessPageSlice, UpdateStateSlice } from '../types'

export const createBackgroundSlice: StateCreator<
    FormsSlice & SignInSlice & BackgroundSlice & HeroSlice & FontsSlice & SuccessPageSlice & NoticesSlice & UpdateStateSlice,
    [["zustand/devtools", never]],
    [],
    BackgroundSlice
> = (set) => ({
    logoImage: "",
    updateLogoImage: (content) => set(produce((state) => { state.logoImage = content })),
    backgroundOverlay: defaultValues.background.overlay.classes,
    updateBackgroundOverlay: (content, field) => set(produce((state) => { state.backgroundOverlay[field] = content })),
})