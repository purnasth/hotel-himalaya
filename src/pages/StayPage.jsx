import React from "react";
import Banner from "../components/Banner";

const StayPage = () => {
  const data = {
    banner: "https://mayurstay.com/hotelhimalaya/images/subpackage/9Lgh2-1.jpg",
    title: "Stay with Us",
    description:
      "Indulge in serene luxury with meticulously curated rooms, modern amenities, and breathtaking views for an unforgettable tailored stay.",
  };
  return (
    <>
      <Banner
        banner={data.banner}
        title={data.title}
        description={data.description}
        page="About"
      />
    </>
  );
};

export default StayPage;
