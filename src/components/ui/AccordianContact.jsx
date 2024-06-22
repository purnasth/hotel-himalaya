import React from "react";
import { Link } from "react-router-dom";
import IconRenderer from "../IconRenderer";

const AccordianContact = ({ accordiansContact }) => {
  const { information, details } = accordiansContact;

  return (
    <div className="py-12">
      <p className="px-24 mb-12 text-justify">{information}</p>
      {details.map((item, index) => (
        <div key={index} className="">
          {item.type === "text" ? (
            <div className="flex items-center justify-between w-full mb-12 px-24">
              <div className="flex items-center gap-12">
                <IconRenderer
                  iconName={item.icon}
                  className="text-xl text-goldDark"
                />
                <h5 className="text-2xl">{item.description}</h5>
              </div>
              <button className="text-xl flex items-center justify-center gap-2">
                {item.additionalInfo}
              </button>
            </div>
          ) : (
            <div className="bg-goldDark/10 mx-12">
              <div className="flex items-center flex-col border border-goldDark/30">
                <div
                  key={index}
                  className={`flex items-center justify-between w-full py-6 px-12`}
                >
                  <div className="flex items-center gap-12">
                    <IconRenderer
                      iconName={item.icon}
                      className="text-xl text-goldDark"
                    />
                    <h5 className="text-2xl">{item.title}</h5>
                    {item.type === "link" ? (
                      <a href={item.href}>{item.description}</a>
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
