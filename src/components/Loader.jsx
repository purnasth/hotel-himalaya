import React from "react";
import logo from "../assets/logo.svg";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black/80">
      <img
        src={logo}
        alt="loading..."
        className="w-80 h-60 object-contain animate-pulse"
      />
    </div>
  );
};

export default Loader;
