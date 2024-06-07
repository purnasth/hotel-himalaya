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

import { logo } from "../constants/data";

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

  const accordionItems = [
    {
      icon: MdOutlineBed,
      title: "Accommodation Booking & Information",
      subtitle: "Contacts for booking rooms and information",
      content:
        "Our return policy allows you to return items within 30 days of purchase. Please keep your receipt for a full refund.",
    },
    {
      icon: TbCalendarEvent,
      title: "Group Reservation & Events",
      subtitle: "Hall booking for corporate events and family occasions",
      content:
        "Yes, we offer 24/7 technical support. You can contact us anytime via email or phone.",
    },
    {
      icon: MdOutlineBrunchDining,
      title: "Dine & Recreation Booking",
      subtitle: "Table booking and recreation facilities information",
      content:
        "We are located at 123 Main Street, Springfield. Our store hours are Monday to Friday, 9 AM to 5 PM.",
    },
    {
      icon: TbCoffee,
      title: "Patan Museum Cafe Booking",
      subtitle: "Cafe booking and information",
      content:
        "We are located at 123 Main Street, Springfield. Our store hours are Monday to Friday, 9 AM to 5 PM.",
    },
  ];
  return (
    <>
      <main></main>
      <main></main>

      <div className="container">
        <Accordian items={accordionItems} />
      </div>

      <div className="relative">
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
      </div>

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
              <a href="/">
                <img
                  src={logo}
                  alt="Hotel Himalaya"
                  className="w-44 h-32 object-contain"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7449%) hue-rotate(190deg) brightness(107%) contrast(96%)",
                  }}
                />
              </a>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://www.google.com/maps/place/Hotel+Himalaya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kupondol Height, Lalitpur, Nepal
                  </a>
                </li>
                <li>
                  <a href="tel:+977 01-5423900">+977 01-5423900</a>
                </li>
                <li>
                  <a href="mailto:info@hotelhimalaya.com">
                    info@hotelhimalaya.com
                  </a>
                </li>
              </ul>
              <ul className="flex items-center justify-center gap-4 text-2xl my-6">
                <li>
                  <a href="https://www.facebook.com/HotelHimalayaPatan/">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="text-2xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/hotelhimalaya_lalitpur/">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="text-2xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.tripadvisor.com/Hotel_Review-g315764-d316826-Reviews-Hotel_Himalaya-Patan_Lalitpur_Kathmandu_Valley_Bagmati_Zone_Central_Region.html">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="text-2xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.31 10.28a2.5 2.5 0 1 0 2.5 2.49 2.5 2.5 0 0 0-2.5-2.49zm0 3.8a1.31 1.31 0 1 1 0-2.61 1.31 1.31 0 1 1 0 2.61zm7.38-3.8a2.5 2.5 0 1 0 2.5 2.49 2.5 2.5 0 0 0-2.5-2.49zM17 12.77a1.31 1.31 0 1 1-1.31-1.3 1.31 1.31 0 0 1 1.31 1.3z" />
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm7.38 10.77a3.69 3.69 0 0 1-6.2 2.71L12 16.77l-1.18-1.29a3.69 3.69 0 1 1-5-5.44l-1.2-1.3H7.3a8.33 8.33 0 0 1 9.41 0h2.67l-1.2 1.31a3.71 3.71 0 0 1 1.2 2.72z" />
                      <path d="M14.77 9.05a7.19 7.19 0 0 0-5.54 0A4.06 4.06 0 0 1 12 12.7a4.08 4.08 0 0 1 2.77-3.65z" />
                    </svg>
                  </a>
                </li>
              </ul>
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
        <div className="max-w-4xl mx-auto my-32 border border-gold p-3">
          <ContactForm />
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
