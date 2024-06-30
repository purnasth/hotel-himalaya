import React from "react";
import { EnquiryNow } from "../constants/data";

const PromotionsComponent = ({ promotionsImages, enquiryFormFields }) => {
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

              <EnquiryNow
                enquiryFormFields={enquiryFormFields}
                prefill={{ event: promotion.label }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PromotionsComponent;
