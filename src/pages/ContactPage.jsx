import React from "react";

import {
  withDataFetching,
  Accordian,
  Banner,
  DiscoverHimalaya,
  Socials,
  Nearby,
  ContactForm,
  VideoPlayer,
} from "../constants/data";

const ContactPage = ({ data }) => {
  const {
    banner,
    title,
    description,
    page,
    slogan,
    subdescription,
    accordian,
    contactFormFields,
    poster,
    video,
  } = data;

  return (
    <>
      <Banner
        banner={banner}
        title={title}
        description={description}
        page={page}
      />

      <main>
        <div className="md:container md:mt-12">
          <div className="text-center space-y-3 md:space-y-6 px-3 md:px-24 mb-12">
            <span className="text-xs md:text-base uppercase">{slogan}</span>
            <h3 className="text-xl md:text-2xl xl:text-3xl leading-snug xl:leading-snug text-justify xl:text-center">
              {subdescription}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 items-center content-center gap-y-12 lg:gap-12 my-16 xl:my-40">
            <div className="col-span-1">
              <Socials />
            </div>

            <div className="col-span-2 group overflow-hidden">
              <VideoPlayer
                poster={poster}
                video={video}
                videoClassName="w-full h-full object-cover outline outline-1 outline-white -outline-offset-[10px]"
              />
            </div>
          </div>
        </div>

        <div className="md:container">
          <Accordian accordians={accordian} />

          <div className="max-w-5xl mx-auto my-20 md:my-32 border border-gold p-1 md:p-3">
            <ContactForm paddingContact="p-4 sm:p-6 md:p-20" />
          </div>
        </div>
        <Nearby />

        <DiscoverHimalaya />
      </main>
    </>
  );
};

export default withDataFetching(ContactPage, "/api/contactData.json");
