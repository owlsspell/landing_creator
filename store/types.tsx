export interface PortalState {
    portals: {
        fonts: Fonts;
        hero: Hero;
        background: Background;
        headings: Headings;
        notices: Notice[];
        form: Form;
    }
    updatePortals: (data: PortalInputs) => void
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

export interface Fonts {
    sans: string;
    serif: string;
}

export interface Form {
    submit: Submit;
    fields: Fields;
}

export interface Fields {
    standard: Standard[];
}

export interface Standard {
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
