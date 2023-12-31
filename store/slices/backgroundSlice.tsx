import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";
import { StateCreator } from "zustand";
import { BackgroundSlice, FontsSlice, FormsSlice, HeroSlice, ImagesSlice, NoticesSlice, SignInSlice, SuccessPageSlice, UpdateStateSlice } from '../types'

export const createBackgroundSlice: StateCreator<
    FormsSlice & SignInSlice & BackgroundSlice & HeroSlice & FontsSlice & SuccessPageSlice & NoticesSlice & UpdateStateSlice & ImagesSlice,
    [["zustand/devtools", never]],
    [],
    BackgroundSlice
> = (set) => ({
    backgroundOverlay: defaultValues.background.overlay.classes,
    updateBackgroundOverlay: (content, field) => set(produce((state) => { state.backgroundOverlay[field] = content })),
})