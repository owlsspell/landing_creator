import { usePortalsStore } from "@/store/state";

export default function SamplePortal() {

  const portals = usePortalsStore((state) => state.portals)

  return (
    <div>
      <div className="relative flex flex-col min-h-screen bg-gray-400 sm:flex-row">
        <img className="absolute inset-0 z-10 hidden object-cover object-top w-full h-full sm:block " src="/captiveportal/images/merchant/slowpokes/hero.jpg" alt="" />
        <div className="absolute inset-0 z-10 hidden object-cover w-full h-full sm:block from-transparent to-black opacity-90 bg-gradient-to-b ">
        </div>


        <div className="relative flex flex-col justify-center h-56 overflow-hidden border sm:flex-1 sm:h-auto">

          <img className="absolute inset-0 block object-cover object-top w-full h-56 sm:hidden " src="/captiveportal/images/merchant/slowpokes/hero.jpg" alt="" />
          <div className="absolute inset-0 block object-cover w-full h-56 sm:hidden from-transparent to-black opacity-90 bg-gradient-to-b ">
          </div>

          <div className="relative w-full h-auto p-8 mx-auto md:w-96 ">
            <div className="absolute inset-0 z-20 w-full h-full sm:rounded-2xl from-white to-white opacity-90 bg-gradient-to-b rounded-2xl ">
            </div>
            <div className="flex flex-col justify-center">
              <img className="z-20 mx-auto max-h-32" src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/logo.png" />
              <h2 className="z-20 mt-0 font-sans text-3xl font-bold text-black text-top ">
              </h2>
            </div>
          </div>
        </div>


        <div
          className="z-20 flex flex-col justify-center pb-0 my-0 mb-0 bg-transparent sm:flex-1 sm:pt-2 sm:px-2 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full h-auto px-6 py-6 mx-auto bg-white sm:shadow-2xl sm:w-96 sm:rounded-2xl">

            <div>
              <p className="font-sans text-5xl font-semibold text-left  text-warmGray-800">
                SIGN IN TO
              </p>
              <p className="mt-2 font-serif text-4xl font-extrabold tracking-tight text-left text-green-900 ">
                Connect to WiFi
              </p>
              <p className="mt-2 font-sans text-sm text-left  text-trueGray-800 font-regular">
                *Connect for two hours using a receipt purchased within the last forty five minutes.
              </p>
            </div>

            <div className="mt-6">
              <form name="submit" id="submit" action="#" method="POST" className="space-y-6">
                <div className="flex flex-col gap-4">
                  <label className="block">
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
                  </label>
                  <div className="flex flex-row gap-4">
                    <label className="block">
                      <span className="font-sans text-gray-700">Order Number</span>
                      <input type="text" name="order"
                        className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 "
                        placeholder="e.g. 109" />
                    </label>
                    <label className="block">
                      <span className="font-sans text-gray-700">Order Total</span>
                      <input type="text" name="total"
                        className="block w-full mt-1 font-sans bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 "
                        placeholder="0.00" />
                    </label>
                  </div>

                  <input type="submit" value={portals.form.submit.content} className={`px-4 py-2 my-2 font-sans font-bold text-${portals.form.submit.classes.text} bg-[${portals.form.submit.classes.background}] rounded cursor-pointer hover:bg-${portals.form.submit.classes.hover} `} />
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

      </div>

    </div>
  );
}
