import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";

export const createHeroSlice = (set) => ({
    heroTitle: defaultValues.hero.title,
    updateHeroTitleText: (content) => set(produce((state) => { state.heroTitle.text = content })),
    updateHeroTitleClasses: (field, content) => set(produce((state) => { state.heroTitle.classes[field] = content })),

    heroImage: defaultValues.hero.image,
    updateHeroImageClasses: (field, content) => set(produce((state) => { state.heroImage.classes[field] = content })),

    heroOverlay: defaultValues.hero.overlay.classes,
    updateHeroOverlay: (field, content) => set(produce((state) => { state.heroOverlay[field] = content })),

    heroDiv: defaultValues.hero.div.classes,
    updateHeroDiv: (field, content) => set(produce((state) => { state.heroDiv[field] = content })),

})