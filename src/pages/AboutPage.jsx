import React from "react";

import {
  withDataFetching,
  Slider,
  BreadCrumb,
  About,
  DiscoverHimalaya,
  sataBlack,
  tripaward,
} from "../constants/data";

const AboutPage = ({ data }) => {
  const {
    banner,
    title,
    description,
    title_description,
    main_description,
    slides,
    aboutSlides,
  } = data;

  return (
    <>
      <div className="relative">
        <Slider
          slides={slides.map((slide) => ({
            url: slide.url,
            title: slide.title,
          }))}
          containerClassName="w-full h-80 sm:h-[50vh] sm:min-h-96 lg:h-[36rem] xl:h-screen"
          buttonClassName="hero-slider-button"
          imgClassName="w-full h-80 sm:h-[50vh] sm:min-h-96 lg:h-[36rem] xl:h-screen object-cover absolute inset-0 transition-all duration-[2s]"
          trueClassName="opacity-100"
          falseClassName="opacity-0 -z-10"
        />

        <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/30 to-black/0"></div>
        <div className="pointer-events-none absolute left-0 bottom-0 text-center bg-gradient-to-t from-black/80 to-black/0 w-full py-4">
          <div className="max-w-xl text-gradient mx-auto space-y-4 py-6 md:py-12">
            <h3 className="text-lg font-bold sm:font-medium sm:text-2xl md:text-4xl leading-snug">
              {title}
            </h3>
            <p className="hidden md:block px-8 text-sm">{description}</p>
          </div>
          <BreadCrumb page="About" />
        </div>
      </div>

      <About data={data} />

      <main className="mt-0 pt-0">
        <div className="md:p-8 text-center">
          <div className="container max-w-6xl space-y-10 mb-16 md:mb-24">
            <h5 className="text-xl md:text-2xl lg:text-3xl md:leading-normal lg:leading-snug text-left md:text-center">
              {title_description}
            </h5>
            <p className="text-sm text-justify md:text-base md:text-center">
              {main_description}
            </p>
          </div>
          <Slider
            slides={aboutSlides.map((slide) => ({
              url: slide.url,
              title: slide.title,
            }))}
            containerClassName="w-full h-64 sm:h-96 lg:h-[36rem] xl:h-[90vh] overflow-hidden relative mx-auto mt-10 group"
            buttonClassName="stay-slider-button"
            imgClassName="w-full h-64 sm:h-96 lg:h-[36rem] xl:h-[90vh] object-cover absolute inset-0 transition-all duration-[1s]"
            trueClassName="opacity-100 scale-100 translate-y-0"
            falseClassName="opacity-0 scale-90 -translate-y-4 -z-10"
          />
        </div>

        <div className="md:container mt-32 text-center">
          <div className="md:px-12 space-y-6 max-w-5xl mx-auto">
            <span class="uppercase">Awards</span>
            <h6 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug lg:leading-snug">
              37<sup>th</sup> years of passion, dedication, and unforgettable
              experiences!
            </h6>
          </div>

          <div className="mx-auto p-4 flex items-center justify-center gap-8 md:gap-16 mt-6 md:mt-12">
            <img
              src={sataBlack}
              alt="Winner Sata 2023"
              className="size-40 md:size-52 object-contain p-4"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7449%) hue-rotate(190deg) brightness(107%) contrast(96%)",
              }}
              draggable="false"
            />
            <img
              src={tripaward}
              alt="Tripadvisor Award 2024"
              className="size-40 md:size-52 object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7449%) hue-rotate(190deg) brightness(107%) contrast(96%)",
              }}
              draggable="false"
            />
          </div>
        </div>

        <DiscoverHimalaya />
      </main>
    </>
  );
};

export default withDataFetching(AboutPage, "/api/aboutData.json");
