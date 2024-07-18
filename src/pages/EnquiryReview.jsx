import React from "react";

import { withDataFetching, ContactForm } from "../constants/data";
import { TbCircleArrowRight } from "../constants/data";
import { Link } from "react-router-dom";

const EnquiryReview = ({ data }) => {
  const { contents } = data;

  return (
    <>
      <main>
        <div className="container mt-12">
          <div className="text-center space-y-6 px-24 mb-12">
            <span className="uppercase">Making 10,000+ happy faces</span>
            <h3 className="text-5xl leading-snug">Reviews & Enquiry </h3>
            <p className="text-base max-w-lg mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              aperiam accusantium sed doloremque molestias nisi.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12 mt-32">
          <div className="col-span-1 sticky top-20 overflow-y-auto max-h-screen">
            <div className="border border-gold p-2">
              <ContactForm hiddenEnquiry="hidden" paddingEnquiry="p-8" />
            </div>
          </div>
          <div className="col-span-1">
            {contents.map((content) => (
              <div
                key={content.id}
                className="bg-gold/10 border border-gold/50 p-8 mb-16 shadow-md"
              >
                <p className="text-justify text-gray-900">
                  {content.description}
                </p>
                <div className="flex items-center justify-between gap-12 mt-12">
                  <p className="text-base md:text-xl font-medium">
                    - {content.title}
                  </p>
                  <img
                    src={content.image}
                    alt={content.source}
                    className="w-28 h-auto object-contain p-2"
                    draggable="false"
                  />
                </div>
                <hr className="border-gold/70 my-4" />

                <Link
                  to={content.sourceUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="group flex items-center gap-2 font-inria-sans text-sm text-gray-600 hover:text-gray-900 transition-all duration-300"
                >
                  <p className="font-inria-sans">
                    Read
                    <strong className="mx-1 font-inria-sans">
                      {content.totalReviews}+
                    </strong>
                    guest reviews on
                    <strong className="mx-1 font-semibold font-inria-sans">
                      {content.source}
                    </strong>
                  </p>
                  <TbCircleArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default withDataFetching(EnquiryReview, "/api/testimonialData.json");
