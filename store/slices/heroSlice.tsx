import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";
import { BackgroundSlice, FontsSlice, FormsSlice, HeroSlice, NoticesSlice, SignInSlice, SuccessPageSlice, UpdateStateSlice } from '../types'
import { StateCreator } from "zustand";

export const createHeroSlice: StateCreator<
    FormsSlice & SignInSlice & BackgroundSlice & HeroSlice & FontsSlice & SuccessPageSlice & NoticesSlice & UpdateStateSlice,
    [["zustand/devtools", never]],
    [],
    HeroSlice
> = (set) => ({
    heroImageUrl: "",
    updateHeroImage: (content) => set(produce((state) => { state.heroImageUrl = content })),

    heroTitle: defaultValues.hero.title,
    updateHeroTitleText: (content) => set(produce((state) => { state.heroTitle.text = content })),
    updateHeroTitleClasses: (content, field) => set(produce((state) => { state.heroTitle.classes[field] = content })),

    heroImage: defaultValues.hero.image,
    updateHeroImageClasses: (content, field) => set(produce((state) => { state.heroImage.classes[field] = content })),

    heroOverlay: defaultValues.hero.overlay.classes,
    updateHeroOverlay: (content, field) => set(produce((state) => { state.heroOverlay[field] = content })),

    heroDiv: defaultValues.hero.div.classes,
    updateHeroDiv: (content, field) => set(produce((state) => { state.heroDiv[field] = content })),

})