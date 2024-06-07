import React from "react";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { TbClipboard } from "react-icons/tb";

const AccordianContact = () => {
  return (
    <>
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
