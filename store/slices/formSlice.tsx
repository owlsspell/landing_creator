import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";

export const createFormSlice = (set) => ({
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