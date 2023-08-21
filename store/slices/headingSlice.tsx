import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";
import { BackgroundSlice, FontsSlice, FormsSlice, HeroSlice, NoticesSlice, SignInSlice, SuccessPageSlice } from '../types'
import { StateCreator } from "zustand";

export const createHeadingsSlice: StateCreator<
    FormsSlice & SignInSlice & BackgroundSlice & HeroSlice & FontsSlice & SuccessPageSlice & NoticesSlice,
    [["zustand/devtools", never]],
    [],
    SignInSlice
> = (set) => ({
    signin: defaultValues.headings.signin,
    // success: defaultValues.headings.success,
    updateSigninText: (content, index) => set(produce((state) => { state.signin[index].text = content })),
    updateSigninClasses: (content, field, index) => set(produce((state) => { state.signin[index].classes[field] = content })),
})