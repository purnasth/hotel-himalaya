import React, { useState, useEffect } from "react";
import FloatingButtonWithNavbar from "./FloatingButtonWithNavbar";
import IconRenderer from "../IconRenderer";
import { FaRegClipboard } from "react-icons/fa";

const Reservation = ({ prefill, enquiryFormFields }) => {
  const [formData, setFormData] = useState(prefill);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [priceDetails, setPriceDetails] = useState({});

  useEffect(() => {
    calculateTotalPrice();
  }, [formData]);

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

  const handleChange = (e) => {
    const { name, value, type, options, checked } = e.target;
    let newValue;
    if (type === "select-multiple") {
      newValue = [...options].filter((option) => option.selected).map((option) => option.value);
    } else if (type === "checkbox") {
      newValue = checked
        ? [...(formData[name] || []), value]
        : formData[name].filter((item) => item !== value);
    } else {
      newValue = value;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const calculateTotalPrice = () => {
    let basePrice = 0;
    let serviceCharges = 0;

    if (formData.room === "Junior Suite") {
      if (formData.refundType === "refundable") {
        if (formData.pax === "1") {
          basePrice = 153;
        } else if (formData.pax === "2") {
          basePrice = 173;
        }
      } else if (formData.refundType === "non-refundable") {
        if (formData.pax === "1") {
          basePrice = 138;
        } else if (formData.pax === "2") {
          basePrice = 153;
        }
      }

      if (formData.bedsNeeded) {
        basePrice += (formData.refundType === "refundable" ? formData.bedsNeeded * 100 : formData.bedsNeeded * 90);
      }

      if (formData.services) {
        formData.services.forEach((service) => {
          if (service === "airportPickup" || service === "airportDrop") {
            serviceCharges += 10;
          } else if (service === "breakfast") {
            serviceCharges += 20;
          } else if (service === "lunch" || service === "dinner") {
            serviceCharges += 30;
          }
        });
      }
    }

    let total = basePrice + serviceCharges;

    if (formData.coupon === "HotelHimalayaPurna") {
      setDiscount(15);
      total *= 0.85;
    } else {
      setDiscount(0);
    }

    setPriceDetails({
      basePrice,
      serviceCharges,
      discountAmount: discount ? basePrice * (discount / 100) : 0,
    });

    setTotalPrice(total);
  };

  return (
    <FloatingButtonWithNavbar
      buttonIcon={<FaRegClipboard className="text-base" />}
      buttonText="Reserve"
      buttonStyles="w-full bg-gradient px-6 py-2 rounded-full hover-outline flex items-center justify-center gap-0"
      navbarStyles="bg-white px-2"
      title="Reserve"
      ariaLabel="Reserve"
    >
      <h4 className="text-base mt-2 mb-12">Send your information and query.</h4>
      <form className="mt-4">
        <div className="grid sm:grid-cols-1 gap-8">
          {enquiryFormFields.map((field) => (
            <div
              key={field.id}
              className="relative z-0 flex items-center justify-between group"
            >
              {field.type === "select" ? (
                <select
                  name={field.id}
                  className="text-base block px-0 py-3 w-full text-black bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer rounded-none"
                  required={field.id !== "message"}
                  multiple={field.multiple}
                  defaultValue={prefill[field.id] || ""}
                  onChange={handleChange}
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : field.type === "checkbox" ? (
                <div className="flex flex-col">
                  {field.options.map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        name={field.id}
                        value={option.value}
                        checked={formData[field.id]?.includes(option.value) || false}
                        onChange={handleChange}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  type={field.type}
                  name={field.id}
                  className="text-base block px-0 py-3 w-full text-black bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer rounded-none"
                  placeholder=""
                  required={field.id !== "message"}
                  min={field.type === "date" ? getTodayDate() : undefined}
                  defaultValue={prefill[field.id] || ""}
                  readOnly={field.readonly}
                  onChange={handleChange}
                />
              )}
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
        <div className="mt-4">
          <div className="relative z-0 flex items-center justify-between group">
            <input
              type="text"
              name="totalPrice"
              className="text-base block px-0 py-3 w-full text-black bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer rounded-none"
              placeholder=""
              value={`$${totalPrice.toFixed(2)}`}
              readOnly
            />
            <label
              htmlFor="totalPrice"
              className="absolute text-sm text-black/80 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Total Price (USD)
            </label>
            <IconRenderer
              iconName="TbCash"
              className="absolute right-0 text-black/90 text-2xl p-1 bg-white pointer-events-none"
            />
          </div>
          {discount > 0 && (
            <div className="text-green-600">
              Discount Applied: {discount}% (-${(priceDetails.discountAmount).toFixed(2)})
            </div>
          )}
          <div className="text-gray-600">
            <div>Base Price: ${priceDetails.basePrice}</div>
            <div>Additional Services: ${priceDetails.serviceCharges}</div>
            {discount > 0 && (
              <div>Discount: -${(priceDetails.discountAmount).toFixed(2)}</div>
            )}
            <div>Total: ${totalPrice.toFixed(2)}</div>
          </div>
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

export default Reservation;
