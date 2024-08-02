import React from "react";
import { Link } from "react-router-dom";
import { IconRenderer } from "../../constants/data";

const AccordianContact = ({ accordiansContact }) => {
  const { information, details } = accordiansContact;

  return (
    <div className="py-8 md:py-12">
      <p className="px-5 md:px-24 mb-12 text-justify text-sm md:text-base">
        {information}
      </p>
      {details.map((item, index) => (
        <div key={index} className="">
          {item.type === "text" ? (
            <div className="flex items-center justify-between w-full mb-12 px-5 md:px-24">
              <div className="flex items-center justify-start gap-4 md:gap-12">
                <IconRenderer
                  iconName={item.icon}
                  className="text-base md:text-xl lg:text-2xl text-goldDark"
                />
                <h5 className="text-base md:text-lg xl:text-2xl font-semibold md:font-medium">
                  {item.description}
                </h5>
              </div>
              <button className="text-sm md:text-base xl:text-2xl flex items-center justify-center gap-2">
                {item.additionalInfo}
              </button>
            </div>
          ) : (
            <div className="bg-goldDark/10 mx-4 md:mx-12">
              <div className="flex items-center flex-col border border-goldDark/30">
                <div
                  key={index}
                  className={`flex items-center justify-between w-full py-4 md:py-6 px-6 md:px-12`}
                >
                  <div className="flex items-center justify-start gap-4 md:gap-12">
                    <IconRenderer
                      iconName={item.icon}
                      className="text-base md:text-xl lg:text-2xl text-goldDark"
                    />
                    <h5 className="text-base md:text-lg xl:text-2xl font-semibold md:font-medium">
                      {item.title}
                    </h5>
                    {item.type === "link" ? (
                      <Link
                        to={item.href}
                        className="hidden sm:block text-xs md:text-lg xl:text-2xl font-semibold md:font-medium"
                      >
                        {item.description}
                      </Link>
                    ) : null}
                  </div>
                  <Link
                    to={item.href}
                    className="bg-gradient px-6 py-2 rounded-full hover-outline flex items-center justify-center gap-2"
                  >
                    {item.buttonLabel}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordianContact;
