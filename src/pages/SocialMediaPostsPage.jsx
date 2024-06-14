import React from "react";
import DynamicSlider from "../components/ui/DynamicSlider";

import social1 from "../assets/socials/1.webp";
import social2 from "../assets/socials/2.webp";
import social3 from "../assets/socials/3.webp";
import social4 from "../assets/socials/4.webp";
import social5 from "../assets/socials/5.webp";
import social6 from "../assets/socials/6.webp";
import social7 from "../assets/socials/7.webp";
import social8 from "../assets/socials/8.webp";
import social9 from "../assets/socials/9.webp";
import social10 from "../assets/socials/10.webp";
import social11 from "../assets/socials/11.webp";
import social12 from "../assets/socials/12.webp";
import social13 from "../assets/socials/13.webp";
import social14 from "../assets/socials/14.webp";
import social15 from "../assets/socials/15.webp";
import social16 from "../assets/socials/16.webp";
import social17 from "../assets/socials/17.webp";
import social18 from "../assets/socials/18.webp";
import social19 from "../assets/socials/19.webp";
import social20 from "../assets/socials/20.webp";
import social21 from "../assets/socials/21.webp";
import social22 from "../assets/socials/22.webp";
import social23 from "../assets/socials/23.webp";
import social24 from "../assets/socials/24.webp";
import social25 from "../assets/socials/25.webp";
import social26 from "../assets/socials/26.webp";
import social27 from "../assets/socials/27.webp";
import social28 from "../assets/socials/28.webp";

const SocialMediaPostsPage = () => {
  const socialsPosts = [
    {
      image: social1,
      title: "Anniversary Offer Post",
    },
    {
      image: social2,
      title: "Swoyambhu Post",
    },
    {
      image: social3,
      title: "New Year Post",
    },
    {
      image: social4,
      title: "EID Post",
    },
    {
      image: social5,
      title: "PMC Opening Post",
    },
    {
      image: social6,
      title: "Hall Post",
    },
    {
      image: social7,
      title: "Himalaya Post",
    },
    {
      image: social8,
      title: "Hospitality Post",
    },
    {
      image: social9,
      title: "Dalaan Post",
    },
    {
      image: social10,
      title: "Shivaratri Post",
    },
    {
      image: social11,
      title: "Event Hall Post",
    },
    {
      image: social12,
      title: "Dine Post",
    },
    {
      image: social13,
      title: "Valentines Post",
    },
    {
      image: social14,
      title: "PDS Post",
    },
    {
      image: social15,
      title: "Himalaya Post",
    },
    {
      image: social16,
      title: "Dine Post",
    },
    {
      image: social17,
      title: "Recreatino Post",
    },
    {
      image: social18,
      title: "Steam & Sauna Post",
    },
    {
      image: social19,
      title: "PMC Outlet Post",
    },
    {
      image: social20,
      title: "Recreation Post",
    },
    {
      image: social21,
      title: "Accommodation Post",
    },
    {
      image: social22,
      title: "Occasions Post",
    },
    {
      image: social23,
      title: "Hall Post",
    },
    {
      image: social24,
      title: "Outdoor Post",
    },
    {
      image: social25,
      title: "Himalaya Post",
    },
    {
      image: social26,
      title: "Dine Post",
    },
    {
      image: social27,
      title: "Gym Post",
    },
    {
      image: social28,
      title: "Dine Hall Post",
    },
  ];
  return (
    <>
      <main className="">
        <div className="container mt-12">
          <div className="text-center space-y-6 px-24 mb-12">
            <span className="uppercase">Making 10,000+ happy faces</span>
            <h3 className="text-5xl leading-snug">Social Media Posts</h3>
            <p className="text-base max-w-lg mx-auto">
              Comfortable accommodation directly in the hotel with extensive
              Wellness and exceptional gastronomy.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {socialsPosts.map((posts, index) => (
            <div className="group overflow-hidden">
              <img
                key={index}
                src={posts.image}
                alt={posts.title}
                className="aspect-square size-full object-cover group-hover:scale-110 cursor-pointer transition-all duration-[1s]"
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default SocialMediaPostsPage;
