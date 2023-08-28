import { produce } from "immer";
import { BackgroundSlice, FontsSlice, FormsSlice, HeroSlice, ImagesSlice, NoticesSlice, SignInSlice, SuccessPageSlice, UpdateStateSlice } from '../types'
import { StateCreator } from "zustand";

export const createUpdateStateSlice: StateCreator<
    FormsSlice & SignInSlice & BackgroundSlice & HeroSlice & FontsSlice & SuccessPageSlice & NoticesSlice & UpdateStateSlice & ImagesSlice,
    [["zustand/devtools", never]],
    [],
    UpdateStateSlice
> = (set) => ({
    updateState: (newState) => set(produce((state) => {
        state.fonts = newState.json.fonts;
        state.backgroundOverlay = newState.json.background.overlay.classes;
        state.submitText = newState.json.form.submit.content;
        state.submitClasses = newState.json.form.submit.classes;
        state.fields = newState.json.form.fields.standard;
        state.signin = newState.json.headings.signin;
        state.heroTitle = newState.json.hero.title;
        state.heroImage = newState.json.hero.image;
        state.heroOverlay = newState.json.hero.overlay.classes;
        state.heroDiv = newState.json.hero.div.classes;
        state.notices = newState.json.notices;
        state.successText = newState.json.headings.success[0].text;
        state.heroImageUrl = newState.background;
        state.logoImage = newState.logo;
    })),
})