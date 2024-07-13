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

const Navigation = ({ data, mainClassName, isFooter, toggleMenu }) => {
  const year = new Date().getFullYear();

  return (
    <main
      className={`${mainClassName} p-6 md:px-12 md:pt-24 2xl:py-32 bg-gradient`}
    >
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="main-link">
            <ul className="space-y-4 md:space-y-20">
              {data.mainLinks?.map((link, index) => (
                <li
                  key={index}
                  className="group transition-all duration-300 ease-linear"
                >
                  <ClickableNavLink
                    to={link.url}
                    title={link.title}
                    className="navlinks w-full inline-flex items-center justify-between gap-4 text-xl md:text-4xl group-hover:ml-2 transition-all duration-300 ease-linear"
                    onClick={toggleMenu}
                  >
                    {link.name}
                    <TbArrowNarrowRight className="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" />
                  </ClickableNavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="secondary-link">
            <ul className="space-y-4 md:space-y-8">
              {data.secondaryLinks?.map((link, index) => (
                <li
                  key={index}
                  className="group transition-all duration-300 ease-linear"
                >
                  <ClickableNavLink
                    to={link.url}
                    className="navlinks w-full inline-flex items-center justify-between gap-4 text-base group-hover:ml-2 transition-all duration-300 ease-linear"
                    onClick={toggleMenu}
                  >
                    {link.name}
                    <TbArrowNarrowRight className="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" />
                  </ClickableNavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="booking">
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
          <div className="intro">
            <div className="flex flex-col items-center text-center gap-4">
              <Socials toggleMenu={toggleMenu} />
              <div className="hospitality">
                <h4 className="text-xl">Hospitality Partners</h4>
                <ul className="mt-6 mb-10 flex items-center justify-center gap-10">
                  {data.hospitalityPartners?.map((partner, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-center gap-3"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        title={partner.name}
                        className="size-16 object-contain"
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
            <div className="text-sm flex items-center justify-between gap-16 -translate-y-6">
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
