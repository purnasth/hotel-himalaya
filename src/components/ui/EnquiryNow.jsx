import React from "react";
import {
  FloatingButtonWithNavbar,
  IconRenderer,
  TbCalendarQuestion,
  useCustomForm,
  useFormSubmit,
  generateValidationSchema,
} from "../../constants/data";

const EnquiryNow = ({ prefill, enquiryFormFields }) => {
  const schema = generateValidationSchema(enquiryFormFields);
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
    <>
      <FloatingButtonWithNavbar
        buttonIcon={<TbCalendarQuestion className="text-base" />}
        buttonText="Enquiry"
        buttonStyles="w-full bg-gradient px-6 py-2 rounded-full hover-outline flex items-center justify-center gap-0"
        navbarStyles="bg-white px-2"
        title="Enquiry"
        ariaLabel="Enquiry"
      >
        <h4 className="text-base mt-2 mb-12">
          Send your information and query.
        </h4>
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-1 gap-8">
            {enquiryFormFields.map((field) => (
              <div
                key={field.id}
                className="relative z-0 flex items-center justify-between group"
              >
                <input
                  {...register(field.id)}
                  type={field.type}
                  name={field.id}
                  className={`text-base block px-0 py-3 w-full text-black bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer rounded-none ${
                    errors[field.id] ? "border-red-600" : ""
                  }`}
                  min={field.type === "date" ? getTodayDate() : undefined}
                  defaultValue={prefill[field.id] || ""}
                />
                <label
                  htmlFor={field.id}
                  className="absolute text-sm text-black/80 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {field.label}
                </label>
                {/* {typeof field.icon === "function" ? (
                <span className="absolute right-0 text-black/90 text-base p-1 bg-white pointer-events-none">
                  <field.icon />
                </span>
              ) : (
                <img
                  src={field.icon}
                  alt={field.id}
                  className="absolute right-3 w-8 h-8 p-1"
                />
              )} */}
                <IconRenderer
                  iconName={field.icon}
                  className={`absolute right-0 text-black/90 text-2xl p-1 bg-white pointer-events-none ${
                    errors[field.id] ? "text-red-600" : ""
                  }`}
                />
                {errors[field.id] && (
                  <span className="select-none pointer-events-none absolute left-0 top-5 text-red-500 text-sm">
                    {errors[field.id].message}*
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-16 flex items-center justify-between flex-col md:flex-row gap-12">
            <button
              type="submit"
              className={`w-full bg-gradient px-6 py-2 rounded-full hover-outline ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </FloatingButtonWithNavbar>
    </>
  );
};

export default EnquiryNow;
