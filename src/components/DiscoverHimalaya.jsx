import React from "react";
import { Link } from "react-router-dom";

import {
  withDataFetching,
  IconRenderer,
  TbCircleArrowRight,
} from "../constants/data";

const DiscoverHimalaya = ({ data }) => {
  const { title, description, facilities, discover } = data;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 content-center gap-y-12 lg:gap-16 mt-20 md:mt-28 lg:p-8">
        <div className="col-span-1 content-center w-full">
          <h3 className="text-xl md:text-2xl lg:text-3xl md:leading-normal lg:leading-snug xl:leading-relaxed">
            {title}
          </h3>
          <p className="text-sm text-justify md:text-base mt-4 mb-12 md:mb-20">
            {description}
          </p>
          <h3 className="text-xl md:text-2xl mb-6">Facilities</h3>
          <ul className="flex items-center gap-3 md:gap-6 flex-wrap">
            {facilities.map(({ id, title, icon }) => (
              <li
                key={id}
                className="bg-goldLight/50 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs md:text-base"
              >
                <IconRenderer iconName={icon} className="text-black" />
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 xl:grid-cols-5 gap-8 xl:p-8">
          {discover.map(({ id, title, imageUrl, route }) => {
            const colSpanClass =
              id === 1 || id === 4 ? "xl:col-span-2" : "xl:col-span-3";
            const contentClass =
              id === 1
                ? "content-center xl:content-end"
                : id === 4
                ? "content-center xl:content-start"
                : "";
            const imageHeightClass =
              colSpanClass === "xl:col-span-3"
                ? "h-80 3xl:h-96"
                : "h-52 3xl:h-72";
            return (
              <div
                key={id}
                className={`${colSpanClass} ${contentClass} relative justify-self-center xl:justify-self-auto `}
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className={`object-cover rounded-2xl ${imageHeightClass}`}
                  draggable="false"
                />
                <div className="flex items-center justify-center">
                  <Link
                    to={route}
                    className="w-auto mx-auto text-center mt-3 bg-gradient py-0 px-4 rounded-full z-10 hover-outline flex items-center group"
                    title={title}
                    aria-label={title}
                  >
                    {title}
                    <TbCircleArrowRight className="ml-2 group-hover:translate-x-2 transition-all duration-300" />
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
