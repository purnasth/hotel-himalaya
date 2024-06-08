import React from "react";
import logo from "../../assets/logo.svg";
import { getIconComponent } from "../../utils/iconLoader.js";

const Socials = ({ data }) => {
  return (
    <>
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
            href={data.intro?.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.intro?.address}
          </a>
        </li>
        {data.intro?.phones?.map((phone, index) => (
          <li key={index}>
            <a href={`tel:${phone}`}>{phone}</a>
          </li>
        ))}
        {data.intro?.emails?.map((email, index) => (
          <li key={index}>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center gap-4 text-2xl my-6">
        {data.intro?.socialLinks?.map((link, index) => {
          const IconComponent = getIconComponent(link.icon);
          return (
            <li key={index}>
              <a href={link.url}>
                {IconComponent ? (
                  <IconComponent className="text-2xl" />
                ) : (
                  <img
                    src={link.icon}
                    alt={link.title}
                    className="size-6 object-contain"
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Socials;
