import React from "react";
import Loader from "../components/Loader";
import useFetchData from "../hooks/useFetchData";

const SocialMediaPostsPage = () => {
  const { data, loading, error } = useFetchData("/api/socialPosts.json");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { socialsPosts } = data;

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
