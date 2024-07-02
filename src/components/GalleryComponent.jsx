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
    }, 200);
  };

  return (
    <>
      <div className="p-4 md:p-8 flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`${
              activeCategory === category
                ? "bg-gradient px-6 py-2 rounded-full hover-outline"
                : "px-6 py-2 rounded-full hover-outline"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <LightGallery
        plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
        mode="lg-fade"
        elementClassNames={`w-full grid grid-cols-2 lg:grid-cols-4 gap-4 transition-linear ${
          isTransitioning ? "translate-y-1/2" : "translate-y-0"
        }`}
        options={{
          thumbnail: true,
          autoplay: true,
        }}
      >
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className={`group gallery-item overflow-hidden transition-all duration-200 ease-linear ${
              isTransitioning ? "scale-0" : "scale-100"
            }`}
            data-src={image.url}
          >
            <img
              className="w-full h-full  object-cover transition duration-700 ease-in-out group-hover:scale-125 cursor-pointer shadow-lg"
              src={image.url}
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}
      </LightGallery>
    </>
  );
};

export default GalleryComponent;
