import React from "react";
import Video from "./ui/Video";

const About = () => {
  return (
    <main>
      <div className="absolute inset-0 bg-gold/20 size-full h-3/4 -z-10"></div>
      <div className="container">
        <div className="text-center space-y-8 px-12">
          <span className="uppercase">37 years of hospitality</span>

          <h3 className="text-5xl leading-snug">
            The stay at Hotel Himalaya means enjoying every moment. Relax. Find
            inspiration. Be fascinated.
          </h3>

          <p className="text-base">
            Nestled within 6.58 acres of exquisitely landscaped grounds, Hotel
            Himalaya is conveniently located 8 km away from the Tribhuwan
            International Airport and only 2 km from the Kathmandu city center.
            We have always been an ideal haven for business and leisure
            travelers alike, offering resort ambiance with an intimate touch.
            Since many of the distinguished NGOs and INGOs in Kathmandu are in
            the vicinity the UN head office is only a few minutes walking
            distance.
          </p>
        </div>

        <Video
          videoClassName="w-full h-full object-cover mt-24"
          poster="https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg"
          video="https://hotelhimalaya.com/template/web/img/about/HOTEL_HIMALAYA.mp4"
        />
      </div>
    </main>
  );
};

export default About;
