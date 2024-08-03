import React from "react";

import { TbCircleArrowRight, TbLoader } from "../../constants/data";
import {
  withDataFetching,
  useCustomForm,
  useFormSubmit,
  generateValidationSchema,
} from "../../constants/data";
import { ToastContainer } from "../../constants/library";

const ContactForm = ({
  data,
  hiddenEnquiry,
  paddingEnquiry,
  paddingContact,
}) => {
  const { contactFormFields } = data;

  const schema = generateValidationSchema(contactFormFields);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useCustomForm(schema);
  const { isSubmitting, handleSubmit: handleFormSubmit } = useFormSubmit();

  const onSubmit = (data) => {
    handleFormSubmit(data, reset);
  };
  return (
    <>
      <div
        className={`bg-goldLight/20 ${paddingEnquiry} ${paddingContact} border border-gold`}
      >
        <p className={`text-sm md:text-lg mb-6 md:mb-12 ${hiddenEnquiry}`}>
          Can't find the contact and information you're looking for? Write to us
          via this quick form.
        </p>
        <form
          className="flex flex-wrap justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          {contactFormFields.map((field) => (
            <div key={field.id} className="relative w-full md:w-1/2">
              <ul className="py-2 md:py-8 flex flex-col">
                <li className="w-full pr-2">
                  <label
                    htmlFor={field.id}
                    className={`text-sm md:text-base text-black/80  `}
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      {...register(field.id)}
                      id={field.id}
                      name={field.id}
                      rows="2"
                      // placeholder={field.placeholder}
                      className={`text-xl w-full lg:w-[200%] md:mt-2 py-1 sm:py-2 border-b border-black/30 focus:outline-none focus:border-gold bg-transparent text-black rounded-none ${
                        errors[field.id] ? "border-red-600" : ""
                      }`}
                    ></textarea>
                  ) : (
                    <input
                      {...register(field.id)}
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      // placeholder={field.placeholder}
                      className={`text-base md:text-xl w-full md:mt-2 py-1 sm:py-2 border-b border-black/20 focus:outline-none focus:border-gold bg-transparent text-black rounded-none ${
                        errors[field.id] ? "border-red-600" : ""
                      }`}
                    />
                  )}
                </li>
              </ul>
              {errors[field.id] && (
                <span className="select-none pointer-events-none absolute left-0 bottom-4 md:bottom-12 text-red-500 text-sm">
                  {errors[field.id].message}*
                </span>
              )}
            </div>
          ))}
          <div className="w-full mt-4 group">
            <button
              type="submit"
              className={`w-full bg-gradient py-2 md:py-4 rounded-full hover-outline text-lg ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
              title="Send Message"
              aria-label="Send Message"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-0 ">
                  Sending
                  <TbLoader className="text-xl ml-2 animate-spin" />
                </span>
              ) : (
                <span className="flex items-center justify-center gap-0 ">
                  Send Message
                  <TbCircleArrowRight className="text-xl ml-2 group-hover:translate-x-2 transition-all duration-300" />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
};

export default withDataFetching(ContactForm, "/api/contactData.json");
