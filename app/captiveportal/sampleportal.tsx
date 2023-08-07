export default function SamplePortal() {
  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-gray-400 sm:flex-row">

        <img
          className="absolute inset-0 z-10 hidden object-cover object-top w-full h-full sm:block "
          src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/hero.jpg"
          alt
        />
        <div
          className="absolute inset-0 z-10 hidden object-cover w-full h-full sm:block from-transparent to-black opacity-90 bg-gradient-to-b "
        />


        <div className="relative flex flex-col justify-center h-56 overflow-hidden border sm:flex-1 sm:h-auto">

          <img
            className="absolute inset-0 block object-cover object-top w-full h-56 sm:hidden "
            src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/hero.jpg"
            alt
          />
          <div
            className="absolute inset-0 block object-cover w-full h-56 sm:hidden from-transparent to-black opacity-90 bg-gradient-to-b "
          />

          <div className="relative w-full h-auto p-8 mx-auto md:w-96 ">
            <div
              className="absolute inset-0 z-20 w-full h-full sm:rounded-2xl from-white to-white opacity-90 bg-gradient-to-b rounded-2xl "
            />
            <div className="flex flex-col justify-center">
              <img className="z-20 mx-auto max-h-32" src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/logo.png" />
              <h2 className="z-20 mt-0 font-sans text-3xl font-bold text-black text-top ">Try our coffee</h2>
            </div>
          </div>
        </div>

        <div
          className="z-20 flex flex-col justify-center pb-0 my-0 mb-0 bg-transparent sm:flex-1 sm:pt-2 sm:px-2 lg:flex-none lg:px-20 xl:px-24"
        >
          <div className="w-full h-auto px-6 py-6 mx-auto bg-white sm:shadow-2xl sm:w-96 sm:rounded-2xl">

            <div>
              <p className="mt-2 font-serif text-2xl font-bold text-center text-green-900 ">
                YOU&#39;RE CONNECTED
              </p>
            </div>
            <div className="flex flex-col p-2 mt-2 h-80">
              <div className="relative flex flex-col justify-center w-full mt-4 overflow-hidden rounded-lg shadow-2xl h-1/3">
                <p className="z-30 px-4 font-sans text-2xl font-bold text-right text-white ">
                  Drink Menu
                </p>
                <img
                  className="absolute z-10 object-cover object-center w-full h-full "
                  src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/drinks.jpg"
                  alt
                />
                <div className="absolute inset-0 z-20 w-full h-full from-transparent to-black opacity-70 bg-gradient-to-r " />
                <a
                  className="absolute inset-0 z-40 w-full h-full bg-transparent"
                  href="https://cdn.shopify.com/s/files/1/0247/9197/3985/files/DRINK_MENU_7.23.22.jpg?v=1658672687"
                />
              </div>
              <div className="relative flex flex-col justify-center w-full mt-4 overflow-hidden rounded-lg shadow-2xl h-1/3">
                <p className="z-30 px-4 font-sans text-2xl font-bold text-left text-white ">
                  Food Menu
                </p>
                <img
                  className="absolute z-10 object-cover object-center w-full h-full "
                  src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/food.jpg"
                  alt
                />
                <div className="absolute inset-0 z-20 w-full h-full from-transparent to-black opacity-70 bg-gradient-to-l " />
                <a
                  className="absolute inset-0 z-40 w-full h-full bg-transparent"
                  href="https://cdn.shopify.com/s/files/1/0247/9197/3985/files/FOOD_MENU_7-23-22.jpg?v=1658672705"
                />
              </div>
              <div className="relative flex flex-col justify-center w-full mt-4 overflow-hidden rounded-lg shadow-2xl h-1/3">
                <p className="z-30 px-4 font-sans text-2xl font-bold text-right text-white ">
                  Shop Our Merch
                </p>
                <img
                  className="absolute z-10 object-cover object-top w-full h-full "
                  src="http://splash3.gogoguest.com/captiveportal/images/merchant/slowpokes/shop.jpg"
                  alt
                />
                <div className="absolute inset-0 z-20 w-full h-full from-transparent to-black opacity-70 bg-gradient-to-r " />
                <a
                  className="absolute inset-0 z-40 w-full h-full bg-transparent"
                  href="https://www.imaslowpoke.com/pages/shop"
                />
              </div>
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
