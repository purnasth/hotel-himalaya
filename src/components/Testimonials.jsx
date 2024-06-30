import React from "react";

import { withDataFetching, TestimonialFilter } from "../constants/data";

const Testimonials = ({ data }) => {
  const { subheading, title, description, contents } = data;

  return (
    <main id="testimonials">
      <div className="container">
        <div className="text-center space-y-6 px-24 mb-12">
          <span className="uppercase">{subheading}</span>
          <h3 className="text-5xl leading-snug">{title}</h3>
          <p className="text-base max-w-lg mx-auto">{description}</p>
        </div>
        <TestimonialFilter contents={contents} />
      </div>
    </main>
  );
};

export default withDataFetching(Testimonials, "/api/testimonialData.json");
