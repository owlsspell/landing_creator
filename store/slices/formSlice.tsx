import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";
import { StateCreator } from "zustand";
import { BackgroundSlice, FontsSlice, FormsSlice, HeroSlice, NoticesSlice, SignInSlice, SuccessPageSlice } from '../types'

export const createFormSlice: StateCreator<
    FormsSlice & SignInSlice & BackgroundSlice & HeroSlice & FontsSlice & SuccessPageSlice & NoticesSlice,
    [["zustand/devtools", never]],
    [],
    FormsSlice
> = (set) => ({
    submitText: defaultValues.form.submit.content,
    submitClasses: defaultValues.form.submit.classes,
    updateSubmitContent: (content) => set(produce((state) => {
        state.submitText = content
    })),
    updateSubmitClasses: (value, field) => set(produce((state) => {
        state.submitClasses[field] = value
    })),

    fields: defaultValues.form.fields.standard,
    updateFields: (field, index, value) => set(produce((state) => {
        state.fields[index][field] = value
    })),
})