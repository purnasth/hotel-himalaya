import React from "react";
import { Slider, IconRenderer, EnquiryNow } from "../constants/data";

const HallComponent = ({ content, enquiryFormFields }) => {
  const { title, description, image, details, setup } = content;

  return (
    <section className="mt-16 md:mt-32">
      {image && (
        <Slider
          slides={image.map((img) => ({ url: img.src, alt: img.alt }))}
          containerClassName="w-full h-72 sm:h-96 lg:h-[30rem] 3xl:h-[36rem]"
          buttonClassName="stay-slider-button hover-outline"
          imgClassName="outline outline-1 outline-white -outline-offset-[12px] group-hover:outline-offset-0 w-full h-full object-cover absolute inset-0 transition-all duration-[2s]"
          trueClassName="opacity-100"
          falseClassName="opacity-0 -z-10"
          className="h-96"
        />
      )}

      <div className="px-6 grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-12 xl:gap-6 mt-12">
        <div className="col-span-3 space-y-6">
          <h3 className="text-xl xl:text-2xl leading-snug underline">
            {title}
          </h3>
          <p className="text-justify md:text-pretty text-sm md:text-base font-medium md:font-light">
            {description}
          </p>
          {details && (
            <ul className="flex items-center justify-between mt-6 py-2">
              {Object.entries(details).map(([key, detail]) => (
                <li
                  key={key}
                  className="flex items-center md:gap-1 text-xs md:text-base"
                >
                  <IconRenderer
                    iconName={detail.icon}
                    className="text-xl text-black mr-2"
                  />
                  {detail.value}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative z-auto col-span-2 bg-amber-100 p-4 md:-mt-28">
          <EnquiryNow
            enquiryFormFields={enquiryFormFields}
            prefill={{ event: title }}
          />

          <div className="mt-6">
            <h5 className="text-lg text-center mb-6">Hall Setup Style</h5>
            <ul className="list-decimal list-inside font-light text-base space-y-3 max-h-36 md:max-h-52 overflow-y-auto">
              {setup &&
                setup.map((setupItem, index) => {
                  return (
                    <li key={index} className="flex items-center gap-2">
                      <IconRenderer
                        iconName={setupItem.icon}
                        className="text-xl text-black"
                      />
                      {setupItem.title}: {setupItem.details}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HallComponent;
