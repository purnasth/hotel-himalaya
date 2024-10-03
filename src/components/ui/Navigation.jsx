import React from "react";
import {
  MdPhone,
  TbMailFilled,
  Socials,
  withDataFetching,
  TbArrowNarrowRight,
  ClickableNavLink,
  ClickableLink,
} from "../../constants/data";

// import { TbCrown, TbUser, TbCalendarEvent } from "react-icons/tb";

const Navigation = ({ data, mainClassName, isFooter, toggleMenu }) => {
  const year = new Date().getFullYear();

  return (
    <main
      className={`${mainClassName} py-6 bg-gradient flex md:items-center justify-center`}
    >
      <div className="w-full h-auto">
        <div className="mt-0 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          <div
            className={`${
              isFooter ? "hidden md:block" : ""
            } main-link order-2 md:order-1`}
          >
            <ul className="space-y-4 md:space-y-20">
              {data.mainLinks?.map((link, index) => (
                <li
                  key={index}
                  className="group transition-all duration-300 ease-linear"
                >
                  <ClickableNavLink
                    to={link.url}
                    title={link.title}
                    className="navlinks w-full inline-flex items-center justify-between gap-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl group-hover:ml-2 transition-all duration-300 ease-linear"
                    onClick={toggleMenu}
                  >
                    {link.name}
                    <TbArrowNarrowRight className="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" />
                  </ClickableNavLink>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${
              isFooter ? "hidden md:block" : ""
            } secondary-link order-3 md:order-2`}
          >
            <ul className="space-y-4 md:space-y-8">
              {data.secondaryLinks?.map((link, index) => (
                <li
                  key={index}
                  className="group transition-all duration-300 ease-linear"
                >
                  <ClickableNavLink
                    to={link.url}
                    className="navlinks w-full inline-flex items-center justify-between gap-4 text-sm lg:text-base group-hover:ml-2 transition-all duration-300 ease-linear"
                    onClick={toggleMenu}
                  >
                    {link.name}
                    <TbArrowNarrowRight className="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" />
                  </ClickableNavLink>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${
              isFooter ? "md:hidden xl:block" : "hidden xl:block"
            } booking order-4 md:order-3`}
          >
            {Object.entries(data.bookingInfo || {}).map(
              ([key, info], index) => (
                <div key={index} className="mb-8 md:mb-12">
                  <h4 className="mb-4 md:mb-6 font-bold">{info.title}</h4>
                  <div className="space-y-2">
                    {info.phone && (
                      <div className="flex items-center gap-2">
                        <MdPhone className="icon" />
                        <ClickableLink
                          to={`tel:${info.phone}`}
                          onClick={toggleMenu}
                        >
                          {info.phone}
                        </ClickableLink>
                      </div>
                    )}
                    {info.phones && (
                      <div className="flex items-center gap-2">
                        <MdPhone className="icon" />
                        <ul className="flex items-center gap-3">
                          {info.phones.map((phone, index) => (
                            <li key={index}>
                              <ClickableLink
                                to={`tel:${phone}`}
                                onClick={toggleMenu}
                              >
                                {phone}
                              </ClickableLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <TbMailFilled className="icon" />
                      <ClickableLink
                        to={`mailto:${info.email}`}
                        onClick={toggleMenu}
                      >
                        {info.email}
                      </ClickableLink>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="intro order-1 md:order-4 sm:col-span-2 md:col-span-1">
            <div className="flex flex-col items-center text-center gap-4">
              <Socials toggleMenu={toggleMenu} />
              <div className="hospitality">
                <h4 className="text-lg md:text-xl font-semibold md:font-medium">
                  Hospitality Partners
                </h4>
                <ul className="mt-6 flex items-center justify-center gap-10">
                  {data.hospitalityPartners?.map((partner, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-center gap-3"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        title={partner.name}
                        className="size-10 md:size-16 object-contain"
                        draggable="false"
                      />
                      <label className="text-xs scale-75">{partner.name}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {isFooter && (
          <>
            {/* <hr className="my-8 border-gray-300" /> */}
            <div className="text-sm flex items-center justify-between flex-col md:flex-row gap-6 md:gap-16 md:-translate-y-6 mt-8 md:mt-0">
              <p>
                &copy; {year} {data.copyright?.owner}. All Rights Reserved.
              </p>
              <p className="mr-12">
                Developed by:
                <ClickableLink
                  className="ml-2 font-semibold"
                  to={data.copyright?.developerLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.copyright?.developer}
                </ClickableLink>
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default withDataFetching(Navigation, "/api/footerData.json");
