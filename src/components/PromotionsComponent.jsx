import React from "react";
import EnquiryNow from "./ui/EnquiryNow";

const PromotionsComponent = () => {
  const promotionsImages = [
    {
      id: 1,
      url: "https://hotelhimalaya.com/images/promotions/ppfvG-promo4.jpeg",
      alt: "Consumer Offer May 2024",
      label: "Consumer Offer May 2024",
    },
    {
      id: 2,
      url: "https://hotelhimalaya.com/images/promotions/nbMHP-promo3.jpeg",
      alt: "Special Offer at Cake Shop",
      label: "Special Offer at Cake Shop",
    },
    {
      id: 3,
      url: "https://hotelhimalaya.com/images/promotions/6Yu1G-hotel-himalaya-promotion2.jpeg",
      alt: "Saturday BBQ Brunch",
      label: "Saturday BBQ Brunch",
    },
    {
      id: 4,
      url: "https://hotelhimalaya.com/images/promotions/DlBBx-hotel-himalaya-promotion1.jpeg",
      alt: "Exclusive Monsoon Offer",
      label: "Exclusive Monsoon Offer",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        {promotionsImages.map((promotion) => (
          <div key={promotion.id} className="aspect-square size-full">
            <img
              src={promotion.url}
              alt={promotion.alt}
              className="aspect-square size-full object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
            />
            <div className="flex items-center justify-between gap-4 py-6">
              <div className="space-y-4">
                <h4 className="text-xl font-medium">{promotion.label}</h4>
                <span className="text-sm">Get 3 for the price of 2</span>
              </div>

              <EnquiryNow prefill={{ eventTitle: promotion.label }} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PromotionsComponent;
