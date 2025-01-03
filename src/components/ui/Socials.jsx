import React from "react";
import {
  logo,
  MdFacebook,
  RiInstagramFill,
  BiLogoTripAdvisor,
  ClickableLink,
} from "../../constants/data";
import { Link } from "react-router-dom";

const Socials = ({ toggleMenu }) => {
  const contactInfo = [
    {
      id: "location",
      title: "Kupondol Height, Lalitpur, Nepal",
      href: "https://www.google.com/maps/place/Hotel+Himalaya",
    },
    {
      id: "phone",
      title: "+977 01-5423900",
      href: "tel:+977 01-5423900",
    },
    {
      id: "email",
      title: "info@hotelhimalaya.com",
      href: "mailto:info@hotelhimalaya.com",
    },
  ];
  const socialLinks = [
    {
      href: "https://www.facebook.com/HotelHimalayaPatan/",
      icon: MdFacebook,
      title: "Facebook",
    },
    {
      href: "https://www.instagram.com/hotelhimalaya_lalitpur/",
      icon: RiInstagramFill,
      title: "Instagram",
    },
    {
      href: "https://www.tripadvisor.com/Hotel_Review-g315764-d316826-Reviews-Hotel_Himalaya-Patan_Lalitpur_Kathmandu_Valley_Bagmati_Zone_Central_Region.html",
      icon: BiLogoTripAdvisor,
      title: "TripAdvisor",
    },
  ];

  return (
    <>
      <div className="col-span-1 flex flex-col items-center text-center gap-4">
        <ClickableLink to="/" onClick={toggleMenu}>
          <img
            src={logo}
            alt="Hotel Himalaya"
            className="w-28 h-20 md:w-44 md:h-32 object-contain"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7449%) hue-rotate(190deg) brightness(107%) contrast(96%)",
            }}
          />
        </ClickableLink>

        <ul className="space-y-1">
          {contactInfo.map((contact, index) => (
            <li key={index}>
              <Link
                to={contact.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm"
              >
                {contact.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center justify-center gap-4 text-2xl my-6">
          {socialLinks.map((social, index) => (
            <li key={index} className="group">
              <Link
                to={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.title}
                title={social.title}
              >
                <social.icon className="text-2xl group-hover:scale-125 transition-all duration-300 ease-linear" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Socials;
