import React from "react";
import EnquiryNow from "./ui/EnquiryNow";

const PromotionsComponent = () => {
  const promotionsImages = [
    {
      id: 1,
      url: "https://hotelhimalaya.com/images/promotions/ppfvG-promo4.jpeg",
      alt: "Hotel Himalaya",
    },
    {
      id: 2,
      url: "https://hotelhimalaya.com/images/promotions/ppfvG-promo4.jpeg",
      alt: "Hotel Himalaya",
    },
    {
      id: 3,
      alt: "Hotel Himalaya",
      url: "https://hotelhimalaya.com/images/promotions/nbMHP-promo3.jpeg",
    },
    {
      id: 4,
      url: "https://hotelhimalaya.com/images/promotions/ppfvG-promo4.jpeg",
      alt: "Hotel Himalaya",
    },
    {
      id: 5,
      url: "https://hotelhimalaya.com/images/promotions/nbMHP-promo3.jpeg",
      alt: "Hotel Himalaya",
    },
    {
      id: 6,
      url: "https://hotelhimalaya.com/images/promotions/nbMHP-promo3.jpeg",
      alt: "Hotel Himalaya",
    },
    {
      id: 7,
      url: "https://hotelhimalaya.com/images/promotions/ppfvG-promo4.jpeg",
      alt: "Hotel Himalaya",
    },
    {
      id: 8,
      url: "https://hotelhimalaya.com/images/promotions/nbMHP-promo3.jpeg",
      alt: "Hotel Himalaya",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center flex-wrap gap-8">
        <div className="">
          <img
            src="https://hotelhimalaya.com/images/promotions/ppfvG-promo4.jpeg"
            alt=""
            className="aspect-square size-[28rem] object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
          />
          <div className="flex items-center justify-between gap-4 py-6">
            <div className="space-y-4">
              <h4 className="text-xl font-medium">Consumer Offer May 2024</h4>
              <span className="text-sm">Get 3 for the price of 2</span>
            </div>

            <EnquiryNow />
          </div>
        </div>
        <div className="">
          <img
            src="https://hotelhimalaya.com/images/promotions/nbMHP-promo3.jpeg"
            alt=""
            className="aspect-square size-[28rem] object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
          />
          <div className="flex items-center justify-between gap-4 py-6">
            <div className="space-y-4">
              <h4 className="text-xl font-medium">
                Special Offer at Cake Shop
              </h4>
              <span className="text-sm">
                From 7:00 PM onwards get 50% offer
              </span>
            </div>

            <EnquiryNow />
          </div>
        </div>
        <div className="">
          <img
            src="https://hotelhimalaya.com/images/promotions/ppfvG-promo4.jpeg"
            alt=""
            className="aspect-square size-[28rem] object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
          />
          <div className="flex items-center justify-between gap-4 py-6">
            <div className="space-y-4">
              <h4 className="text-xl font-medium">Consumer Offer May 2024</h4>
              <span className="text-sm">Get 3 for the price of 2</span>
            </div>

            <EnquiryNow />
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionsComponent;
