import React from "react";
import FloatingButtonWithNavbar from "./FloatingButtonWithNavbar";
import { MdOutlineCardMembership } from "react-icons/md";
import IconRenderer from "../IconRenderer";

const MembershipForm = ({ enquiryFormFields }) => {
  const getTodayDate = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    if (dd < 10) {
      dd = `0${dd}`;
    }

    if (mm < 10) {
      mm = `0${mm}`;
    }

    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <FloatingButtonWithNavbar
      buttonIcon={<MdOutlineCardMembership className="text-base" />}
      buttonText="Membership"
      buttonStyles="bg-gradient px-6 py-2 rounded-full hover-outline flex items-center justify-center gap-0"
      navbarStyles="bg-white px-2"
      title="Membership"
      ariaLabel="Membership"
    >
      <form className="mt-4">
        <div className="grid sm:grid-cols-1 gap-8">
          {enquiryFormFields.map((field) => (
            <div
              key={field.id}
              className="relative z-0 flex items-center justify-between group"
            >
              <input
                type={field.type}
                name={field.id}
                className="text-base block px-0 py-3 w-full text-black bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer rounded-none"
                placeholder=""
                required={field.id !== "message"}
                min={field.type === "date" ? getTodayDate() : undefined}
              />
              <label
                htmlFor={field.id}
                className="absolute text-sm text-black/80 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {field.label}
              </label>
              <IconRenderer
                iconName={field.icon}
                className="absolute right-0 text-black/90 text-2xl p-1 bg-white pointer-events-none"
              />
            </div>
          ))}
        </div>
        <div className="mt-16 flex items-center justify-between flex-col md:flex-row gap-12">
          <button className="w-full bg-gradient px-6 py-2 rounded-full hover-outline">
            Submit
          </button>
        </div>
      </form>
    </FloatingButtonWithNavbar>
  );
};

export default MembershipForm;
