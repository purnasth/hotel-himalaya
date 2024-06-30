import React from "react";
import { TbCircleArrowRight } from "../../constants/data";

const ContactForm = ({ enquiryFormFields }) => {
  return (
    <div className="bg-goldLight/20 p-20 border border-gold">
      <p className="text-lg mb-12">
        Can't find the contact and information you're looking for? Write to us
        via this quick form.
      </p>
      <form className="flex flex-wrap justify-between">
        {enquiryFormFields.map((field) => (
          <div key={field.id} className="w-full md:w-1/2">
            <ul className="py-8 flex flex-col gap-4">
              <li className="w-full pr-2">
                <label htmlFor={field.id} className="text-base text-black/80">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    rows="4"
                    // placeholder={field.placeholder}
                    className="text-xl w-[200%] mt-2 py-2 border-b border-black/30 focus:outline-none focus:border-gold bg-transparent text-black"
                    required={field.required}
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    // placeholder={field.placeholder}
                    className="text-xl w-full mt-2 py-2 border-b border-black/20 focus:outline-none focus:border-gold bg-transparent text-black"
                    required={field.required}
                  />
                )}
              </li>
            </ul>
          </div>
        ))}
        <div className="w-full mt-4 group">
          <button
            type="submit"
            className="mt-12 w-full bg-gradient px-6 py-4 rounded-full hover-outline flex items-center justify-center gap-0 text-lg"
            title="Send Message"
            aria-label="Send Message"
          >
            Send Message
            <TbCircleArrowRight className="text-xl ml-2 group-hover:translate-x-2 transition-all duration-300" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
