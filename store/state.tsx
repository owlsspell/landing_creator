import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import portals from "@/app/captiveportal/examples/json/slowpokes.json"
import { produce } from 'immer'
import { PortalState } from "./types"

export const usePortalsStore = create<PortalState>((devtools((set) => ({
    portals,
    updatePortals: (data) => set((state) => ({ portals: data }))
}))))


    // updateField: (field, content) => set(produce((state) => { state.portals.form.submit.classes[field] = content })),