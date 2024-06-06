import React from "react";
import EnquiryNow from "../components/ui/EnquiryNow";
import Banner from "../components/Banner";
import FloatingButtonWithNavbar from "../components/ui/FloatingButtonWithNavbar";
import { RiTrophyLine } from "react-icons/ri";
import MembershipForm from "../components/ui/MembershipForm";

const RecreationPage = () => {
  return (
    <>
      <Banner
        banner="https://hotelhimalaya.com/images/package/banner/7QTGu-banner1.jpg"
        title="Recreation Center"
        description="Experience ultimate relaxation with our modern amenities: gym, swimming pool, jacuzzi, sauna and steam, designed to rejuvenate your body and mind."
        page="Recreation"
      />
      <main className="z-auto">
        <div className="container">
          <h5 className="text-2xl leading-relaxed mb-12">
            Explore an array of activities designed to suit every taste, from
            exhilarating outdoor adventures to serene leisure facilities.
            Whether you seek excitement or tranquility, we offer a membership
            package with a great deal of diverse options to ensure a memorable
            stay for everyone.
          </h5>
          <div className="flex items-center justify-center">
            <MembershipForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default RecreationPage;
