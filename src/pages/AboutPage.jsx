import React from "react";

import {
  withDataFetching,
  Slider,
  BreadCrumb,
  About,
  DiscoverHimalaya,
} from "../constants/data";

import { sata, tripaward } from "../constants/data";

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
          containerClassName="w-full h-screen"
          buttonClassName="hero-slider-button"
          imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[2s]"
          trueClassName="opacity-100"
          falseClassName="opacity-0"
        />

        <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/30 to-black/0"></div>
        <div className="absolute left-0 bottom-0 text-center bg-gradient-to-t from-black/80 to-black/0 w-full py-4">
          <div className="max-w-xl text-gradient mx-auto space-y-4 py-12">
            <h3 className="text-4xl leading-snug">{title}</h3>
            <p className="px-8 text-sm">{description}</p>
          </div>
          <BreadCrumb page="About" />
        </div>
      </div>

      <About data={data} />

      <main className="mt-0 pt-0">
        <div className="p-8 text-center">
          <div className="container max-w-6xl space-y-10 mb-24">
            <h5 className="text-3xl leading-normal">{title_description}</h5>
            <p>{main_description}</p>
          </div>
          <Slider
            slides={aboutSlides.map((slide) => ({
              url: slide.url,
              title: slide.title,
            }))}
            containerClassName="w-full h-[90vh] overflow-hidden relative mx-auto mt-10 group"
            buttonClassName="stay-slider-button"
            imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[1s]"
            trueClassName="opacity-100 scale-100 translate-y-0"
            falseClassName="opacity-0 scale-90 -translate-y-4 -z-10"
          />
        </div>

        <div className="container mt-32 text-center">
          <div className="px-12 space-y-6">
            <span class="uppercase">Awards</span>
            <h6 className="text-5xl leading-snug">
              37<sup>th</sup> years of passion, dedication, and unforgettable
              experiences!
            </h6>
          </div>

          <div className="mx-auto p-4 flex items-center justify-center gap-16 mt-12">
            <img
              src={sata}
              alt="Winner Sata 2023"
              className="size-52 object-contain p-4"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7449%) hue-rotate(190deg) brightness(107%) contrast(96%)",
              }}
              
            />
            <img
              src={tripaward}
              alt="Tripadvisor Award 2024"
              className="size-52 object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7449%) hue-rotate(190deg) brightness(107%) contrast(96%)",
              }}
              
            />
          </div>
        </div>

        <DiscoverHimalaya />
      </main>
    </>
  );
};

export default withDataFetching(AboutPage, "/api/aboutData.json");
