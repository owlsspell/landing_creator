import { useBoundStore } from "@/store/state";
import { useEffect, useState } from 'react';

export default function SamplePortal() {
  const heroTitle = useBoundStore((state) => state.backgroundOverlay);
  const overlay = useBoundStore((state) => state.backgroundOverlay);
  const submitText = useBoundStore((state) => state.submitText);
  const submitClasses = useBoundStore((state) => state.submitClasses);
  const fields = useBoundStore((state) => state.fields);
  const signin = useBoundStore((state) => state.signin)

  const [hover, setHover] = useState(`bg-${submitClasses.background}`)

  useEffect(() => {
    setHover(`bg-${submitClasses.background}`)
  }, [submitClasses.background])

  const backgroundClasses = [
    overlay["color-from"] ? `from-${overlay["color-from"]}` : "",
    overlay["color-to"] ? `to-${overlay["color-to"]}` : "",
    overlay.opacity ? `opacity-${overlay.opacity}` : "",
    overlay.gradient ? `bg-gradient-${overlay.gradient}` : "",
  ]

  const heroClasses = [
    heroTitle.classes.font ? `font-${heroTitle.classes.font}` : "",
    heroTitle.classes.size ? `text-${heroTitle.classes.size}` : "",
    heroTitle.classes.color ? `text-${heroTitle.classes.color}` : "",
    heroTitle.classes.weight ? `font-${heroTitle.classes.weight}` : "",
    heroTitle.classes.align ? `text-${heroTitle.classes.align}` : "",
    heroTitle.classes["margin-top"] ? `mt-${heroTitle.classes["margin-top"]}` : "",
    heroTitle.classes["margin-bottom"] ? `mt-${heroTitle.classes["margin-bottom"]}` : "",
  ]

  return (
    <div>
      <div className="relative flex flex-col min-h-screen bg-gray-400 sm:flex-row">
        <img className="absolute inset-0 z-10 hidden object-cover object-top w-full h-full sm:block " src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/hero.jpg" alt="" />
        <div className={"absolute inset-0 z-10 hidden object-cover w-full h-full sm:block " + backgroundClasses.join(' ')}>
        </div>


        <div className="relative flex flex-col justify-center h-56 overflow-hidden border sm:flex-1 sm:h-auto">

          <img className="absolute inset-0 block object-cover object-top w-full h-56 sm:hidden" src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/hero.jpg" alt="" />
          <div className={"absolute inset-0 block object-cover w-full h-56 sm:hidden " + backgroundClasses.join(' ')}>
          </div>

          <div className="relative w-full h-auto p-8 mx-auto md:w-96 ">
            <div className="absolute inset-0 z-20 w-full h-full sm:rounded-2xl from-white to-white opacity-90 bg-gradient-to-b rounded-2xl ">
            </div>
            <div className="flex flex-col justify-center">
              <img className="z-20 mx-auto max-h-32" src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/logo.png" />
              <h2 className={"z-20 " + heroClasses.join(' ')}>{heroTitle.text}
              </h2>
            </div>
          </div>
        </div>


        <div
          className="z-20 flex flex-col justify-center pb-0 my-0 mb-0 bg-transparent sm:flex-1 sm:pt-2 sm:px-2 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full h-auto px-6 py-6 mx-auto bg-white sm:shadow-2xl sm:w-96 sm:rounded-2xl">
            {signin.map((field) => {
              const classes = [
                field.classes.font ? `font-${field.classes.font}` : "",
                field.classes.size ? `text-${field.classes.size}` : "",
                field.classes.color ? `text-${field.classes.color}` : "",
                field.classes.weight ? `font-${field.classes.weight}` : "",
                field.classes.align ? `text-${field.classes.align}` : "",
                field.classes.tracking ? `tracking-${field.classes.tracking}` : "",
                field.classes['margin-top'] ? `mt-${field.classes['margin-top']}` : "",
                field.classes['margin-bottom'] ? `mt-${field.classes['margin-bottom']}` : "",
              ]
              return <p key={field.text} className={classes.join(' ')}>
                {field.text}
              </p>
            })}
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
                  <input type="submit" value={submitText} className={`px-4 py-2 my-2 font-sans font-bold text-${submitClasses.text}  rounded cursor-pointer ${hover}`}
                    onMouseEnter={() => setHover('bg-' + submitClasses.hover)}
                    onMouseLeave={() => setHover(`bg-${submitClasses.background}`)}
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
