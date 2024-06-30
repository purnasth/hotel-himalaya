import React from "react";

import { withDataFetching, DynamicSlider } from "../constants/data";

const SocialPosts = ({ data }) => {
  const { socialsPosts } = data;

  return (
    <main className="p-0">
      <DynamicSlider items={socialsPosts} itemsPerSlide={5} />
    </main>
  );
};

export default withDataFetching(SocialPosts, "/api/socialPosts.json");
