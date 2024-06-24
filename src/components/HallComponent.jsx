import React from "react";
import Slider from "./Slider";
import EnquiryNow from "./ui/EnquiryNow";
import IconRenderer from "./IconRenderer";

const HallComponent = ({ content, enquiryFormFields }) => {
  const { title, description, image, details, setup } = content;

  return (
    <section className="mt-32">
      {image && (
        <Slider
          slides={image.map((img) => ({ url: img.src, alt: img.alt }))}
          containerClassName="w-full h-[30rem]"
          buttonClassName="stay-slider-button hover-outline"
          imgClassName="outline outline-1 outline-white -outline-offset-[12px] group-hover:outline-offset-0 w-full h-full object-cover absolute inset-0 transition-all duration-[2s]"
          trueClassName="opacity-100"
          falseClassName="opacity-0"
          className="h-96"
        />
      )}

      <div className="px-6 grid grid-cols-5 gap-6 mt-12">
        <div className="col-span-3 space-y-6">
          <h3 className="text-2xl leading-snug underline">{title}</h3>
          <p className="text-justify md:text-pretty text-base font-light">
            {description}
          </p>
          {details && (
            <ul>
              {Object.entries(details).map(([key, detail]) => {
                return (
                  <li
                    key={key}
                    className="flex items-center justify-between mt-6 py-2"
                  >
                    <span className="flex items-center md:gap-1 text-xs md:text-base">
                      <IconRenderer
                        iconName={detail.icon}
                        className="text-xl text-black mr-2"
                      />
                      {detail.value}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="z-auto col-span-2 bg-amber-100 p-4 px-4 -mt-32">
          <div className="bg-amber-100 mb-12 ml-8">
            <EnquiryNow
              enquiryFormFields={enquiryFormFields}
              prefill={{ event: title }}
            />
          </div>

          <div className="mt-6">
            <h5 className="text-lg text-center mb-6">Hall Setup Style</h5>
            <ul className="list-decimal list-inside font-light text-base space-y-3 max-h-52 overflow-y-auto">
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
