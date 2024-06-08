import React from "react";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { TbClipboard, TbClock } from "react-icons/tb";

const AccordianContact = () => {
  return (
    <>
      <div className="pt-12 px-24">
        <p className="mb-12 text-justify">
          Our 126 well-appointed rooms offer every comfort the traveler may need
          and we have a full range of amenities for our distinguished guests.
          Indulge in serene luxury with meticulously curated rooms, modern
          amenities, and breathtaking views for an unforgettable tailored stay.
        </p>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-12">
            <TbClock className="text-xl" />
            <h5 className="text-2xl">Sunday - Saturday</h5>
          </div>
          <button className="text-xl flex items-center justify-center gap-2">
            08:00 AM - 10:00 PM
          </button>
        </div>
      </div>
      <div className="bg-goldDark/10 m-12">
        <div className="flex items-center flex-col border border-goldDark/50">
          <div className="flex items-center justify-between w-full py-6 px-12 border-b border-goldDark/50">
            <div className="flex items-center gap-12">
              <MdOutlineLocalPhone className="text-xl" />
              <h5 className="text-2xl">Phone</h5>
              <a href="">+977-9851139592</a>
            </div>
            <button className="bg-gradient px-6 py-2 rounded-full hover-outline flex items-center justify-center gap-2">
              Call
            </button>
          </div>
          <div className="flex items-center justify-between w-full py-6 px-12 border-b border-goldDark/50">
            <div className="flex items-center gap-12">
              <MdOutlineMailOutline className="text-xl" />
              <h5 className="text-2xl">Email</h5>
              <a href="">reservation@hotelhimalaya.com</a>
            </div>
            <button className="bg-gradient px-6 py-2 rounded-full hover-outline flex items-center justify-center gap-2">
              Mail
            </button>
          </div>
          <div className="flex items-center justify-between w-full py-6 px-12 border-b border-goldDark/50">
            <div className="flex items-center gap-12">
              <TbClipboard className="text-xl" />
              <h5 className="text-2xl">Online Booking</h5>
            </div>
            <button className="bg-gradient px-6 py-2 rounded-full hover-outline flex items-center justify-center gap-2">
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordianContact;
