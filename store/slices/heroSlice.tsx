import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";

export const createHeroSlice = (set) => ({
    heroTitle: defaultValues.background.hero.title,
    heroImage: defaultValues.background.hero.image,
    heroОverlay: defaultValues.background.hero.overlay,
    // updateBackgroundOverlay: (field, content) => set(produce((state) => { state.backgroundOverlay[field] = content })),
})