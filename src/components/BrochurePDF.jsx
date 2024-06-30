import React from "react";
import { himalayaPDF } from "../constants/data";

const BrochurePDF = () => {
  return (
    <>
      <section className="bg-[#3b3b3bd9] py-16"></section>
      <main className="py-0 px-0 z-[35] sticky top-0">
        <iframe src={himalayaPDF} className="w-screen min-h-[200vh]" />
      </main>
    </>
  );
};

export default BrochurePDF;
