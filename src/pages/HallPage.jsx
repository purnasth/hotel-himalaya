import React from "react";
import EnquiryNow from "../components/ui/EnquiryNow";
import Banner from "../components/Banner";

const HallPage = () => {
  return (
    <>
      <Banner
        banner="https://s3-alpha-sig.figma.com/img/4e1d/2131/7f8b9696b68e3c854fbc935f98175f3d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pA1NFVAtiFIAJat8m01RW86Rc-RXKxVyoYwyNn~nLCgbFjBtYQSiV2PLBnRI3J85D9~-kkS486KrblYHJ1-HRdoy2a1k5EYCLAKNjVOHRNmv0CrCExL906Hsocla79v-GB18waWVbbAgS6OrXSuobpJ7YJwOHUlJYNi7xod3hDaaiSsI0k6vZy2z75lSD3pAuh-FJ-zYqHHl34eqZY~OzQ1SlcA7MMJo41NfS42qLj314BZyGBkkUDEcR~Q1l8Sh7y3Ivr4b0ie7H2XPSflWp8Pensq3GCTnw7dbCNuD9R0DfkCJ81-i89dYJu4hCyGs5x8vzYSBm9CL-wvY1iWFfQ__"
        title="Auspicious Convention Center"
        description="Comfortable accommodation directly in the hotel with extensive 
        Wellness and exceptional gastronomy."
        page="Events"
      />
      <EnquiryNow />
    </>
  );
};

export default HallPage;
