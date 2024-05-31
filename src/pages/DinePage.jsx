import React from "react";
import Banner from "../components/Banner";

const DinePage = () => {
  const data = {
    banner: "https://mayurstay.com/hotelhimalaya/images/slideshow/GDLNu-03.jpg",
    title: "Fine Dine Experience",
    description:
      "Indulge in our exquisite dining experience, where each dish is a masterpiece of flavor and every moment is cherished.",
  };

  return (
    <>
      <Banner
        banner={data.banner}
        title={data.title}
        description={data.description}
        page="Dine"
      />
      <main className="">
        <div className="container space-y-10 text-center">
          <h5 className="text-2xl leading-normal">
            Immerse yourself in an unforgettable dining experience where
            culinary artistry meets exquisite ambiance. Savor gourmet dishes
            crafted from the finest ingredients, each plate a masterpiece. Our
            elegant decor and attentive service set the stage for a perfect
            evening. Join us for a culinary journey that delights the senses and
            creates lasting memories. Reserve your table today and elevate your
            dining experience to extraordinary heights.
          </h5>
        </div>
      </main>
    </>
  );
};

export default DinePage;
