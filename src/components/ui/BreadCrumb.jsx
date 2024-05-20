import React from "react";
import { IoHome } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const BreadCrumb = ({ page }) => {
  return (
    <>
      <nav
        className="flex items-center justify-center w-full"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-3">
          <li className="inline-flex items-center">
            <a
              href="/"
              // className="inline-flex items-center justify-center text-sm md:text-base font-medium font-title tracking-wider bg-gradient text-black transition-linear px-3 py-1 rounded-full"
              className="py-1 px-3 rounded-full flex items-center gap-2 bg-goldDark text-goldLight outline outline-2 outline-goldLight pointer-events-auto hover-outline"
            >
              <IoHome className="text-sm md:text-lg -mt-[5px]" />
              Home
            </a>
          </li>
          <li aria-current="page">
            <h2
              className="text-gradient inline-flex items-center justify-center text-sm md:text-base font-title tracking-wider "
            >
              <MdKeyboardDoubleArrowRight className="text-goldLight text-lg me-2.5 -mt-[5px]" />
              {page}
            </h2>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumb;
