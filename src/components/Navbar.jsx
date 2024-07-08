import React, { useState } from "react";

import {
  logo,
  Navigation,
  TbClipboard,
  RiMenu2Fill,
  IoIosCloseCircleOutline,
} from "../constants/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="relative">
        <div className="pointer-events-none absolute top-0 w-full h-64 p-8 text-white bg-gradient-to-b from-black/70 to-black/0 z-20" />
        <header className="text-white">
          <a href="/" className="absolute top-0 left-1/2 -translate-x-1/2 z-40">
            <h1>
              <img src={logo} alt="Hotel Himalaya Logo" className="w-40 h-36 object-contain" />
            </h1>
          </a>
          <div className="fixed h-28 inset-0 p-8 z-50 pointer-events-none">
            <div className="flex items-center justify-between">
              <button
                onClick={toggleMenu}
                className="relative py-2 px-5 rounded-full flex items-center gap-2 bg-goldDark text-goldLight outline outline-2 outline-goldLight pointer-events-auto hover-outline transition-all duration-700 ease-linear"
              >
                <IoIosCloseCircleOutline
                  className={`absolute left-0 top-1/2 translate-x-4 -translate-y-1/2 text-xl transition-all duration-700 ease-linear ${
                    isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                />
                <RiMenu2Fill
                  className={`absolute left-0 top-1/2 translate-x-4 -translate-y-1/2 text-xl transition-all duration-700 ease-linear ${
                    isMenuOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
                  }`}
                />
                <span className="ml-6">Menu</span>
              </button>
              <a
                href="https://hotelhimalaya.com//result.php?hotel_code=q7x6fU"
                target="_blank"
                className="py-2 px-5 rounded-full flex items-center gap-2 bg-goldDark text-goldLight outline outline-2 outline-goldLight pointer-events-auto hover-outline"
              >
                Book <TbClipboard className="text-lg" />
              </a>
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
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
