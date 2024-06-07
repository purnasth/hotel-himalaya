import React from "react";

import himalayPDF from "../assets/himalaya_booklet.pdf";

const BrochurePDF = () => {
  return (
    <>
      <section className="bg-[#3b3b3bd9] py-16"></section>
      <main className="py-0 px-0 z-[35] sticky top-0">
        <iframe src={himalayPDF} className="w-screen min-h-[200vh]" />
      </main>
    </>
  );
};

export default BrochurePDF;
