import React from "react";
import { Navigation } from "../constants/data";

const Footer = () => {
  return (
    <>
      <Navigation mainClassName="z-30 h-screen" isFooter={true} />
    </>
  );
};

export default Footer;
