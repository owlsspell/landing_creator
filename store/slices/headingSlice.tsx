import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";

export const createHeadingsSlice = (set) => ({
    signin: defaultValues.headings.signin,
    // success: defaultValues.headings.success,
    updateSigninText: (index, content) => set(produce((state) => { state.signin[index].text = content })),
    updateSigninClasses: (index, field, content) => set(produce((state) => { state.signin[index].classes[field] = content })),
})