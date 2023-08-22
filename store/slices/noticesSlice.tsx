import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";
import { BackgroundSlice, FontsSlice, FormsSlice, HeroSlice, NoticesSlice, SignInSlice, SuccessPageSlice, UpdateStateSlice } from '../types'
import { StateCreator } from "zustand";

export const createNoticesSlice: StateCreator<
    FormsSlice & SignInSlice & BackgroundSlice & HeroSlice & FontsSlice & SuccessPageSlice & NoticesSlice & UpdateStateSlice,
    [["zustand/devtools", never]],
    [],
    NoticesSlice
> = (set) => ({
    notices: defaultValues.notices,

    updateNoticesMessageText: (content, index) => set(produce((state) => { state.notices[index].message.text = content })),
    updateNoticeLink: (content, index) => set(produce((state) => { state.notices[index].link = content })),
    updateNoticeImage: (content, index) => set(produce((state) => { state.notices[index].image.url = content })),

    updateNoticeMessageClasses: (content, field, index) => set(produce((state) => { state.notices[index].message.classes[field] = content })),
    updateNoticeImageClasses: (content, field, index) => set(produce((state) => { state.notices[index].image.classes[field] = content })),
    updateNoticeOverlayClasses: (content, field, index) => set(produce((state) => { state.notices[index].overlay.classes[field] = content })),
})