import React from "react";
import Slider from "../components/Slider";
import BreadCrumb from "../components/ui/BreadCrumb";
import Video from "../components/ui/Video";
import Nearby from "../components/ui/Nearby";
import ContactForm from "../components/ui/ContactForm";
import { HiArrowLongRight } from "react-icons/hi2";
import Accordian from "../components/ui/Accordian";

import { MdOutlineBed, MdOutlineBrunchDining } from "react-icons/md";
import { TbCoffee, TbCalendarEvent } from "react-icons/tb";

import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { TbClipboard, TbClock } from "react-icons/tb";

import Socials from "../components/ui/Socials";
import Banner from "../components/Banner";

const ContactPage = () => {
  const slides = [
    {
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/GDLNu-03.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
    },
    {
      url: "https://hotelhimalaya.com/project/images/slideshow/id4vO-04.jpg",
    },
  ];

  const contactAccordianContents = [
    {
      icon: MdOutlineBed,
      category: "Accommodation Booking & Information",
      description: "Contacts for booking rooms and information",
      information:
        "Our 126 well-appointed rooms offer every comfort the traveler may need and we have a full range of amenities for our distinguished guests. Indulge in serene luxury with meticulously curated rooms, modern amenities, and breathtaking views for an unforgettable tailored stay.",
      details: [
        {
          icon: TbClock,
          title: "Operating Hours",
          description: "Sunday - Saturday",
          additionalInfo: "08:00 AM - 10:00 PM",
          type: "text",
        },
        {
          icon: MdOutlineLocalPhone,
          title: "Phone",
          description: "+977-9851139592",
          buttonLabel: "Call",
          href: "tel:+977-9851139592",
          type: "link",
        },
        {
          icon: MdOutlineMailOutline,
          title: "Email",
          description: "reservation@hotelhimalaya.com",
          buttonLabel: "Mail",
          href: "mailto:reservation@hotelhimalaya.com",
          type: "link",
        },
        {
          icon: TbClipboard,
          title: "Online Booking",
          buttonLabel: "Book",
          href: "https://hotelhimalaya.com//result.php?hotel_code=q7x6fU",
          type: "button",
        },
      ],
    },
    {
      icon: TbCalendarEvent,
      category: "Group Reservation & Events",
      description: "Hall booking for corporate events and family occasions",
      information:
        "Hotel Himalaya, an idyllic setting for events that promise enchantment and elegance in every moment. Our conference and meeting halls have seen and hosted many international conventions, workshops and special banquets. Our clienteles include many NGO's and INGO's like the UN, corporate houses and prominent families seeking special venue / menu for their celebration.",
      details: [
        {
          icon: TbClock,
          title: "Operating Hours",
          description: "Monday - Sunday",
          additionalInfo: "08:00 AM - 5:00 PM",
          type: "text",
        },
        {
          icon: MdOutlineLocalPhone,
          title: "Phone",
          description: "+977-9801810708",
          buttonLabel: "Call",
          href: "tel:+977-9801810708",
          type: "link",
        },
        {
          icon: MdOutlineMailOutline,
          title: "Email",
          description: "banquetsales@hotelhimalaya.com",
          buttonLabel: "Mail",
          href: "mailto:banquetsales@hotelhimalaya.com",
          type: "link",
        },
        {
          icon: TbClipboard,
          title: "Online Reservation or Enquiry",
          buttonLabel: "Book",
          href: "/events",
          type: "button",
        },
      ],
    },
    {
      icon: MdOutlineBrunchDining,
      category: "Dine & Recreation Booking",
      description: "Table reservation and recreation facilities information",
      information:
        "Immerse yourself in an unforgettable dining experience where culinary artistry meets exquisite ambiance. Savor gourmet dishes crafted from the finest ingredients, each plate a masterpiece. Our elegant decor and attentive service set the stage for a perfect evening. Join us for a culinary journey that delights the senses and creates lasting memories.",
      details: [
        {
          icon: TbClock,
          title: "Operating Hours",
          description: "Monday - Sunday",
          additionalInfo: "08:00 AM - 11:00 PM",
          type: "text",
        },
        {
          icon: MdOutlineLocalPhone,
          title: "Phone",
          description: "+977-9851339602",
          buttonLabel: "Call",
          href: "tel:+977-9851339602",
          type: "link",
        },
        {
          icon: MdOutlineMailOutline,
          title: "Email",
          description: "info@hotelhimalaya.com",
          buttonLabel: "Mail",
          href: "mailto:info@hotelhimalaya.com",
          type: "link",
        },
        {
          icon: TbClipboard,
          title: "Online Reservation or Enquiry",
          buttonLabel: "Book",
          href: "/dine",
          type: "button",
        },
      ],
    },
    {
      icon: TbCoffee,
      category: "Patan Museum Cafe Booking",
      description: "Cafe booking and information",
      information:
        "Begin your day with a global culinary exploration at the Patan Museum Café, a UNESCO World Heritage site, where a lavish buffet awaits. Operated by Hotel Himalaya and just a 6-minute journey away, our café offers a feast for the senses with authentic flavors spanning from Terai to the Himalayas, all complemented by breathtaking views and the option to dine under the sun’s warm embrace.",
      details: [
        {
          icon: TbClock,
          title: "Operating Hours",
          description: "Monday - Sunday",
          additionalInfo: "08:00 AM - 11:00 PM",
          type: "text",
        },
        {
          icon: MdOutlineLocalPhone,
          title: "Phone",
          description: "+977-9851339602",
          buttonLabel: "Call",
          href: "tel:+977-9851339602",
          type: "link",
        },
        {
          icon: MdOutlineMailOutline,
          title: "Email",
          description: "pmc@hotelhimalaya.com",
          buttonLabel: "Mail",
          href: "mailto:pmc@hotelhimalaya.com",
          type: "link",
        },
        {
          icon: TbClipboard,
          title: "Online Reservation or Enquiry",
          buttonLabel: "Book",
          href: "/dine",
          type: "button",
        },
      ],
    },
  ];
  return (
    <>
      {/* <div className="relative">
        <Slider
          slides={slides}
          containerClassName="w-full h-screen"
          buttonClassName="hero-slider-button"
          imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[2s]"
          trueClassName="opacity-100"
          falseClassName="opacity-0"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 select-none pointer-events-none"></div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-5">
          <BreadCrumb page="Contact" />
        </div>
      </div> */}

      <Banner
        banner="https://s3-alpha-sig.figma.com/img/768f/7e1f/d49cd3ddfce19581c959d4800854ec35?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-V8zu~UhDiVWjhawgd5oynAoQ9ptZamLNqK2maePyeICfqy1FDsqGWs4TjjHwiQGaT0KqJ-Ehi9IVRZJx-qz5ZCTvLZPEZClnHxTihdjgVSl5DkKPZYtVjvlAFTIPIOdZRKWrc28hZWavi3ntDlBri14tjSB7FuMfB0CgFRLRGKfLbUqcPQrM~JT-hG0v-oVkOjJH88R5GAdnFz9uaW9zJduJllpKtX0yqMpK0VUohwMXIodk~gKc4OBYVNrSyf8b7z1uesenciYPULsJomMst3pmXKA1QcFVz9cMiHY~0wZp-lCTbemUwivyxInlAVa6TcVgF17~t~dtRchxGyug__"
        title="Contacts"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quos delectus iusto autem obcaecati?"
        page="Contact"
      />

      <main>
        <div className="container mt-12">
          <div className="text-center space-y-6 px-24">
            <span className="uppercase">True Nepalese Hospitality</span>
            <h3 className="text-3xl leading-snug">
              Would you like to find out how to get to us or you have a question
              you need to ask? Call us or e-mail us, here are all the contact
              information you need to know.
            </h3>
          </div>

          <div className="grid grid-cols-3 items-center content-center gap-12 my-40">
            <div className="col-span-1 flex flex-col items-center text-center gap-4">
              <Socials />
            </div>

            <div className="col-span-2 outline outline-1 outline-white -outline-offset-[10px]">
              <Video
                videoClassName="w-full h-full object-cover"
                poster="https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg"
                video="https://hotelhimalaya.com/template/web/img/about/HOTEL_HIMALAYA.mp4"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <Accordian accordians={contactAccordianContents} />

          <div className="max-w-5xl mx-auto my-32 border border-gold p-3">
            <ContactForm />
          </div>
        </div>
        <Nearby />

        <div className="grid grid-cols-3 content-center gap-16 mt-28 p-8">
          <div className="col-span-1 content-center w-full">
            <h3 className="text-3xl leading-snug">Discover Hotel Himalaya</h3>
            <p className="text-justify md:text-pretty text-base mt-4 mb-20">
              Our hotel offers 126 well-appointed rooms, a 180-degree panoramic
              view of the Himalayas, and 'Café Horizon' with a variety of dining
              options. Enjoy in-room dining, a tennis court, swimming pool, and
              health club. We serve hygienic and timely meals with Indian,
              Continental, and Chinese cuisine. Host events in one of our 12
              versatile event halls for business or family occasions.
            </p>
            <h3 className="text-2xl mb-6">Facilites</h3>
            <ul className="flex items-center gap-6 flex-wrap">
              <li className="bg-goldLight/50 px-4 py-2 rounded-2xl">
                Accommodation
              </li>
              <li className="bg-goldLight/50 px-4 py-2 rounded-2xl">
                Fine Dine
              </li>
              <li className="bg-goldLight/50 px-4 py-2 rounded-2xl">
                Event Halls
              </li>
              <li className="bg-goldLight/50 px-4 py-2 rounded-2xl">
                Steam, Sauna, Jacuzzi
              </li>
              <li className="bg-goldLight/50 px-4 py-2 rounded-2xl">
                Swimming Pool
              </li>
              <li className="bg-goldLight/50 px-4 py-2 rounded-2xl">
                Health Center
              </li>
              <li className="bg-goldLight/50 px-4 py-2 rounded-2xl">
                Lawn Tennis Court
              </li>
            </ul>
          </div>
          <div className="col-span-2 grid grid-cols-5 gap-8 p-8">
            <div className="col-span-2 content-end relative">
              <img
                src="https://s3-alpha-sig.figma.com/img/4e1d/2131/7f8b9696b68e3c854fbc935f98175f3d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IfqHj9kfHZoaYjo7IzhKxyNWC4OvkhivogJYUW2IysDdUzA2jTblBUW~7-2ff6rBbZ61aYoaNh3JYI7-IXghL6Jg366LMXfLoomjfJJ0wg7BhyAwMtvfVI~Z30fwKoJo9KochbMEkeOZOaOUK3iVRweaAtZkbMz3IBXZg2Gsp4aUKMzkXhj2tQ9yrBBr8J5GgswtIa1Tll1DfDoZUwf6I0g7QwC75oK8zfUpNJU92TAZhZvSlVnbXrn~M66sLUojoNpqVO7fpCdev1WFZ9p7oKUKplG3u~H5930U29Z3XkeWdRFZGAmnaAn0X~jjXdMYllnZdDdIR5dsqVxfYAGoTA__"
                alt=""
                className="rounded-2xl"
              />
              <button
                type="button"
                className="w-auto mx-auto text-center mt-3 bg-gradient py-0 px-4 rounded-full z-10 hover-outline flex items-center justify-center group"
                title="Occasions"
                aria-label="Occasions"
              >
                Occasions
                <HiArrowLongRight className="ml-2 group-hover:translate-x-2 transition-all duration-300" />
              </button>
            </div>
            <div className="col-span-3 relative">
              <img
                src="https://hotelhimalaya.com/images/package/galleryimages/RdTdO-slider1.jpg"
                alt=""
                className="rounded-2xl"
              />
              <button
                type="button"
                className="w-auto mx-auto text-center mt-3 bg-gradient py-0 px-4 rounded-full z-10 hover-outline flex items-center justify-center group"
                title="Fine Dine"
                aria-label="Fine Dine"
              >
                Fine Dine
                <HiArrowLongRight className="ml-2 group-hover:translate-x-2 transition-all duration-300" />
              </button>
            </div>

            <div className="col-span-3 relative">
              <img
                src="https://hotelhimalaya.com/images/package/galleryimages/PtfRB-room1.jpg"
                alt=""
                className="rounded-2xl"
              />
              <button
                type="button"
                className="w-auto mx-auto text-center mt-3 bg-gradient py-0 px-4 rounded-full z-10 hover-outline flex items-center justify-center group"
                title="Accommodation"
                aria-label="Accommodation"
              >
                Accommodation
                <HiArrowLongRight className="ml-2 group-hover:translate-x-2 transition-all duration-300" />
              </button>
            </div>
            <div className="col-span-2 content-start relative">
              <img
                src="https://hotelhimalaya.com/images/package/galleryimages/WNbtI-pool.jpg"
                alt=""
                className="rounded-2xl"
              />
              <button
                type="button"
                className="w-auto mx-auto text-center mt-3 bg-gradient py-0 px-4 rounded-full z-10 hover-outline flex items-center justify-center group"
                title="Recreation"
                aria-label="Recreation"
              >
                Recreation
                <HiArrowLongRight className="ml-2 group-hover:translate-x-2 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
