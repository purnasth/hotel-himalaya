import React from "react";

import {
  withDataFetching,
  Accordian,
  Banner,
  DiscoverHimalaya,
  Socials,
  Video,
  Nearby,
  ContactForm,
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
  } = data;

  return (
    <>
      <Banner
        banner={banner}
        title={title}
        description={description}
        page={page}
      />

      <main className="font -serif">
        <div className="container mt-12">
          <div className="text-center space-y-6 px-24">
            <span className="uppercase">{slogan}</span>
            <h3 className="text-3xl leading-snug">{subdescription}</h3>
          </div>

          <div className="grid grid-cols-3 items-center content-center gap-12 my-40">
            <div className="col-span-1 flex flex-col items-center text-center gap-4">
              <Socials />
            </div>

            <div className="col-span-2 outline outline-1 outline-white -outline-offset-[10px]">
              <Video videoClassName="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="container">
          <Accordian accordians={accordian} />

          <div className="max-w-5xl mx-auto my-32 border border-gold p-3">
            <ContactForm enquiryFormFields={contactFormFields} />
          </div>
        </div>
        <Nearby />

        <DiscoverHimalaya />
      </main>
    </>
  );
};

export default withDataFetching(ContactPage, "/api/contactData.json");
