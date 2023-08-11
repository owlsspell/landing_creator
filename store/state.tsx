import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createFormSlice } from "./slices/formSlice"
import { createHeadingsSlice } from './slices/headingSlice'
import { createBackgroundSlice } from './slices/backgroundSlice'
import { createHeroSlice } from './slices/heroSlice'

export const useBoundStore = create((devtools((...a) => ({
    ...createFormSlice(...a),
    ...createHeadingsSlice(...a),
    ...createBackgroundSlice(...a),
    ...createHeroSlice(...a),
}))))


