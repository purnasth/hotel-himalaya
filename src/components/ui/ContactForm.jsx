import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const ContactForm = () => {
  const contactFormData = {
    fields: [
      {
        id: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true,
      },
      {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email address",
        required: true,
      },
      {
        id: "contactNumber",
        label: "Contact Number",
        type: "tel",
        placeholder: "Enter your contact number",
        required: true,
      },
      {
        id: "subject",
        label: "Subject",
        type: "text",
        placeholder: "Enter the subject",
        required: true,
      },
    ],
    textarea: {
      id: "message",
      label: "Message",
      placeholder: "Enter your message",
      required: true,
    },
  };
  return (
    <div className="bg-goldLight/20 p-12 border border-gold">
      <p className="text-lg mb-12">
        Can't find the contact and information you're looking for? Write to us
        via this quick form.
      </p>
      <form className="flex flex-wrap justify-between">
        {contactFormData.fields.map((field) => (
          <div key={field.id} className="w-full md:w-1/2">
            <ul className="py-8 flex flex-col gap-4">
              <li className="w-full pr-2">
                <label htmlFor={field.id} className="text-base text-black/80">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  className="text-xl w-full mt-2 py-2 border-b border-black/20 focus:outline-none focus:border-gold bg-transparent text-black"
                  required={field.required}
                />
              </li>
            </ul>
          </div>
        ))}
        <li className="w-full list-none">
          <label
            htmlFor={contactFormData.textarea.id}
            className="text-base text-black/80"
          >
            {contactFormData.textarea.label}
          </label>
          <textarea
            id={contactFormData.textarea.id}
            name={contactFormData.textarea.id}
            rows="4"
            className="text-xl w-full mt-2 py-2 border-b border-black/30 focus:outline-none focus:border-gold bg-transparent text-black"
            required={contactFormData.textarea.required}
          ></textarea>
        </li>
        <div className="w-full mt-4">
          <button
            type="submit"
            className="mt-12 w-full bg-gradient px-6 py-4 rounded-full hover-outline flex items-center justify-center gap-0 text-lg"
            title="Send Message"
            aria-label="Send Message"
          >
            Send Message
            <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
