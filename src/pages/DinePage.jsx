import React from "react";
import Banner from "../components/Banner";
import FilterComponent from "../components/ui/FilterComponent";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/Loader";
import Summary from "../components/ui/Summary";

const DinePage = () => {
  const { data, loading, error } = useFetchData("/api/dineData.json");

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
    diningOptions,
  } = data;

  return (
    <>
      <Banner
        banner={banner}
        // video={video}
        title={title}
        description={description}
        page="Dine"
      />
      <main id="dine">
        <div className="container">
          <div className="text-center mb-24">
            <span className="uppercase">{slogan}</span>
            <h5 className="text-2xl text-center leading-snug mt-6 mb-12">
              {page_description}
            </h5>
          </div>
          <FilterComponent contents={diningOptions} />
        </div>
      </main>

      <Summary
        video={video}
        quote="Reserve your table today & elevate your dining experience."
        link="#"
      />
    </>
  );
};

export default DinePage;
