/* eslint-disable no-unused-vars */

export interface UpdateStateSlice {
    updateState: (newState: PortalInputs) => void;
}
export interface Statetype {
    backgroundOverlay: OverlayClasses
    fonts: Fonts,
    submitText: string;
    submitClasses: SubmitClasses;
    fields: Fields[];
    signin: Title[];
    heroTitle: Title;
    heroImage: HeroImage;
    heroOverlay: OverlayClasses;
    heroDiv: DivClasses;
    notices: Notice[]
    successText: String;
    successClasses: TitleClasses;
}
export interface PortalInputs {
    fonts: Fonts;
    hero: Hero;
    background: Background;
    headings: Headings;
    notices: Notice[];
    form: Form;
}

export interface Background {
    overlay: Overlay;
}
export interface BackgroundSlice {
    logoImage: string
    updateLogoImage: (content: string) => void;
    backgroundOverlay: OverlayClasses
    updateBackgroundOverlay: (content: string, field: string) => void;
}
export interface Overlay {
    classes: OverlayClasses;
}

export interface OverlayClasses {
    "color-from": string;
    "color-to": string;
    opacity: string;
    gradient: string;
    rounded?: string;
}

export interface FontsSlice {
    fonts: Fonts,
    updateFonts: (content: string, field: string) => void;
}
export interface Fonts {
    sans: string;
    serif: string;
}
export interface FormsSlice {
    submitText: string;
    submitClasses: SubmitClasses;
    updateSubmitContent: (content: string) => void;
    updateSubmitClasses: (value: string, field: string) => void;
    fields: Fields[];
    updateFields: (field: string, index: number, value: string) => void;
}

export interface Form {
    submit: Submit;
    fields: { standard: Fields[] };
}

export interface Fields {
    name: string;
    label: string;
    value: string;
    placeholder: string;
}

export interface Submit {
    content: string;
    classes: SubmitClasses;
}

export interface SubmitClasses {
    text: string;
    background: string;
    hover: string;
}

export interface SignInSlice {
    signin: Title[]
    updateSigninText: (content: string, index: number) => void;
    updateSigninClasses: (content: string, field: string, index: number) => void;
}


export interface Headings {
    signin: Title[];
    success: Title[];
}

export interface Title {
    text: string;
    classes: TitleClasses;
}

export interface TitleClasses {
    font: string;
    size: string;
    color: string;
    weight: string;
    align: string;
    tracking?: string;
    "margin-top"?: string;
    "margin-bottom"?: string;
}

export interface SuccessPageSlice {
    successText: String;
    successClasses: TitleClasses;
    updateSuccessText: (content: string) => void;
    updateSuccessClasses: (content: string, field: string) => void;
}
export interface HeroSlice {
    heroImageUrl: string;
    updateHeroImage: (content: string) => void;
    heroTitle: Title;
    updateHeroTitleText: (content: string) => void;
    updateHeroTitleClasses: (content: string, field: string) => void;
    heroImage: HeroImage;
    updateHeroImageClasses: (content: string, field: string) => void;
    heroOverlay: OverlayClasses;
    updateHeroOverlay: (content: string, field: string) => void;
    heroDiv: DivClasses;
    updateHeroDiv: (content: string, field: string) => void;
}
export interface Hero {
    title: Title;
    image: HeroImage;
    overlay: Overlay;
    div: Div;
}

export interface Div {
    classes: DivClasses;
}

export interface DivClasses {
    width: string;
}

export interface HeroImage {
    classes: ImageClasses;
}

export interface ImageClasses {
    fit: string;
}
export interface NoticesSlice {
    notices: Notice[]
    updateNoticesMessageText: (content: string, index: number) => void;
    updateNoticeLink: (content: string, index: number) => void;
    updateNoticeImage: (content: string, index: number) => void;
    updateNoticeMessageClasses: (content: string, field: string, index: number) => void;
    updateNoticeImageClasses: (content: string, field: string, index: number) => void;
    updateNoticeOverlayClasses: (content: string, field: string, index: number) => void;
}
export interface Notice {
    message: Title;
    link: string;
    image: NoticeImage;
    overlay: Overlay;
}

export interface NoticeImage {
    url: string;
    classes: ImageClasses;
}
