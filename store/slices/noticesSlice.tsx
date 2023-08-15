import defaultValues from "@/store/defaultslowpokes.json"
import { produce } from "immer";

export const createNoticesSlice = (set) => ({
    notices: defaultValues.notices,

    updateNoticesMessageText: (index, content) => set(produce((state) => { state.notices[index].message.text = content })),
    updateNoticeLink: (index, content) => set(produce((state) => { state.notices[index].link = content })),
    updateNoticeImage: (index, content) => set(produce((state) => { state.notices[index].image.url = content })),

    updateNoticeMessageClasses: (index, field, content) => set(produce((state) => { state.notices[index].message.classes[field] = content })),
    updateNoticeImageClasses: (index, field, content) => set(produce((state) => { state.notices[index].image.classes[field] = content })),
    updateNoticeOverlayClasses: (index, field, content) => set(produce((state) => { state.notices[index].overlay.classes[field] = content })),
})