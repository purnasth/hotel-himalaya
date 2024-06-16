import React from "react";
import DynamicSlider from "./ui/DynamicSlider";
import useFetchData from "../hooks/useFetchData";
import Loader from "./Loader";

const SocialPosts = () => {
  const { data, loading, error } = useFetchData("/api/socialPosts.json");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { socialsPosts } = data;

  return (
    <main className="p-0">
      <DynamicSlider items={socialsPosts} itemsPerSlide={5} />
    </main>
  );
};

export default SocialPosts;
