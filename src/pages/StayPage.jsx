import React from "react";
import Banner from "../components/Banner";
import PackageComponent from "../components/PackageComponent";

import {
  TbResize,
  TbReportMoney,
  TbPhone,
  TbBrandFacebook,
  TbPencilQuestion,
  TbCalendarEvent,
  TbDeviceLandlinePhone,
  TbAirConditioning,
  TbToiletPaper,
  TbChalkboard,
  TbVideo,
  TbMicrophone,
  TbPrinter,
  TbDeviceProjector,
  TbDeviceSpeaker,
  TbPinned,
  TbDesk,
  TbWifi,
  TbChefHat,
  TbMusic,
  TbCoffee,
  TbPencil,
  TbIroning,
  TbCurrentLocation,
  TbPaperBag,
  TbBottle,
  TbBasket,
  TbVip,
} from "react-icons/tb";

import {
  MdMonitor,
  MdAlternateEmail,
  MdOutlineBed,
  MdOutlineBrunchDining,
  MdTableChart,
  // MdTableRestaurant,
  MdOutlineCoffeeMaker,
  MdOutlineRoomService,
  MdOutlineBathtub,
  MdChairAlt,
  MdRoomService,
  MdOutlineHotel,
  MdOutlineWineBar,
} from "react-icons/md";

const StayPage = () => {
  const accommodationContents = {
    id: "Stay",
    slogan: "True Nepalese Hospitality",
    banner: "https://mayurstay.com/hotelhimalaya/images/subpackage/9Lgh2-1.jpg",
    title: "Stay with Us",
    subtitle:
      "Do you prefer accommodation directly in a hotel, with all the services and comforts that belong to it? We offer comfortably furnished rooms and modern suits.",
    description:
      "Indulge in serene luxury with meticulously curated rooms, modern amenities, and breathtaking views for an unforgettable tailored stay.",
    roomsCategories: [
      {
        id: "juniorsuite",
        title: "Junior Suites",
        type: "junior suite",
        subtitle:
          "Our Junior Suite offers spacious accommodation with a cozy living room, perfect for relaxation and comfort.",
        description:
          "Our most spacious room category, the Junior Suites boast of plush beds with finest linen, sufficient working space, comfortable lounge area and en-suite bathrooms featuring bathtub. All these ‘suites’ are situated in the extreme corners of the floors for its quietness, offering windows on two sides with the views of lush green landscaped gardens on one side and city as well as Himalayas on the other. The most opulent rooms that we offer, you won’t wish to leave once you’ve stepped inside.",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/4m0u8-room05.jpg",
            alt: "Deluxe Room",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/km7M2-room3.jpg",
            alt: "Junior Suite",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/UvnAe-a.jpeg",
            alt: "Executive Suite",
          },
        ],
        details: {
          "Room Size": { icon: TbResize, value: "444 sq. feet" },
          "Starting Price": { icon: TbReportMoney, value: "Starting USD 150" },
          "Rate Plan": { icon: TbCoffee, value: "Bed & Breakfast" },
        },
        amenities: [
          { icon: TbWifi, title: "Free Wi-Fi" },
          { icon: MdMonitor, title: "Television" },
          { icon: MdOutlineHotel, title: "Comfortable Bed" },
          { icon: MdOutlineBathtub, title: "Private Bathroom" },
          { icon: MdOutlineRoomService, title: "24 hr Room Service" },
          { icon: TbDesk, title: "Work Desk" },
          { icon: TbToiletPaper, title: "Toiletries" },
          { icon: TbAirConditioning, title: "Air Conditioner" },
          { icon: TbDeviceLandlinePhone, title: "Telephone" },
          { icon: MdOutlineWineBar, title: "Mini Bar" },
          { icon: MdOutlineCoffeeMaker, title: "Tea / Coffee Maker" },
          { icon: TbPaperBag, title: "Sachet" },
          { icon: TbIroning, title: "Iron (on request)" },
          { icon: TbBottle, title: "Water Bottle" },
        ],
      },
      {
        id: "executivesuite",
        title: "Executive Suite",
        type: "executive suite",
        subtitle:
          "Elegance meets comfort in our Executive Suite, featuring a large bedroom and a separate living room for your convenience.",
        description:
          "Our newly built Executive Floor commands the best view of the Kathmandu valley. These well-appointed rooms on the 5th floor offer spectacular views of the city and mountains on the horizon. The large windows create an enclosed balcony where you can soak up the sun and marvel at the city below and mountains beyond. The stylish en-suite bathrooms feature rain showers and the room comes equipped with everything the business or leisure traveler might have in mind.",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/4m0u8-room05.jpg",
            alt: "Deluxe Room",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/km7M2-room3.jpg",
            alt: "Junior Suite",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/UvnAe-a.jpeg",
            alt: "Executive Suite",
          },
        ],
        details: {
          "Room Size": { icon: TbResize, value: "320 sq. feet" },
          "Starting Price": { icon: TbReportMoney, value: "Starting USD 110" },
          "Rate Plan": { icon: TbCoffee, value: "Bed & Breakfast" },
        },
        amenities: [
          { icon: TbWifi, title: "Free Wi-Fi" },
          { icon: MdMonitor, title: "Television" },
          { icon: MdOutlineHotel, title: "Comfortable Bed" },
          { icon: MdOutlineBathtub, title: "Private Bathroom" },
          { icon: MdOutlineRoomService, title: "24 hr Room Service" },
          { icon: TbDesk, title: "Work Desk" },
          { icon: TbToiletPaper, title: "Toiletries" },
          { icon: TbAirConditioning, title: "Air Conditioner" },
          { icon: TbDeviceLandlinePhone, title: "Telephone" },
          { icon: MdOutlineWineBar, title: "Mini Bar" },
          { icon: MdOutlineCoffeeMaker, title: "Tea / Coffee Maker" },
          { icon: TbPaperBag, title: "Sachet" },
          { icon: TbIroning, title: "Iron (on request)" },
          { icon: TbBottle, title: "Water Bottle" },
        ],
      },
      {
        id: "deluxe",
        title: "Deluxe Rooms",
        type: "deluxe",
        subtitle:
          "The Deluxe Room offers a comfortable stay with modern amenities and elegant decoration.",
        description:
          "We offer deluxe room with king size bed and well equipped with all the facilities and equipments you need for a comfortable stay. Spend quality time in our room fulfilled with a luxurious bathroom along with view of mountains and city. Spend your leisure time and make your stay a memorable stay. Feel like home and away in a silent environment.",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/4m0u8-room05.jpg",
            alt: "Deluxe Room",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/km7M2-room3.jpg",
            alt: "Junior Suite",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/UvnAe-a.jpeg",
            alt: "Executive Suite",
          },
        ],
        details: {
          "Room Size": { icon: TbResize, value: "275 sq. feet" },
          "Starting Price": { icon: TbReportMoney, value: "Starting USD 85" },
          "Rate Plan": { icon: TbCoffee, value: "Bed & Breakfast" },
        },
        amenities: [
          { icon: TbWifi, title: "Free Wi-Fi" },
          { icon: MdMonitor, title: "Television" },
          { icon: MdOutlineHotel, title: "Comfortable Bed" },
          { icon: MdOutlineBathtub, title: "Private Bathroom" },
          { icon: MdOutlineRoomService, title: "24 hr Room Service" },
          { icon: TbDesk, title: "Work Desk" },
          { icon: TbToiletPaper, title: "Toiletries" },
          { icon: TbAirConditioning, title: "Air Conditioner" },
          { icon: TbDeviceLandlinePhone, title: "Telephone" },
          { icon: MdOutlineWineBar, title: "Mini Bar" },
          { icon: MdOutlineCoffeeMaker, title: "Tea / Coffee Maker" },
          { icon: TbPaperBag, title: "Sachet" },
          { icon: TbIroning, title: "Iron (on request)" },
          { icon: TbBottle, title: "Water Bottle" },
        ],
      },
    ],
  };

  const { banner, title, subtitle, description, slogan, roomsCategories } =
    accommodationContents;
  return (
    <>
      <Banner
        banner={banner}
        title={title}
        description={description}
        page="Accommodation"
      />

      <main>
        <div className="container space-y-32">
          <div className="text-center space-y-6 px-24">
            <span className="uppercase">{slogan}</span>
            <h3 className="text-3xl leading-snug">{subtitle}</h3>
          </div>
        </div>
        <div className="container space-y-32">
          {roomsCategories.map((room) => (
            <PackageComponent key={room.id} page="Stay" content={room} />
          ))}
        </div>
      </main>
    </>
  );
};

export default StayPage;
