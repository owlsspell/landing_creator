import HeroSection from "@/components/captiveportal/herosection";
import { getClassNames } from "@/handler/handler";
import { useBoundStore } from "@/store/state";
import { useEffect, useMemo, useState } from 'react';

export default function SamplePortal() {
  const submitText = useBoundStore((state) => state.submitText);
  const submitStyle = useBoundStore((state) => state.submitClasses);
  const fields = useBoundStore((state) => state.fields);
  const signin = useBoundStore((state) => state.signin)
  const fonts = useBoundStore((state) => state.fonts)

  const [hover, setHover] = useState(`bg-${submitStyle.background}`)
  useEffect(() => {
    setHover(`bg-${submitStyle.background}`)
  }, [submitStyle.background])

  const submitClasses = useMemo(() => getClassNames(submitStyle), [submitStyle])

  const classesTitle1 = useMemo(() => getClassNames(signin[0].classes), [signin[0].classes])
  const classesTitle2 = useMemo(() => getClassNames(signin[1].classes), [signin[1].classes])
  const classesTitle3 = useMemo(() => getClassNames(signin[2].classes), [signin[2].classes])


  return (
    <>
      <div className="relative flex xl:flex-row flex-col min-h-screen bg-gray-400 max-w-full xl:max-w-[calc(100vw-24rem)] ">
        <HeroSection />
        <div
          className="z-20 flex flex-col justify-center pb-0 my-0 mb-0 bg-transparent sm:flex-1 sm:pt-2  md:flex-none xl:px-2 sm-portal:px-0 lg-portal:px-20 ">
          <div className="w-full h-auto px-6 py-6 mx-auto bg-white xl:shadow-2xl xl:w-96 xl:rounded-2xl">

            <TitleText key={signin[0].text} text={signin[0].text} classes={classesTitle1} font={signin[0].classes.font} />
            <TitleText key={signin[1].text} text={signin[1].text} classes={classesTitle2} font={signin[1].classes.font} />
            <TitleText key={signin[2].text} text={signin[2].text} classes={classesTitle3} font={signin[2].classes.font} />

            <div className="mt-6">
              <form name="submit" id="submit" action="#" method="POST" className="space-y-6">
                <div className="flex flex-col gap-4">
                  <label className="block" key={fields[0].name}>
                    <span className="font-sans text-gray-700 flex" style={{ fontFamily: fonts.sans }}>{fields[0].label}</span>
                    <input type="text" name={fields[0].name} id={fields[0].name}
                      className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 py-2 px-3 "
                      placeholder={fields[0].placeholder}
                      style={{ fontFamily: fonts.sans }}
                    />
                  </label>
                  <label className="block" key={fields[1].name}>
                    <span className="font-sans text-gray-700 flex" style={{ fontFamily: fonts.sans }}>{fields[1].label}</span>
                    <input type="text" name={fields[1].name} id={fields[1].name}
                      className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 py-2 px-3 "
                      placeholder={fields[1].placeholder}
                      style={{ fontFamily: fonts.sans }}
                    />
                  </label>
                  <div className={(fields[2].label === null || fields[3].label === null) ? "block" : "flex flex-row gap-4"} >
                    {fields[2].label !== null && <label className="block mt-auto mb-0" key={fields[2].name}>
                      <span className="font-sans text-gray-700 flex" style={{ fontFamily: fonts.sans }}>{fields[2].label}</span>
                      <input type="text" name={fields[2].name}
                        className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 py-2 px-3 "
                        placeholder={fields[2].placeholder}
                        style={{ fontFamily: fonts.sans }} />
                    </label>}
                    {fields[3].label !== null && <label className="block mt-auto mb-0" key={fields[3].name}>
                      <span className="font-sans text-gray-700 flex" style={{ fontFamily: fonts.sans }}>{fields[3].label}</span>
                      <input type="text" name={fields[3].name}
                        className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 py-2 px-3 "
                        placeholder={fields[3].placeholder} style={{ fontFamily: fonts.sans }} />
                    </label>}
                  </div>
                  <input type="submit" value={submitText} className={`px-4 py-2 my-2 font-sans font-bold rounded cursor-pointer  ${submitClasses} ${hover}`}
                    onMouseEnter={() => setHover('bg-' + submitStyle.hover)}
                    onMouseLeave={() => setHover(`bg-${submitStyle.background}`)}
                    style={{ fontFamily: fonts.sans }}
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

    </ >
  );
}



const TitleText = ({ text, classes, font }: any) => {
  const fonts = useBoundStore((state) => state.fonts)
  return <p className={classes} key={text}
    style={(font !== undefined ? {
      fontFamily: font === 'sans' ? fonts.sans : fonts.serif
    } : "") || undefined}
  >
    {text}
  </p>
}

