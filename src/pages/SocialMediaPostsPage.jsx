import React from "react";
import { withDataFetching } from "../constants/data";
import {
  LightGallery,
  lgZoom,
  lgVideo,
  lgThumbnail,
  lgFullscreen,
} from "../constants/library";

const SocialMediaPostsPage = ({ data }) => {
  const { socialsPosts } = data;

  return (
    <>
      <main className="">
        <div className="md:container my-12">
          <div className="text-center space-y-4 md:space-y-4 px-2 sm:px-12">
            <span className="text-xs md:text-base uppercase">
              Stay updated, stay engaged
            </span>
            <h3 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug lg:leading-snug">
              Social Media Posts
            </h3>
            <p className="text-sm text-justify md:text-base md:text-center max-w-lg mx-auto">
              Catch up on our latest updates and join the conversation. Follow
              us on social media for more exciting news and events.
            </p>
          </div>
        </div>
        <LightGallery
          plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
          mode="lg-fade"
          elementClassNames="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {socialsPosts.map((posts, index) => (
            <div
              key={index}
              className="group overflow-hidden"
              data-src={posts.image}
            >
              <img
                src={posts.image}
                alt={posts.title}
                className="aspect-square size-full object-cover group-hover:scale-110 cursor-pointer transition-all duration-[1s]"
                draggable="false"
              />
            </div>
          ))}
        </LightGallery>
      </main>
    </>
  );
};

export default withDataFetching(SocialMediaPostsPage, "/api/socialPosts.json");
