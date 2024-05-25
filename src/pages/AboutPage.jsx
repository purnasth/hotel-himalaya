import React from "react";
import Banner from "../components/Banner";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/Loader";

const AboutPage = () => {
  const { data, loading, error } = useFetchData("/api/aboutData.json");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
        <Banner
          banner={data.banner}
          title={data.title}
          description={data.description}
          page="About"
        />
    </>
  );
};

export default AboutPage;
