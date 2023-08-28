import { produce } from "immer";
import { BackgroundSlice, FontsSlice, FormsSlice, HeroSlice, ImagesSlice, NoticesSlice, SignInSlice, SuccessPageSlice, UpdateStateSlice } from '../types'
import { StateCreator } from "zustand";

export const createImagesSlice: StateCreator<
FormsSlice & SignInSlice & BackgroundSlice & HeroSlice & FontsSlice & SuccessPageSlice & NoticesSlice & UpdateStateSlice & ImagesSlice,
[["zustand/devtools", never]],
    [],
    ImagesSlice
> = (set) => ({
    heroImageUrl: "",
    updateHeroImage: (content) => set(produce((state) => { state.heroImageUrl = content })),
    logoImage: "",
    updateLogoImage: (content) => set(produce((state) => { state.logoImage = content })),
})