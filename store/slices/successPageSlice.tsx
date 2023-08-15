import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";

export const createSuccessPageSlice = (set) => ({
    successText: defaultValues.headings.success[0].text,
    successClasses: defaultValues.headings.success[0].classes,
    updateSuccessText: (content) => set(produce((state) => { state.successText = content })),
    updateSuccessClasses: (field, content) => set(produce((state) => { state.successClasses[field] = content })),
})