import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";
import { StateCreator } from "zustand";
import { BackgroundSlice, FontsSlice, FormsSlice, HeroSlice, ImagesSlice, NoticesSlice, SignInSlice, SuccessPageSlice, UpdateStateSlice } from '../types'

export const createSuccessPageSlice: StateCreator<
    FormsSlice & SignInSlice & BackgroundSlice & HeroSlice & FontsSlice & SuccessPageSlice & NoticesSlice & UpdateStateSlice & ImagesSlice,
    [["zustand/devtools", never]],
    [],
    SuccessPageSlice
> = (set) => ({
    successText: defaultValues.headings.success[0].text,
    successClasses: defaultValues.headings.success[0].classes,
    updateSuccessText: (content) => set(produce((state) => { state.successText = content })),
    updateSuccessClasses: (content, field) => set(produce((state) => { state.successClasses[field] = content })),
})