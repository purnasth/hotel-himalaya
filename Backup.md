<!-- About Hotel Kaskady inspiration backup -->

import React from "react";
import Banner from "../components/Banner";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/Loader";
import About from "../components/About";
import Slider from "../components/Slider";
import BreadCrumb from "../components/ui/BreadCrumb";

const AboutPage = () => {
const slides = [
{
url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
},
{
url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
},
{
url: "https://mayurstay.com/hotelhimalaya/images/slideshow/GDLNu-03.jpg",
},
{
url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
},
{
url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
},
{
url: "https://hotelhimalaya.com/project/images/slideshow/id4vO-04.jpg",
},
];

const { data, loading, error } = useFetchData("/api/aboutData.json");

if (loading) {
return <Loader />;
}

if (error) {
return <div>Error: {error}</div>;
}

return (
<>
{/_ <Banner
        banner={data.banner}
        title={data.title}
        description={data.description}
        page="About"
      /> _/}

      <div className="absolute size-full top-3/4 z-50">
        <BreadCrumb page="About" />
      </div>

      <div className="min-h-[65vh] relative">
        <div className="absolute inset-0 w-full h-[220vh] bg-gradient-to-b from-black to-black/60"></div>
        <div className="absolute w-full h-[250vh]">
          <img
            src="https://s3-alpha-sig.figma.com/img/768f/7e1f/d49cd3ddfce19581c959d4800854ec35?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-V8zu~UhDiVWjhawgd5oynAoQ9ptZamLNqK2maePyeICfqy1FDsqGWs4TjjHwiQGaT0KqJ-Ehi9IVRZJx-qz5ZCTvLZPEZClnHxTihdjgVSl5DkKPZYtVjvlAFTIPIOdZRKWrc28hZWavi3ntDlBri14tjSB7FuMfB0CgFRLRGKfLbUqcPQrM~JT-hG0v-oVkOjJH88R5GAdnFz9uaW9zJduJllpKtX0yqMpK0VUohwMXIodk~gKc4OBYVNrSyf8b7z1uesenciYPULsJomMst3pmXKA1QcFVz9cMiHY~0wZp-lCTbemUwivyxInlAVa6TcVgF17~t~dtRchxGyug__"
            alt=""
            className="w-full h-[120vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black to-black/0 size-full"></div>
        </div>
      </div>
      <About data={data} />
      <main className="mt-0 pt-0">
        <div className="container p-8 space-y-10 text-center">
          <h5 className="text-3xl leading-relaxed">
            Situated in the epicenter of Kathmandu Valley, offering great value
            for money with superb rooms and a wonderful dining experience. Come
            and stay with us and allow us to make you feel at home with true
            Nepalese hospitality!
          </h5>
          <p>
            Our 126 well-appointed rooms offer every comfort the traveler may
            need and we have a full range of amenities for our distinguished
            guests. You can enjoy a 180-degree panoramic view of the majestic
            Himalayan range from our garden. We offer the finest cuisine in our
            international restaurant ‘Café Horizon’ as well as In-Room dining
            for a more private meal. For our active guests, we have a superb
            long tennis court, swimming pool, and health club to keep you in
            shape and tone your body. The food served is hygienic and timely.
            The culinary chef uses their best skills to serve a delight on your
            table. You can enjoy the delicious recipes of Indian, Continental,
            and Chinese Cuisine.
          </p>
          <Slider
            slides={slides}
            containerClassName="w-full h-[90vh] overflow-hidden relative mx-auto mt-10 group"
            buttonClassName="room-slider-button"
            imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[1s]"
            trueClassName="opacity-100 scale-100 translate-y-0"
            falseClassName="opacity-0 scale-90 -translate-y-4 -z-10"
          />
        </div>
      </main>
    </>

);
};

export default AboutPage;
