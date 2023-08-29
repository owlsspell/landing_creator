import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createFormSlice } from "./slices/formSlice"
import { createHeadingsSlice } from './slices/headingSlice'
import { createBackgroundSlice } from './slices/backgroundSlice'
import { createHeroSlice } from './slices/heroSlice'
import { createFontsSlice } from './slices/fontSlice'
import { createSuccessPageSlice } from './slices/successPageSlice'
import { createNoticesSlice } from './slices/noticesSlice'
import { BackgroundSlice, FontsSlice, FormsSlice, HeroSlice, ImagesSlice, NoticesSlice, SignInSlice, SuccessPageSlice, UpdateStateSlice } from './types'
import { createUpdateStateSlice } from './slices/updateStateSlice'
import { createImagesSlice } from './slices/imagesSlice'

export const useBoundStore = create<FormsSlice & SignInSlice & BackgroundSlice & HeroSlice & FontsSlice & SuccessPageSlice & NoticesSlice & UpdateStateSlice & ImagesSlice>()(devtools((...a) => ({
    ...createFormSlice(...a),
    ...createHeadingsSlice(...a),
    ...createBackgroundSlice(...a),
    ...createHeroSlice(...a),
    ...createFontsSlice(...a),
    ...createSuccessPageSlice(...a),
    ...createNoticesSlice(...a),
    ...createUpdateStateSlice(...a),
    ...createImagesSlice(...a),
})))


