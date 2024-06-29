import React from "react";
import Banner from "../components/Banner";
import MembershipForm from "../components/ui/MembershipForm";
import RecreationLayout from "../components/RecreationLayout";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/Loader";
import Summary from "../components/ui/Summary";

const RecreationPage = () => {
  const { data, loading, error } = useFetchData("/api/recreationData.json");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
        <div className="container">
          <div className="text-center">
            <span className="uppercase">{slogan}</span>
            <h5 className="text-2xl text-center leading-snug mt-6 mb-12">
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
        video={video}
        quote="Experience luxury. Rejuvenate your body & mind."
        link="#"
      />
    </>
  );
};

export default RecreationPage;
