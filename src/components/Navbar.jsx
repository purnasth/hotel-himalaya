import React, { useState } from "react";

import {
  logo,
  Navigation,
  TbClipboard,
  RiMenu2Fill,
  IoIosCloseCircleOutline,
} from "../constants/data";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="relative">
        <div className="pointer-events-none absolute top-0 w-full h-64 p-8 bg-gradient-to-b from-black/70 to-black/0 z-20" />
        <header>
          <Link
            to="/"
            className="absolute top-0 left-1/2 -translate-x-1/2 z-40"
          >
            <h1>
              <img
                src={logo}
                alt="Hotel Himalaya Logo"
                className="w-32 h-28 md:w-40 md:h-36 object-contain"
              />
            </h1>
          </Link>
          <div className="fixed h-28 inset-0 p-6 sm:p-8 z-50 pointer-events-none">
            <div className="flex items-center justify-between">
              <button
                onClick={toggleMenu}
                className="relative py-2 px-2 sm:px-5 rounded-full flex items-center gap-2 bg-goldDark text-goldLight outline outline-2 outline-goldLight pointer-events-auto hover-outline transition-all duration-700 ease-linear"
              >
                <IoIosCloseCircleOutline
                  className={`hidden sm:block absolute left-0 top-1/2 translate-x-4 -translate-y-1/2 text-xl transition-all duration-700 ease-linear ${
                    isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                />
                <RiMenu2Fill
                  className={`hidden sm:block absolute left-0 top-1/2 translate-x-4 -translate-y-1/2 text-xl transition-all duration-700 ease-linear ${
                    isMenuOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
                  }`}
                />
                {isMenuOpen ? (
                  <IoIosCloseCircleOutline className="text-lg sm:hidden" />
                ) : (
                  <RiMenu2Fill className="text-lg sm:hidden" />
                )}
                <span className="hidden sm:block ml-6">Menu</span>
              </button>
              <Link
                // to="https://hotelhimalaya.com//result.php?hotel_code=q7x6fU"
                to="https://hotelhimalaya.com/reservation"
                target="_blank"
                className="py-2 px-2 sm:px-5 rounded-full flex items-center gap-2 bg-goldDark text-goldLight outline outline-2 outline-goldLight pointer-events-auto hover-outline"
              >
                <span className="hidden sm:block">Book</span>{" "}
                <TbClipboard className="text-lg" />
              </Link>
            </div>
          </div>
        </header>

        <div
          className={`fixed inset-0 transition-all duration-700 ease-linear z-40 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Navigation
            mainClassName="h-screen overflow-y-auto"
            isFooter={false}
            toggleMenu={toggleMenu}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
