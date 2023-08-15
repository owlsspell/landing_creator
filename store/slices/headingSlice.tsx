import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";

export const createHeadingsSlice = (set) => ({
    signin: defaultValues.headings.signin,
    // success: defaultValues.headings.success,
    updateSigninText: (content, index) => set(produce((state) => { state.signin[index].text = content })),
    updateSigninClasses: (content, field, index) => set(produce((state) => { state.signin[index].classes[field] = content })),
})