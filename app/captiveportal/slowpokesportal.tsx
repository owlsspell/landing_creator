import { getClassNames } from "@/handler/handler";
import { useBoundStore } from "@/store/state";
import { useEffect, useMemo, useState } from 'react';

export default function SamplePortal() {
  const heroTitle = useBoundStore((state) => state.heroTitle);
  const heroImage = useBoundStore((state) => state.heroImage);
  const heroOverlay = useBoundStore((state) => state.heroOverlay);
  const heroDiv = useBoundStore((state) => state.heroDiv);
  const overlay = useBoundStore((state) => state.backgroundOverlay);
  const submitText = useBoundStore((state) => state.submitText);
  const submitStyle = useBoundStore((state) => state.submitClasses);
  const fields = useBoundStore((state) => state.fields);
  const signin = useBoundStore((state) => state.signin)

  const [hover, setHover] = useState(`bg-${submitStyle.background}`)
  useEffect(() => {
    setHover(`bg-${submitStyle.background}`)
  }, [submitStyle.background])

  const submitClasses = useMemo(() => getClassNames(submitStyle), [submitStyle])

  const backgroundClasses = useMemo(() => getClassNames(overlay), [overlay])

  const heroTextClasses = useMemo(() => getClassNames(heroTitle.classes), [heroTitle.classes])

  const heroImageClasses = useMemo(() => getClassNames(heroImage.classes), [heroImage.classes])

  const heroOverlayClasses = useMemo(() => getClassNames(heroOverlay), [heroOverlay])

  const heroDivClasses = useMemo(() => getClassNames(heroDiv), [heroDiv])

  const classesTitle1 = useMemo(() => getClassNames(signin[0].classes), [signin[0].classes])
  const classesTitle2 = useMemo(() => getClassNames(signin[1].classes), [signin[1].classes])
  const classesTitle3 = useMemo(() => getClassNames(signin[2].classes), [signin[2].classes])


  return (
    <div>
      <div className="relative flex flex-col min-h-screen bg-gray-400 sm:flex-row">
        <img className={"absolute inset-0 z-10 hidden object-cover object-top w-full h-full sm:block " + heroImageClasses} src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/hero.jpg" alt="" />
        <div className={"absolute inset-0 z-10 hidden object-cover w-full h-full sm:block " + backgroundClasses}>
        </div>

        <div className="relative flex flex-col justify-center h-56 overflow-hidden border sm:flex-1 sm:h-auto">

          <img className={"absolute inset-0 block object-cover w-full h-56 sm:hidden " + heroImageClasses} src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/hero.jpg" alt="" />
          <div className={"absolute inset-0 block object-cover w-full h-56 sm:hidden " + backgroundClasses}>
          </div>

          <div className={"relative w-full h-auto p-8 mx-auto " + heroDivClasses}>
            <div className={"absolute inset-0 z-20 w-full h-full " + heroOverlayClasses}>
            </div>
            <div className="flex flex-col justify-center">
              <img className="z-20 mx-auto max-h-32" src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/logo.png" />
              <h2 className={"z-20 " + heroTextClasses}>{heroTitle.text}
              </h2>
            </div>
          </div>
        </div>


        <div
          className="z-20 flex flex-col justify-center pb-0 my-0 mb-0 bg-transparent sm:flex-1 sm:pt-2 sm:px-2 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full h-auto px-6 py-6 mx-auto bg-white sm:shadow-2xl sm:w-96 sm:rounded-2xl">

            <TitleText key={signin[0].text} text={signin[0].text} classes={classesTitle1} />
            <TitleText key={signin[1].text} text={signin[1].text} classes={classesTitle2} />
            <TitleText key={signin[2].text} text={signin[2].text} classes={classesTitle3} />

            <div className="mt-6">
              <form name="submit" id="submit" action="#" method="POST" className="space-y-6">
                <div className="flex flex-col gap-4">
                  <label className="block" key={fields[0].name}>
                    <span className="font-sans text-gray-700">{fields[0].label}</span>
                    <input type="text" name={fields[0].name} id={fields[0].name}
                      className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 "
                      placeholder={fields[0].placeholder}
                    />
                  </label>
                  <label className="block" key={fields[1].name}>
                    <span className="font-sans text-gray-700">{fields[1].label}</span>
                    <input type="text" name={fields[1].name} id={fields[1].name}
                      className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 "
                      placeholder={fields[1].placeholder}
                    />
                  </label>
                  <div className="flex flex-row gap-4" >
                    <label className="block" key={fields[2].name}>
                      <span className="font-sans text-gray-700">{fields[2].label}</span>
                      <input type="text" name={fields[2].name}
                        className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 "
                        placeholder={fields[2].placeholder} />
                    </label>
                    <label className="block" key={fields[3].name}>
                      <span className="font-sans text-gray-700">{fields[3].label}</span>
                      <input type="text" name={fields[3].name}
                        className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 "
                        placeholder={fields[3].placeholder} />
                    </label>
                  </div>
                  <input type="submit" value={submitText} className={`px-4 py-2 my-2 font-sans font-bold rounded cursor-pointer  ${submitClasses} ${hover}`}
                    onMouseEnter={() => setHover('bg-' + submitStyle.hover)}
                    onMouseLeave={() => setHover(`bg-${submitStyle.background}`)}
                  />
                  {/* <input type="submit" value="SIGN IN" class="px-4 py-2 my-2 font-sans font-bold text-white bg-green-900 rounded cursor-pointer hover:bg-green-700 " /> */}
                </div>
              </form>
            </div>
            <a href="https://gogoguest.com">
              <img className="z-10 w-2/3 mx-auto mt-12 mb-2" src="http://splash3.gogoguest.com/captiveportal/images/poweredby.svg"
                alt="Powered By GoGoGuest" />
            </a>
          </div>
        </div>

      </div >

    </div >
  );
}


const TitleText = ({ text, classes }) =>
  <p className={classes} key={text}>
    {text}
  </p>
