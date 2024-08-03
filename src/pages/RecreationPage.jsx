import React from "react";

import {
  withDataFetching,
  Banner,
  MembershipForm,
  RecreationLayout,
  Summary,
} from "../constants/data";

const RecreationPage = ({ data }) => {
  const {
    banner,
    video,
    slogan,
    title,
    description,
    page_description,
    membershipFormFields,
    recreations,
  } = data;

  return (
    <>
      <Banner
        banner={banner}
        // video={video}
        title={title}
        description={description}
        page="Recreation"
      />
      <main className="z-auto">
        <div className="">
          <div className="md:container text-center mb-0 sm:mb-8 md:mb-12">
            <span className="text-xs md:text-base uppercase">{slogan}</span>
            <h5 className="text-base sm:text-lg md:text-xl xl:text-2xl leading-snug xl:leading-snug text-justify xl:text-center mt-6 mb-12">
              {page_description}
            </h5>
          </div>
          <div className="flex items-center justify-center">
            <MembershipForm enquiryFormFields={membershipFormFields} />
          </div>
        </div>
        <RecreationLayout recreationsData={recreations} />
      </main>
      <Summary
        poster={banner}
        video={video}
        quote="Experience luxury. Rejuvenate your body & mind."
        link="/enquiry-review"
      />
    </>
  );
};

export default withDataFetching(RecreationPage, "/api/recreationData.json");
