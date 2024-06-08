import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import Loader from "../Loader";
import useFetchData from "../../hooks/useFetchData";
import Socials from "./Socials";

const Navigation = ({ mainClassName, isFooter }) => {
  const { data, loading, error } = useFetchData("/api/footerData.json");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
                <li key={index}>
                  <a
                    href={link.url}
                    title={link.title}
                    className="text-xl md:text-4xl"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="secondary-link">
            <ul className="space-y-4 md:space-y-8">
              {data.secondaryLinks?.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
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
                        <MdOutlineLocalPhone className="icon" />
                        <a href={`tel:${info.phone}`}>{info.phone}</a>
                      </div>
                    )}
                    {info.phones && (
                      <div className="flex items-center gap-2">
                        <MdOutlineLocalPhone className="icon" />
                        <ul className="flex items-center gap-3">
                          {info.phones.map((phone, index) => (
                            <li key={index}>
                              <a href={`tel:${phone}`}>{phone}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <IoMailUnreadOutline className="icon" />
                      <a href={`mailto:${info.email}`}>{info.email}</a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="intro">
            <div className="flex flex-col items-center text-center gap-4">
              <Socials />
              <div className="hospitality">
                <h4 className="text-xl">Hospitality Partners</h4>
                <div className="mt-6 mb-10 flex items-center justify-center gap-10">
                  {data.hospitalityPartners?.map((partner, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-3"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        title={partner.name}
                        className="size-16 object-contain"
                      />
                      <label className="text-xs scale-75">{partner.name}</label>
                    </div>
                  ))}
                </div>
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
                <a
                  className="ml-2 font-semibold"
                  href={data.copyright?.developerLink}
                >
                  {data.copyright?.developer}
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Navigation;
