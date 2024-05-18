import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import Loader from "./Loader";

const Hall = () => {
  const [hallData, setHallData] = useState(null);

  useEffect(() => {
    fetch("/api/hallData.json")
      .then((response) => response.json())
      .then((data) => setHallData(data))
      .catch((error) => console.error("Error fetching hall data:", error));
  }, []);

  if (!hallData) {
    return <Loader />;
  }

  const { title, subtitle, description, categories, buttonText, hallImages } =
    hallData;

  return (
    <>
      <main className="pb-0 px-0">
        <div className="container px-24 pb-24">
          <div className="text-center space-y-8 px-12">
            <span className="uppercase">{subtitle}</span>
            <h3 className="text-5xl leading-snug">{title}</h3>
            <p className="text-base">{description}</p>
          </div>
          <div className="my-24 grid grid-cols-1 md:grid-cols-3 gap-12">
            {categories.map((category, index) => (
              <div key={index} className="space-y-6">
                <h4 className="text-2xl font-medium">{category.title}</h4>
                <p className="text-pretty line-clamp-4">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-gradient px-6 py-2 rounded-full hover-outline">
              {buttonText}
            </button>
          </div>
        </div>

        <Slider
          slides={hallImages}
          containerClassName="w-full h-[95vh]"
          buttonClassName="hall-slider-button"
          imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[2s]"
          trueClassName="opacity-100 translate-y-0"
          falseClassName="opacity-0 translate-y-16 -z-10"
        />
      </main>
    </>
  );
};

export default Hall;
