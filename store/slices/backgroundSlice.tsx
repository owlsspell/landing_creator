import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";

export const createBackgroundSlice = (set) => ({
    backgroundOverlay: defaultValues.background.overlay,
    updateBackgroundOverlay: (field, content) => set(produce((state) => { state.backgroundOverlay[field] = content })),
})