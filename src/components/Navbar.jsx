import React, { useState } from "react";
import { FaRegClipboard } from "react-icons/fa";
import { logo } from "../constants/data";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Navigation from "./ui/Navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="relative">
        <div className="absolute top-0 w-full h-64 p-8 text-white bg-gradient-to-b from-black/70 to-black/0 z-20" />
        <header className="text-white">
          <a href="/" className="absolute top-0 left-1/2 -translate-x-1/2 z-40">
            <h1>
              <img src={logo} alt="Logo" className="w-40 h-36 object-contain" />
            </h1>
          </a>
          <div className="fixed h-28 inset-0 p-8 z-50 pointer-events-none">
            <div className="flex items-center justify-between">
              <button
                onClick={toggleMenu}
                className="py-2 px-5 rounded-full flex items-center gap-2 bg-goldDark text-goldLight outline outline-2 outline-goldLight pointer-events-auto hover-outline"
              >
                {isMenuOpen ? (
                  <IoIosCloseCircleOutline className="text-xl" />
                ) : (
                  <RiMenu2Fill className="text-xl" />
                )}
                Menu
              </button>
              <a
                href="https://hotelhimalaya.com//result.php?hotel_code=q7x6fU"
                target="_blank"
                className="py-2 px-5 rounded-full flex items-center gap-2 bg-goldDark text-goldLight outline outline-2 outline-goldLight pointer-events-auto hover-outline"
              >
                Book <FaRegClipboard className="text-base" />
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
