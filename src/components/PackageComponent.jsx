import React from "react";
import Slider from "./Slider";

import { TbResize, TbReportMoney, TbCoffee } from "react-icons/tb";

const PackageComponent = ({ page }) => {
  const slides = [
    {
      url: "https://hotelhimalaya.com/images/package/galleryimages/4m0u8-room05.jpg",
      alt: "Deluxe Room",
    },
    {
      url: "https://hotelhimalaya.com/images/package/galleryimages/km7M2-room3.jpg",
      alt: "Junior Suite",
    },
    {
      url: "https://hotelhimalaya.com/images/package/galleryimages/UvnAe-a.jpeg",
      alt: "Executive Suite",
    },
  ];

  return (
    <>
      <main>
        {/* <h1>Package = {page}</h1> */}
        <div className="container space-y-32">
          <div className="text-center space-y-6 px-24">
            <span className="uppercase">True Nepalese Hospitality</span>
            <h3 className="text-3xl leading-snug">
              Do you prefer accommodation directly in a hotel, with all the
              services and comforts that belong to it? We offer comfortably
              furnished rooms and modern suits.
            </h3>
          </div>

          <section>
            <Slider
              slides={slides}
              containerClassName="w-full h-[95vh]"
              buttonClassName="stay-slider-button hover-outline"
              imgClassName="outline outline-1 outline-white -outline-offset-[12px] group-hover:outline-offset-0 w-full h-full object-cover absolute inset-0 transition-all duration-[2s]"
              trueClassName="opacity-100"
              falseClassName="opacity-0"
            />

            <div className="container px-14 grid grid-cols-3 gap-24 mt-12">
              <div className="col-span-2 space-y-6">
                <h3 class="text-3xl leading-snug underline">
                  Junior Suite Room
                </h3>
                <p className="text-justify md:text-pretty text-base font-light">
                  Our most spacious room category, the Junior Suites boast of
                  plush beds with finest linen, sufficient working space,
                  comfortable lounge area and en-suite bathrooms featuring
                  bathtub. All these ‘suites’ are situated in the extreme
                  corners of the floors for its quietness, offering windows on
                  two sides with the views of lush green landscaped gardens on
                  one side and city as well as Himalayas on the other. The most
                  opulent rooms that we offer, you won’t wish to leave once
                  you’ve stepped inside.
                </p>
                <ul>
                  <li className="flex items-center justify-between mt-6 py-2">
                    <span className="flex items-center md:gap-1 text-xs md:text-base">
                      <TbResize className="text-sm md:text-xl mr-2" />
                      444 sq. ft.
                    </span>
                    <span className="flex items-center md:gap-1 text-xs md:text-base">
                      <TbReportMoney className="text-sm md:text-xl mr-2" />
                      Starting USD 200
                    </span>
                    <span className="flex items-center md:gap-1 text-xs md:text-base">
                      <TbCoffee className="text-sm md:text-xl mr-2" />
                      Bed & Breakfast
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 bg-amber-100 p-4 pb-8 px-8 -translate-y-28 outline outline-black/0 outline-1 -outline-offset-8">
                <button
                  className="w-full scale-100 translate-y-0 bg-gradient px-6 py-2 rounded-full hover-outline flex items-center justify-center gap-0 transition-all duration-500 ease-in-out"
                  title="Reserve"
                  aria-label="Reserve"
                >
                  Reserve
                </button>

                <div className="mt-6">
                  <h5 className="text-lg text-center mb-6">Room Amenities</h5>
                  <ul className="list-decimal list-inside font-light text-base space-y-1 max-h-60 overflow-y-auto">
                    <li>Free Wi-Fi</li>
                    <li>Mini Bar</li>
                    <li>Tea & Coffee Maker</li>
                    <li>Safe Deposit Box</li>
                    <li>Iron & Ironing Board</li>
                    <li>Telephone</li>
                    <li>TV with Satellite Channels</li>
                    <li>24-hour Room Service</li>
                    <li>Free Wi-Fi</li>
                    <li>Mini Bar</li>
                    <li>Tea & Coffee Maker</li>
                    <li>Safe Deposit Box</li>
                    <li>Iron & Ironing Board</li>
                    <li>Telephone</li>
                    <li>TV with Satellite Channels</li>
                    <li>24-hour Room Service</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default PackageComponent;
