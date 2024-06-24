import React from "react";
import Banner from "../components/Banner";
import HallComponent from "../components/HallComponent";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/Loader";
import Amenities from "../components/Amenities";

const HallPage = () => {
  const { data, loading, error } = useFetchData("/api/hallData.json");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const {
    banner,
    title,
    subtitle,
    description,
    slogan,
    hallCategories,
    amenities,
    eventFormFields,
  } = data;

  return (
    <>
      <Banner
        banner={banner}
        title={title}
        description={subtitle}
        page="Events"
      />
      <main>
        <div className="container space-y-32">
          <div className="text-center space-y-6 px-24">
            <span className="uppercase">{slogan}</span>
            <h3 className="text-3xl leading-snug">{description}</h3>
          </div>
        </div>
        <div className="space-y-32 grid grid-cols-2 gap-12">
          {hallCategories.map((hall) => (
            <HallComponent
              key={hall.id}
              page="Hall"
              content={hall}
              enquiryFormFields={eventFormFields}
            />
          ))}
        </div>
        <Amenities amenities={amenities} />
      </main>
    </>
  );
};

export default HallPage;
