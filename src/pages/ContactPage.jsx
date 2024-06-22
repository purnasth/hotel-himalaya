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
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/Loader";
import DiscoverHimalaya from "../components/DiscoverHimalaya";

const ContactPage = () => {
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

  const { data, loading, error } = useFetchData("/api/contactData.json");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const {
    banner,
    title,
    description,
    page,
    slogan,
    subdescription,
    slides,
    aboutSlides,
  } = data;

  return (
    <>
      {/* <Banner
        banner={banner}
        title={title}
        description={description}
        page={page}
      /> */}

      <main className="font -serif">
        {/* <div className="container mt-12">
          <div className="text-center space-y-6 px-24">
            <span className="uppercase">{slogan}</span>
            <h3 className="text-3xl leading-snug">{subdescription}</h3>
          </div>

          <div className="grid grid-cols-3 items-center content-center gap-12 my-40">
            <div className="col-span-1 flex flex-col items-center text-center gap-4">
              <Socials />
            </div>

            <div className="col-span-2 outline outline-1 outline-white -outline-offset-[10px]">
              <Video videoClassName="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="container">
          <Accordian accordians={contactAccordianContents} />

          <div className="max-w-5xl mx-auto my-32 border border-gold p-3">
            <ContactForm />
          </div>
        </div>
        <Nearby /> */}

        <DiscoverHimalaya />
      </main>
    </>
  );
};

export default ContactPage;
