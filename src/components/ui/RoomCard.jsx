import React from "react";
import Slider from "../Slider";

const RoomCard = ({ room, packageImages }) => {
  return (
    <div className="border border-black/40 overflow-hidden">
      <div className="border-black/30 flex items-center justify-between gap-0 bg-black/10 hover:bg-orange-700/20 group transition-all duration-700">
        <div className="flex w-1/3">
          <Slider
            slides={packageImages}
            containerClassName="w-full h-96 relative mx-auto group"
            buttonClassName="absolute top-1/2 -translate-y-1/2 rounded-full p-3 border bg-black/20 text-white cursor-pointer group-hover:scale-100 scale-75 transition-all duration-1000"
            imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[1s]"
            trueClassName="opacity-100"
            falseClassName="opacity-0 translate-y-6 -z-10"
          />
        </div>
        <a
          href={`/accommodation/${room.type}`}
          className="flex items-center justify-between px-12 w-2/3 gap-10 transition-all duration-700 group-hover:translate-x-4"
        >
          <div className="flex items-start flex-col gap-5">
            <h4 className="text-2xl">{room.name}</h4>
            <p className="text-base max-w-md">{room.description}</p>
          </div>
          <div className="flex transition-all duration-700 group-hover:translate-x-4">
            <a
              href={`/accommodation/${room.type}`}
              className="bg-black/20 text-black group-hover:text-white group-hover:bg-black px-4 py-1 rounded-full text-2xl transition-all duration-700 ease-linear"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="group-hover:scale-x-150 group-hover:translate-x-0 transition-all duration-150 ease-linear"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default RoomCard;
