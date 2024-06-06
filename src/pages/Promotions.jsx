import React from "react";
import PromotionsComponent from "../components/PromotionsComponent";

const Promotions = () => {
  return (
    <>
      <main className="">
        <div className="container mt-12">
          <div className="text-center space-y-6 px-24 mb-24">
            <span className="uppercase">Our Best Offers Just For You</span>
            <h3 className="text-5xl leading-snug">Hotel Promotions</h3>
            <p className="text-base max-w-lg mx-auto">
              Where Comfort Meets Class, Your Perfect Getaway Awaits
            </p>
          </div>
        </div>
        <PromotionsComponent />
      </main>
    </>
  );
};

export default Promotions;
