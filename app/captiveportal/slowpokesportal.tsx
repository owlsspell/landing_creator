import { usePortalsStore } from "@/store/state";

export default function SamplePortal() {

  const portals = usePortalsStore((state) => state.portals)

  const overlay = usePortalsStore((state) => state.portals.background.overlay.classes)
  const hero = usePortalsStore((state) => state.portals.hero)

  const backgroundClasses = [
    overlay["color-from"] ? `from-${overlay["color-from"]}` : "",
    overlay["color-to"] ? `to-${overlay["color-to"]}` : "",
    overlay.opacity ? `opacity-${overlay.opacity}` : "",
    overlay.gradient ? `bg-gradient-${overlay.gradient}` : "",
  ]

  const heroClasses = [
    hero.title.classes.font ? `font-${hero.title.classes.font}` : "",
    hero.title.classes.size ? `text-${hero.title.classes.size}` : "",
    hero.title.classes.color ? `text-${hero.title.classes.color}` : "",
    hero.title.classes.weight ? `font-${hero.title.classes.weight}` : "",
    hero.title.classes.align ? `text-${hero.title.classes.align}` : "",
    hero.title.classes["margin-top"] ? `mt-${hero.title.classes["margin-top"]}` : "",
  ]

  return (
    <div>
      <div className="relative flex flex-col min-h-screen bg-gray-400 sm:flex-row">
        <img className="absolute inset-0 z-10 hidden object-cover object-top w-full h-full sm:block " src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/hero.jpg" alt="" />
        <div className={"absolute inset-0 z-10 hidden object-cover w-full h-full sm:block " + backgroundClasses}>
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
              <h2 className={"z-20 " + heroClasses.join(' ')}>{hero.title.text}
              </h2>
            </div>
          </div>
        </div>


        <div
          className="z-20 flex flex-col justify-center pb-0 my-0 mb-0 bg-transparent sm:flex-1 sm:pt-2 sm:px-2 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full h-auto px-6 py-6 mx-auto bg-white sm:shadow-2xl sm:w-96 sm:rounded-2xl">
            {portals.headings.signin.map((field) => {
              const classes = [
                field.classes.font ? `font-${field.classes.font}` : "",
                field.classes.size ? `text-${field.classes.size}` : "",
                field.classes.color ? `text-${field.classes.color}` : "",
                field.classes.weight ? `font-${field.classes.weight}` : "",
                field.classes.align ? `text-${field.classes.align}` : "",
                field.classes.tracking ? `tracking-${field.classes.tracking}` : "",
                field.classes['margin-top'] ? `mt-${field.classes['margin-top']}` : "",
              ]
              return <p key={field.text} className={classes.join(' ')}>
                {field.text}
              </p>
            })}
            <div className="mt-6">
              <form name="submit" id="submit" action="#" method="POST" className="space-y-6">
                <div className="flex flex-col gap-4">
                  {portals.form.fields.standard.map((field, index) => {
                    if (field.length === undefined) {
                      return <label className="block" key={field.name}>
                        <span className="font-sans text-gray-700">{field.label}</span>
                        <input type="text" name={field.name} id={field.name}
                          className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 "
                          placeholder={field.placeholder}
                        />

                      </label>
                    } else {
                      return <div className="flex flex-row gap-4" key={index}>
                        {field.map(item => <label className="block" key={item.name}>
                          <span className="font-sans text-gray-700">{item.label}</span>
                          <input type="text" name={item.name}
                            className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 "
                            placeholder={item.placeholder} />
                        </label>
                        )}
                        {/* <label className="block">
                          <span className="font-sans text-gray-700">Order Total</span>
                          <input type="text" name="total"
                            className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 "
                            placeholder="0.00" />
                        </label> */}
                      </div>


                    }
                  })}
                  {/* <label  className="block">
                    <span className="font-sans text-gray-700">Full Name</span>
                    <input type="text" name="name" id="name"
                      className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 "
                    />

                  </label>
                  <label className="block">
                    <span className="font-sans text-gray-700">Email Address</span>
                    <input type="text" name="email"
                      className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 "
                    />
                  </label> */}
                  {/* // <div className="flex flex-row gap-4">
                  //   <label className="block">
                  //     <span className="font-sans text-gray-700">Order Number</span>
                  //     <input type="text" name="order"
                  //       className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 "
                  //       placeholder="e.g. 109" />
                  //   </label>
                  //   <label className="block">
                  //     <span className="font-sans text-gray-700">Order Total</span>
                  //     <input type="text" name="total"
                  //       className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 "
                  //       placeholder="0.00" />
                  //   </label>
                  // </div> */}

                  <input type="submit" value={portals.form.submit.content} className={`px-4 py-2 my-2 font-sans font-bold text-${portals.form.submit.classes.text}  rounded cursor-pointer hover:bg-${portals.form.submit.classes.hover} `} style={{ backgroundColor: portals.form.submit.classes.background }} />
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