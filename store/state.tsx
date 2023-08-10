import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from 'immer'
import { PortalState } from "./types"

export const usePortalsStore = create<PortalState>((devtools((set) => ({
    portals: defaultValues,
    formProps: defaultValues.form.submit,
    titlesProps: defaultValues.headings.signin,
    updatePortals: (data) => set((state) => ({ portals: data })),
    updateFormProps: (field, content) => set(produce((state) => { state.formProps.classes[field] = content })),
    updateTitleProps: (index, field, content) => set(produce((state) => { state.titlesProps[index].classes[field] = content })),
    // updateField: (field, content) => set(produce((state) => { state.portals.form.submit.classes[field] = content })),

}))))

