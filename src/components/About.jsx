import React from "react";

const About = () => {
  return (
    <main>
      <div className="container">
        <div className=" text-center space-y-8 px-12">
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

        <video
          className="w-full h-full object-cover mt-24"
          autoPlay
          loop
          muted
          playsInline
          poster="https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg"
          preload="auto"
        >
          <source
            src="https://hotelhimalaya.com/project/template/web/img/about/HOTEL_HIMALAYA.mp4"
            type="video/mp4"
          />
          <track
            src="#"
            kind="captions"
            srcLang="en"
            label="english_captions"
          ></track>
          The video of the Hotel Himalaya portrays the beauty of the hotel and
          the surrounding area.
        </video>
      </div>
    </main>
  );
};

export default About;
