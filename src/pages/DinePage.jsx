import React from "react";
import Banner from "../components/Banner";
import FilterComponent from "../components/ui/FilterComponent";

const DinePage = () => {
  const dineContents = [
    {
      id: "dine",
      banner:
        "https://mayurstay.com/hotelhimalaya/images/slideshow/GDLNu-03.jpg",
      subheading:
        "Immerse yourself in an unforgettable dining experience where culinary artistry meets exquisite ambiance. Savor gourmet dishes crafted from the finest ingredients, each plate a masterpiece. Our elegant decor and attentive service set the stage for a perfect evening. Join us for a culinary journey that delights the senses and creates lasting memories. Reserve your table today and elevate your dining experience to extraordinary heights.",
      title: "Fine Dine Experience",
      description:
        "Indulge in our exquisite dining experience, where each dish is a masterpiece of flavor and every moment is cherished.",
      diningOptions: [
        {
          id: 1,
          title: "Patan Museum Cafe",
          description:
            "Begin your day with a global culinary exploration at the Patan Museum Café, a UNESCO World Heritage site, where a lavish buffet awaits. Operated by Hotel Himalaya and just a 6-minute journey away, our café offers a feast for the senses with authentic flavors spanning from Terai to the Himalayas, all complemented by breathtaking views and the option to dine under the sun's warm embrace.",
          occupancy: "120 pax",
          time: "08:30 AM - 07:00 PM",
          cuisine: "Multicuisine",
          dineImages: [
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/OeO8g-cafe1.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/g8vXS-slider01.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/RdTdO-slider1.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/b7HxF-05.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/Kxj2T-bar4.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/NAU3u-06.jpg",
            },
          ],
        },
        {
          id: 2,
          title: "The Cafe Horizon",
          description:
            "The Café Horizon is your first port of call on a culinary journey that spans the globe. Indulge in our lavish buffet breakfast and lunch or delight in exquisite dishes from our Multicuisine a la carte menu. You can enjoy the view from inside or bask in the sunshine.",
          occupancy: "82 pax",
          time: "06:30 AM - 10:00 PM",
          cuisine: "Multicuisine",
          dineImages: [
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/OeO8g-cafe1.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/g8vXS-slider01.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/RdTdO-slider1.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/b7HxF-05.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/Kxj2T-bar4.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/NAU3u-06.jpg",
            },
          ],
        },
        {
          id: 3,
          title: "Dalaan",
          description:
            "Dalaan at Hotel Himalaya offers a distinctive alfresco dining experience, where the charm of open-air ambiance meets culinary excellence. Open 24 hours a day, Dalaan beckons guests to enjoy delectable meals at any hour, with a seating capacity.",
          occupancy: "72 pax",
          time: "08:30 AM - 07:00 PM",
          cuisine: "Multicuisine",
          dineImages: [
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/OeO8g-cafe1.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/g8vXS-slider01.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/RdTdO-slider1.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/b7HxF-05.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/Kxj2T-bar4.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/NAU3u-06.jpg",
            },
          ],
        },
        {
          id: 4,
          title: "By The Waterfall",
          description:
            "By The Waterfall offers scrumptious pastries and tasty snacks to accompany your tea or coffee. Our comfortable lounge in the lobby is where all the action is. You can surf the net or catch up on your mail while admiring our beautiful Japanese water garden next to it.",
          occupancy: "18 pax",
          time: "08:30 AM - 07:00 PM",
          cuisine: "Multicuisine",
          dineImages: [
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/OeO8g-cafe1.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/g8vXS-slider01.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/RdTdO-slider1.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/b7HxF-05.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/Kxj2T-bar4.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/NAU3u-06.jpg",
            },
          ],
        },
        {
          id: 5,
          title: "Base Camp Bar",
          description:
            "Our Base Camp Bar is just what you need to un-wind yourself with a glass of deluxe wine, exotic cocktails or premium spirits. The plush and cozy furnishings set against a backdrop of memorabilia of legendary singers from yesteryears.",
          occupancy: "44 pax",
          time: "11:00 AM - midnight",
          cuisine: "Multicuisine",
          dineImages: [
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/OeO8g-cafe1.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/g8vXS-slider01.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/RdTdO-slider1.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/b7HxF-05.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/Kxj2T-bar4.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/NAU3u-06.jpg",
            },
          ],
        },
        {
          id: 6,
          title: "The Cake Shop",
          description:
            "Indulge in a symphony of sweetness at our Cake Shop nestled within the iconic Hotel Himalaya. Delight your senses with artisanal confections meticulously crafted to perfection. From decadent chocolate masterpieces to delicate fruit-infused creations, our exquisite cakes promise to elevate every moment.",
          occupancy: "24 pax",
          time: "08:30 AM - 07:00 PM",
          cuisine: "Multicuisine",
          dineImages: [
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/OeO8g-cafe1.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/g8vXS-slider01.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/RdTdO-slider1.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/b7HxF-05.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/Kxj2T-bar4.jpg",
            },
            {
              url: "https://hotelhimalaya.com/images/package/galleryimages/NAU3u-06.jpg",
            },
          ],
        },
      ],
    },
  ];

  const { banner, subheading, title, description } = dineContents[0];

  return (
    <>
      <Banner
        banner={banner}
        title={title}
        description={description}
        page="Dine"
      />
      <main id="dine">
        <div className="container">
          <div className="text-center space-y-8 px-24 mb-24">
            <h4 className="text-2xl leading-normal">{subheading}</h4>
          </div>
          <FilterComponent contents={dineContents[0].diningOptions} />
        </div>
      </main>
    </>
  );
};

export default DinePage;
