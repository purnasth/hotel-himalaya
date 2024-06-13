import React from "react";
import Banner from "../components/Banner";
import HallComponent from "../components/HallComponent";

import {
  TbResize,
  TbAirConditioning,
  TbChalkboard,
  TbVideo,
  TbMicrophone,
  TbPrinter,
  TbDeviceProjector,
  TbDeviceSpeaker,
  TbPinned,
  TbDesk,
  TbWifi,
  TbArmchair,
} from "react-icons/tb";

import { PiProjectorScreenBold } from "react-icons/pi";

const HallPage = () => {
  const hallContents = {
    id: "hall",
    slogan: "True Nepalese Hospitality",
    banner:
      "https://s3-alpha-sig.figma.com/img/4e1d/2131/7f8b9696b68e3c854fbc935f98175f3d?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VWZwj-HbVmKyPo8e2Flsf7-VbfrFUQeN74y68AHJ0dbJOs5HhU-tGTBEuUU8bsvFTlP2M1NvDKHHLLkzzOe3KOC0hetJQw9jFIcZtC1jPAQJv-xMfu~cGnVElD8YM6foSPOm-iwhLydmCvvkSx40vdtIAYXI9t5oUVKyuzwZfZNJsjCV6t82IqItMQ2VuHWcSW~aW4oOhPsMOaCoFrVn0xxFMNjpsiyZooistiT7YDzDOChzFAFxiPImQL1~P7oYV6t3I-yeuuVFjZ4qhbOqUjCwZYd5lhhWFALTYYTbEmRr904ey1WQ6Uc4TixL6E14Jq724q2G50cZTDNwFPGvsA__",
    title: "Auspicious Convention Center",
    subtitle:
      "We know how important is your event for you. Your story deserves the excellent service and beautiful environment of our Hotel Himalaya. Our professional team working with carefully selected suppliers will ensure that your day is exceptional.",
    description:
      "Comfortable accommodation directly in the hotel with extensive Wellness and exceptional gastronomy.",
    hallCategories: [
      {
        id: 1,
        title: "Himalaya Grand Ball Room",
        subtitle: "",
        description:
          "Our crown jewel in event hosting. Now boasting state-of-the-art amenities, this stunning venue is perfect for any occasion.Experience the pinnacle of luxury and functionality at the Himalaya Grand Ballroom.",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/KN2OQ-event01.jpg",
            alt: "Himalaya Grand Ball Room",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/xs2Xy-event2.jpg",
            alt: "Himalaya Grand Ball Room",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/wJCiy-event3.jpg",
            alt: "Himalaya Grand Ball Room",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/ly6To-event1.jpg",
            alt: "Himalaya Grand Ball Room",
          },
        ],
        details: {
          Size: { icon: TbResize, value: "4275 sq. feet" },
        },
        setup: [
          { icon: "", title: "Theatre", details: "400 pax" },
          { icon: "", title: "Cluster", details: "160 pax" },
          { icon: "", title: "Cocktail", details: "350 pax" },
          { icon: "", title: "Round", details: "180 pax" },
          { icon: "", title: "U shape", details: "100 pax" },
          { icon: "", title: "Hallow Block", details: "110 pax" },
          { icon: "", title: "ClassRoom", details: "90 pax" },
          { icon: "", title: "BoardRoom", details: "110 pax" },
        ],
      },
      {
        id: 2,
        title: "Skyline Hall",
        subtitle: "",
        description:
          "Ascend to sophistication in our Neo-classical Skyline Hall, where timeless elegance meets modern convenience. Elevate your events, from dynamic workshops to unforgettable banquets",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/jj0Cp-skyline-hall1.jpg",
            alt: "Skyline Hall",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/Y1jTW-skyline-hall.jpg",
            alt: "Skyline Hall",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/DQiHF-skyline-hall2.jpg",
            alt: "Skyline Hall",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/2gj8N-skyline3.jpg",
            alt: "Skyline Hall",
          },
        ],
        details: {
          Size: { icon: TbResize, value: "2138.75 sq. feet" },
        },
        setup: [
          { icon: "", title: "Theatre", details: "150 pax" },
          { icon: "", title: "Cluster", details: "70 pax" },
          { icon: "", title: "Cocktail", details: "150 pax" },
          { icon: "", title: "Round", details: "100 pax" },
          { icon: "", title: "U shape", details: "70 pax" },
          { icon: "", title: "Hallow Block", details: "75 pax" },
          { icon: "", title: "ClassRoom", details: "60 pax" },
          { icon: "", title: "BoardRoom", details: "75 pax" },
        ],
      },
      {
        id: 3,
        title: "Rato Baithak",
        subtitle: "",
        description:
          "Our Rato Baithak hall is a spacious and elegant room with upholstered walls and state-of-the-art conference aids. Skyline Hall and Rato Baithak are conveniently located on the same floor.",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/C0Ne4-rato.jpg",
            alt: "Rato Baithak",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/L54GZ-rato1.jpg",
            alt: "Rato Baithak",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/mtShI-rato3.jpg",
            alt: "Rato Baithak",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/m0WlX-rato2.jpg",
            alt: "Rato Baithak",
          },
        ],
        details: {
          Size: { icon: TbResize, value: "2138.75 sq. feet" },
        },
        setup: [
          { icon: "", title: "Theatre", details: "150 pax" },
          { icon: "", title: "Cluster", details: "70 pax" },
          { icon: "", title: "Cocktail", details: "150 pax" },
          { icon: "", title: "Round", details: "100 pax" },
          { icon: "", title: "U shape", details: "70 pax" },
          { icon: "", title: "Hallow Block", details: "75 pax" },
          { icon: "", title: "ClassRoom", details: "60 pax" },
          { icon: "", title: "BoardRoom", details: "75 pax" },
        ],
      },
      {
        id: 4,
        title: "Green Room",
        subtitle: "",
        description:
          "If you want to have a private party or a confidential business discussion, our Green Room, strategically secluded on the third floor of the hotel is the best place for you.",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/VyxO5-green4.jpg",
            alt: "Green Room",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/W1Xdo-green2.jpg",
            alt: "Green Room",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/kgEIc-green1.jpg",
            alt: "Green Room",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/OCBgi-green3.jpg",
            alt: "Green Room",
          },
        ],
        details: {
          Size: { icon: TbResize, value: "938 sq. feet" },
        },
        setup: [
          { icon: "", title: "Theatre", details: "50 pax" },
          { icon: "", title: "Cluster", details: "40 pax" },
          { icon: "", title: "Cocktail", details: "60 pax" },
          { icon: "", title: "Round", details: "50 pax" },
          { icon: "", title: "U shape", details: "30 pax" },
          { icon: "", title: "Hallow Block", details: "35 pax" },
          { icon: "", title: "ClassRoom", details: "27 pax" },
          { icon: "", title: "BoardRoom", details: "35 pax" },
        ],
      },
      {
        id: 5,
        title: "Regent Hall",
        subtitle: "",
        description:
          "Welcome to Regent Hall at Hotel Himalaya, where sophistication meets productivity. With advanced amenities like a whiteboard, flip chart, and soft board, we ensure seamless communication.",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/ukxkK-regenthall.jpg",
            alt: "Regent Hall",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/cObai-regent3.jpg",
            alt: "Regent Hall",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/FxLTG-regent1.jpg",
            alt: "Regent Hall",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/W7Ge1-regent2.jpg",
            alt: "Regent Hall",
          },
        ],
        details: {
          Size: { icon: TbResize, value: "2109 sq. feet" },
        },
        setup: [
          { icon: "", title: "Theatre", details: "100 pax" },
          { icon: "", title: "Cluster", details: "40 pax" },
          { icon: "", title: "Cocktail", details: "60 pax" },
          { icon: "", title: "Round", details: "50 pax" },
          { icon: "", title: "U shape", details: "30 pax" },
          { icon: "", title: "Hallow Block", details: "35 pax" },
          { icon: "", title: "ClassRoom", details: "27 pax" },
          { icon: "", title: "BoardRoom", details: "35 pax" },
        ],
      },
      {
        id: 6,
        title: "PDR",
        subtitle: "",
        description:
          "A private dining area is a reserved space within a restaurant for exclusive events too, providing a more personalized setting for occasions like business meetings or family celebrations.",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/Ndkc8-pdr1.jpg",
            alt: "PDR",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/c91Sv-event_pdr2.jpg",
            alt: "PDR",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/k6bcI-event_pdr3.jpg",
            alt: "PDR",
          },
        ],
        details: {
          Size: { icon: TbResize, value: "160 sq. feet" },
        },
        setup: [{ icon: "", title: "BoardRoom", details: "5-10 pax" }],
      },
      {
        id: 7,
        title: "Board Room",
        subtitle: "",
        description:
          "Step into The Board Room, where every detail is tailored to elevate your business gatherings. From sleek design to cutting-edge amenities, unlock the perfect space for productive meetings and inspired collaborations.",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/hpG39-board.jpg",
            alt: "Board Room",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/hpG39-board.jpg",
            alt: "Board Room",
          },
        ],
        details: {
          Size: { icon: TbResize, value: "317.25 sq. feet" },
        },
        setup: [{ icon: "", title: "Board Setup", details: "16 pax" }],
      },
      {
        id: 8,
        title: "Palm Gardens",
        subtitle: "",
        description:
          "Step into the Palm Garden at Hotel Himalaya, where tranquility reigns amidst verdant palms. This serene enclave invites relaxation, reflection, and leisurely exploration. Immerse yourself in a harmonious blend of natural beauty and comfort",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/pcRdQ-palm_garden.jpg",
            alt: "Palm Gardens",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/pcRdQ-palm_garden.jpg",
            alt: "Palm Gardens",
          },
        ],
        details: {
          Size: { icon: TbResize, value: "9000 sq. feet" },
        },
        setup: [
          { icon: "", title: "Cocktail", details: "700 pax" },
          { icon: "", title: "Round Table", details: "300 pax" },
        ],
      },
      {
        id: 9,
        title: "Temple Garden",
        subtitle: "",
        description:
          "Explore the enchanting Temple Garden at Hotel Himalaya, a peaceful sanctuary adorned with flora rich in symbolism. This garden is a tranquil refuge for those seeking solace and inspiration.",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/B2XAQ-temple_garden.jpg",
            alt: "Temple Garden",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/B2XAQ-temple_garden.jpg",
            alt: "Temple Garden",
          },
        ],
        details: {
          Size: { icon: TbResize, value: "3900 sq. feet" },
        },
        setup: [
          { icon: "", title: "Cocktail", details: "150 pax" },
          { icon: "", title: "Round Table", details: "100 pax" },
        ],
      },
      {
        id: 10,
        title: "Basecamp Garden",
        subtitle: "",
        description:
          "Welcome to the Basecamp Garden, your outdoor haven for rest and friendly gatherings. Inspired by the adventurous spirit of a basecamp, this garden is the heart of social life, a place to relax and connect.",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/I8nKt-garden1.jpg",
            alt: "Basecamp Garden",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/I8nKt-garden1.jpg",
            alt: "Basecamp Garden",
          },
        ],
        details: {
          Size: { icon: TbResize, value: "5880 sq. feet" },
        },
        setup: [
          { icon: "", title: "Cocktail", details: "200 pax" },
          { icon: "", title: "Round Table", details: "150 pax" },
        ],
      },
    ],
    amenities: [
      { icon: TbWifi, title: "High Speed Wifi" },
      { icon: TbDeviceSpeaker, title: "PA System" },
      { icon: TbMicrophone, title: "Microphone" },
      { icon: TbDeviceProjector, title: "Projector" },
      { icon: TbAirConditioning, title: "Air Conditioner" },
      { icon: TbDesk, title: "Furniture" },
      { icon: TbArmchair, title: "Chair" },
      { icon: TbChalkboard, title: "Screen Board" },
      { icon: PiProjectorScreenBold, title: "Flip chart" },
      { icon: TbPinned, title: "Soft (pin) board" },
      { icon: TbPrinter, title: "Printing Service" },
      { icon: TbVideo, title: "Video Conferencing" },
    ],
  };

  const { banner, title, subtitle, description, slogan, hallCategories } =
    hallContents;
  return (
    <>
      <Banner
        banner={banner}
        title={title}
        description={description}
        page="Events"
      />
      {/* <EnquiryNow /> */}

      <main>
        <div className="container space-y-32">
          <div className="text-center space-y-6 px-24">
            <span className="uppercase">{slogan}</span>
            <h3 className="text-3xl leading-snug">{subtitle}</h3>
          </div>
        </div>
        <div className="space-y-32 grid grid-cols-2 gap-12">
          {hallCategories.map((hall) => (
            <HallComponent key={hall.id} page="Hall" content={hall} />
          ))}
        </div>

        <div className="mt-40">
          <div className="text-center space-y-6 px-24">
            <h3 className="text-3xl leading-snug mb-20">Hall Amenities</h3>
          </div>
          <div className="grid grid-cols-4 gap-12">
            {hallContents.amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <amenity.icon className="text-3xl text-gold" />
                <span>{amenity.title}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default HallPage;
