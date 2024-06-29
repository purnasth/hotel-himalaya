import React from "react";
import Banner from "../components/Banner";
import PackageComponent from "../components/PackageComponent";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/Loader";
import Summary from "../components/ui/Summary";

const StayPage = () => {
  const { data, loading, error } = useFetchData("/api/accommodationData.json");

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
    roomsCategories,
    accommodationFormFields,
    video,
    rojai,
  } = data;

  return (
    <>
      <Banner
        banner={banner}
        video={video}
        title={title}
        description={description}
        page="Accommodation"
      />

      <main>
        <div className="container space-y-32">
          <div className="text-center space-y-6 px-24">
            <span className="uppercase">{slogan}</span>
            <h3 className="text-3xl leading-snug">{subtitle}</h3>
          </div>
        </div>
        <div className="container space-y-32">
          {roomsCategories.map((room) => (
            <PackageComponent
              key={room.id}
              page="Stay"
              content={room}
              enquiryFormFields={accommodationFormFields}
            />
          ))}
        </div>
      </main>
      <Summary
        video={video}
        quote="Take a break. Recharge your batteries. Find inspiration."
        link={rojai}
      />
    </>
  );
};

export default StayPage;
