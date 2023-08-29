import { getClassNames } from "@/handler/handler";
import { useBoundStore } from "@/store/state";
import { useMemo } from "react";

export default function HeroSection() {
    const fonts = useBoundStore((state) => state.fonts)

    const overlay = useBoundStore((state) => state.backgroundOverlay);
    const backgroundClasses = useMemo(() => getClassNames(overlay), [overlay])

    const heroTitle = useBoundStore((state) => state.heroTitle);
    const heroImage = useBoundStore((state) => state.heroImage);
    const heroOverlay = useBoundStore((state) => state.heroOverlay);
    const heroDiv = useBoundStore((state) => state.heroDiv);

    const heroTextClasses = useMemo(() => getClassNames(heroTitle.classes), [heroTitle.classes])
    const heroImageClasses = useMemo(() => getClassNames(heroImage.classes), [heroImage.classes])
    const heroOverlayClasses = useMemo(() => getClassNames(heroOverlay), [heroOverlay])
    const heroDivClasses = useMemo(() => getClassNames(heroDiv), [heroDiv])

    const logoImage = useBoundStore((state) => state.logoImage);
    const heroImageUrl = useBoundStore((state) => state.heroImageUrl);

    const getDivWidth = useMemo(() => `md-portal:${heroDivClasses}`, [heroDivClasses])

    const generateFontStyle = (font: String) => (font !== undefined ? {
        fontFamily: font === 'sans' ? fonts.sans : fonts.serif
    } : "")

    return <>
        <img className={"absolute inset-0 z-10 hidden object-cover object-top w-full h-full sm:block overflow-visible " + heroImageClasses} src={heroImageUrl ? process.env.NEXT_PUBLIC_ENDPOINT + "/" + heroImageUrl : "http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/hero.jpg"} alt="" />
        <div className={"absolute inset-0 z-10 hidden object-cover w-full h-full sm:block overflow-visible " + backgroundClasses}>
        </div>


        <div className="relative flex flex-col justify-center h-56 overflow-hidden border xl:flex-1 xl:h-auto lg:w-95">



            <img className={"absolute inset-0 block object-cover w-full h-56 sm:hidden " + heroImageClasses} src={heroImageUrl ? process.env.NEXT_PUBLIC_ENDPOINT + "/" + heroImageUrl : "http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/hero.jpg"} alt="" />
            <div className={"absolute inset-0 block object-cover w-full h-56 sm:hidden " + backgroundClasses}
            />

            <div className={"relative w-full h-auto p-8 mx-auto " + getDivWidth}>
                {/* <div className={"relative w-full h-auto p-8 mx-auto " + 'md-portal:' + heroDivClasses}> */}
                <div className={"absolute inset-0 z-20 w-full h-full " + heroOverlayClasses}>
                </div>
                {/* <img
            className="absolute inset-0 block object-cover object-top w-full h-56 sm:hidden "
            src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/hero.jpg" alt="hero"
          />
          <div
            className="absolute inset-0 block object-cover w-full h-56 sm:hidden from-transparent to-black opacity-90 bg-gradient-to-b "
          />

          <div className="relative w-full h-auto p-8 mx-auto md:w-96 ">
            <div
              className="absolute inset-0 z-20 w-full h-full sm:rounded-2xl from-white to-white opacity-90 bg-gradient-to-b rounded-2xl "
            /> */}
                <div className="flex flex-col justify-center">
                    <img className="z-20 mx-auto max-h-32" src={logoImage ? process.env.NEXT_PUBLIC_ENDPOINT + "/" + logoImage : "http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/logo.png"} />
                    <h2 className={"z-20 " + heroTextClasses}
                        style={generateFontStyle(heroTitle.classes.font) || undefined}
                    >{heroTitle.text}
                    </h2>
                </div>
            </div>
        </div>
    </>
}