import { produce } from "immer";
import { BackgroundSlice, FontsSlice, FormsSlice, HeroSlice, NoticesSlice, SignInSlice, SuccessPageSlice, UpdateStateSlice } from '../types'
import { StateCreator } from "zustand";

export const createUpdateStateSlice: StateCreator<
    FormsSlice & SignInSlice & BackgroundSlice & HeroSlice & FontsSlice & SuccessPageSlice & NoticesSlice & UpdateStateSlice,
    [["zustand/devtools", never]],
    [],
    UpdateStateSlice
> = (set) => ({
    updateState: (newState) => set(produce((state) => {
        state.fonts = newState.fonts;
        state.backgroundOverlay = newState.background.overlay.classes;
        state.submitText = newState.form.submit.content;
        state.submitClasses = newState.form.submit.classes;
        state.fields = newState.form.fields.standard;
        state.signin = newState.headings.signin;
        state.heroTitle = newState.hero.title;
        state.heroImage = newState.hero.image;
        state.heroOverlay = newState.hero.overlay.classes;
        state.heroDiv = newState.hero.div.classes;
        state.notices = newState.notices;
        state.successText = newState.headings.success[0].text;
        state.successClasses = newState.headings.success[0].classes;
    })),
})