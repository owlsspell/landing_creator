import HeroSection from "@/components/captiveportal/herosection";
import { getClassNames } from "@/handler/handler";
import { useBoundStore } from "@/store/state";
import { useMemo } from "react";

export default function SamplePortal() {
  const fonts = useBoundStore((state) => state.fonts)

  const successText = useBoundStore((state) => state.successText);
  const successClasses = useBoundStore((state) => state.successClasses);
  const successStyle = useMemo(() => getClassNames(successClasses), [successClasses])

  const notices = useBoundStore((state) => state.notices);
  const classesText1 = useMemo(() => getClassNames(notices[0].message.classes), [notices[0].message.classes])
  const classesText2 = useMemo(() => getClassNames(notices[1].message.classes), [notices[1].message.classes])
  const classesText3 = useMemo(() => getClassNames(notices[2].message.classes), [notices[2].message.classes])

  const overlayClasses1 = useMemo(() => getClassNames(notices[0].overlay.classes), [notices[0].overlay.classes])
  const overlayClasses2 = useMemo(() => getClassNames(notices[1].overlay.classes), [notices[1].overlay.classes])
  const overlayClasses3 = useMemo(() => getClassNames(notices[2].overlay.classes), [notices[2].overlay.classes])

  const imageClasses1 = useMemo(() => getClassNames(notices[0].image.classes), [notices[0].image.classes])
  const imageClasses2 = useMemo(() => getClassNames(notices[1].image.classes), [notices[1].image.classes])
  const imageClasses3 = useMemo(() => getClassNames(notices[2].image.classes), [notices[2].image.classes])

  const classesText = [classesText1, classesText2, classesText3]
  const overlayClasses = [overlayClasses1, overlayClasses2, overlayClasses3]
  const imageClasses = [imageClasses1, imageClasses2, imageClasses3]

  const generateFontStyle = (font: String) => (font !== undefined ? {
    fontFamily: font === 'sans' ? fonts.sans : fonts.serif
  } : "")

  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-gray-400 sm:flex-row">

        <HeroSection />

        <div
          className="z-20 flex flex-col justify-center pb-0 my-0 mb-0 bg-transparent sm:flex-1 sm:pt-2 sm:px-2 lg:flex-none lg:px-20 xl:px-24"
        >
          <div className="w-full h-auto px-6 py-6 mx-auto bg-white sm:shadow-2xl sm:w-96 sm:rounded-2xl">

            <div>
              <p className={successStyle} style={generateFontStyle(successClasses.font) || undefined}>
                {successText}
              </p>
            </div>
            <div className="flex flex-col p-2 mt-2 h-80">
              {notices.map((notice, index) =>
                <div key={index} className="relative flex flex-col justify-center w-full mt-4 overflow-hidden rounded-lg shadow-2xl h-1/3">
                  <p className={"z-30 px-4 " + (classesText[index])} style={generateFontStyle(notice.message.classes.font) || undefined}>

                    {notice.message.text}
                  </p>
                  <img
                    className={"absolute z-10 object-cover w-full h-full " + imageClasses[index]}
                    src={process.env.NEXT_PUBLIC_ENDPOINT + "/" + notice.image.url}
                    alt="notice"
                  // src={"http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/" + notice.image.url}
                  />
                  <div className={"absolute inset-0 z-20 w-full h-full " + overlayClasses[index]} />
                  <a
                    className="absolute inset-0 z-40 w-full h-full bg-transparent"
                    href={notice.link}
                  />
                </div>)}
            </div>
            <a href="https://gogoguest.com">
              <img
                className="z-10 w-2/3 mx-auto mt-12 mb-2"
                src="http://splash3.gogoguest.com/captiveportal/images/poweredby.svg"
                alt="Powered By GoGoGuest"
              />
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
