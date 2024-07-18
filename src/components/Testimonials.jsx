import React from "react";

import { withDataFetching, TestimonialFilter } from "../constants/data";
import { Link } from "react-router-dom";

const Testimonials = ({ data }) => {
  const { subheading, title, description, contents, routePage } = data;

  const limitedContents = contents.slice(0, 4);

  return (
    <main id="testimonials">
      <div className="container">
        <div className="text-center space-y-6 px-24 mb-12">
          <span className="uppercase">{subheading}</span>
          <h3 className="text-5xl leading-snug">{title}</h3>
          <p className="text-base max-w-lg mx-auto">{description}</p>
        </div>
        <TestimonialFilter contents={limitedContents} />
      </div>
      <div class="text-center mt-16">
        <Link
          to={routePage}
          className="text-black bg-gradient px-8 py-2 rounded-full hover-outline"
        >
          Read More
        </Link>
      </div>
    </main>
  );
};

export default withDataFetching(Testimonials, "/api/testimonialData.json");
