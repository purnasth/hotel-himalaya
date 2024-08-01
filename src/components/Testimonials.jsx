import React from "react";

import { withDataFetching, TestimonialFilter } from "../constants/data";
import { Link } from "react-router-dom";

const Testimonials = ({ data }) => {
  const { subheading, title, description, contents, routePage } = data;

  const limitedContents = contents.slice(0, 4);

  return (
    <main id="testimonials">
      <div className="md:container">
        <div className="text-left md:text-center space-y-5 md:space-y-6 px-6 sm:px-12 md:px-24 md:mb-12">
          <span className="text-xs md:text-base uppercase">{subheading}</span>
          <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug lg:leading-snug">
            {title}
          </h3>
          <p className="text-sm text-justify md:text-base md:text-center max-w-lg mx-auto">
            {description}
          </p>
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
