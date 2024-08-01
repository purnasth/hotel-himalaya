import React from "react";

import { withDataFetching, PromotionsComponent } from "../constants/data";

const Promotions = ({ data }) => {
  const { promotionsImages, promotionsFormFields } = data;

  return (
    <>
      <main className="z-auto">
        <div className="md:container mt-12">
          <div className="text-center space-y-3 md:space-y-6 px-3 md:px-24 mb-12 md:mb-24">
            <span className="text-xs md:text-base uppercase">
              Our Best Offers Just For You
            </span>
            <h3 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug lg:leading-snug">
              Hotel Promotions
            </h3>
            <p className="text-sm text-justify md:text-base md:text-center max-w-lg mx-auto">
              Where Comfort Meets Class, Your Perfect Getaway Awaits
            </p>
          </div>
        </div>
        <PromotionsComponent
          promotionsImages={promotionsImages}
          enquiryFormFields={promotionsFormFields}
        />
      </main>
    </>
  );
};

export default withDataFetching(Promotions, "/api/promotionsData.json");
