import React from "react";
import { Link } from "react-router-dom";

import {
  withDataFetching,
  IconRenderer,
  HiArrowLongRight,
} from "../constants/data";

const DiscoverHimalaya = ({ data }) => {
  const { title, description, facilities, discover } = data;

  return (
    <>
      <div className="grid grid-cols-3 content-center gap-16 mt-28 p-8">
        <div className="col-span-1 content-center w-full">
          <h3 className="text-3xl leading-snug">{title}</h3>
          <p className="text-justify md:text-pretty text-base mt-4 mb-20">
            {description}
          </p>
          <h3 className="text-2xl mb-6">Facilities</h3>
          <ul className="flex items-center gap-6 flex-wrap">
            {facilities.map(({ id, title, icon }) => (
              <li
                key={id}
                className="bg-goldLight/50 px-4 py-2 rounded-2xl flex items-center gap-2"
              >
                <IconRenderer
                  iconName={icon}
                  className="text-base text-black"
                />
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 grid grid-cols-5 gap-8 p-8">
          {discover.map(({ id, title, imageUrl, route }) => {
            const colSpanClass =
              id === 1 || id === 4 ? "col-span-2" : "col-span-3";
            const contentClass =
              id === 1 ? "content-end" : id === 4 ? "content-start" : "";
            const imageHeightClass =
              colSpanClass === "col-span-3" ? "h-80" : "h-52";
            return (
              <div
                key={id}
                className={`${colSpanClass} ${contentClass} relative`}
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className={`object-cover rounded-2xl ${imageHeightClass}`}
                />
                <div className="flex items-center justify-center">
                  <Link
                    to={route}
                    className="w-auto mx-auto text-center mt-3 bg-gradient py-0 px-4 rounded-full z-10 hover-outline flex items-center group"
                    title={title}
                    aria-label={title}
                  >
                    {title}
                    <HiArrowLongRight className="ml-2 group-hover:translate-x-2 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default withDataFetching(DiscoverHimalaya, "/api/discoverHimalaya.json");
