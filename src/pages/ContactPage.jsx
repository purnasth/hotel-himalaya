import React from "react";
import Video from "../components/ui/Video";
import Nearby from "../components/ui/Nearby";
import ContactForm from "../components/ui/ContactForm";
import Accordian from "../components/ui/Accordian";

import Socials from "../components/ui/Socials";
import Banner from "../components/Banner";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/Loader";
import DiscoverHimalaya from "../components/DiscoverHimalaya";

const ContactPage = () => {
  const { data, loading, error } = useFetchData("/api/contactData.json");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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

export default ContactPage;
