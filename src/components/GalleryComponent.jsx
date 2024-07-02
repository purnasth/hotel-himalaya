import React, { useState } from "react";
import {
  LightGallery,
  lgZoom,
  lgVideo,
  lgThumbnail,
  lgFullscreen,
} from "../constants/library";

const GalleryComponent = ({ galleryImages }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const categories = [
    "All",
    ...new Set(
      galleryImages
        .filter((image) => image.category)
        .map((image) => image.category)
    ),
  ];

  const handleCategoryClick = (category) => {
    setIsTransitioning(true);
    setActiveCategory(category);
    setTimeout(() => {
      setIsTransitioning(false);
      const displaySection = document.getElementById("gallery-content-display");
      if (displaySection) {
        displaySection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 400);
  };

  return (
    <>
      <div className=" bg-white sticky top-0 z-40 p-4 md:p-8 flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`${
              activeCategory === category
                ? "bg-gradient px-6 py-2 rounded-full hover-outline outline-gold outline-offset-2"
                : "bg-goldLight/80 opacity-50 hover:opacity-100 px-6 py-2 rounded-full hover-outline"
            } `}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        id="gallery-content-display"
        className={`transition-all duration-700 pt-12 scroll-mt-16 ${
          isTransitioning
            ? "opacity-0 -translate-y-8"
            : "opacity-100 translate-y-0"
        }`}
      >
        <LightGallery
          plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
          mode="lg-fade"
          elementClassNames={`w-full grid grid-cols-2 lg:grid-cols-4 gap-4 transition-linear ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          options={{
            thumbnail: true,
            autoplay: true,
          }}
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer ${
                isTransitioning
                  ? "translate-y-12 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
              data-src={image.url}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy"
              />
              <div className="absolute inset-0 w-full h-full p-8 text-white bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-100 transition-all duration-300 ease-linear" />
              <h5 className="absolute bottom-0 text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                {image.alt}
              </h5>
            </div>
          ))}
        </LightGallery>
      </div>
    </>
  );
};

export default GalleryComponent;
