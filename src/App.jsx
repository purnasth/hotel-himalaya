// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Slider from "./components/Slider";
// import Facilities from "./components/Facilities";
// import Accommodation from "./pages/Accommodation";
// import FilterButton from "./components/FilterButton";
// import Gallery from "./components/GalleryComponent";
// import About from "./components/About";
// import Footer from "./components/Footer";
// import Loader from "./components/Loader";
// import Hall from "./components/Hall";
// import BackToTop from "./components/ui/BackToTop";
// import WhatsApp from "./components/ui/WhatsApp";
// import Awards from "./components/Awards";
// import Stay from "./components/Stay";
// import Testimonials from "./components/Testimonials";
// import GalleryPage from "./pages/GalleryPage";
// import Banner from "./components/Banner";
// import Offers from "./components/Offers";
// import SocialOffers from "./components/SocialOffers";
// import OffersContainer from "./components/OffersContainer";
// import AboutPage from "./pages/AboutPage";
// import HallPage from "./pages/HallPage";

// const App = () => {
//   const slides = [
//     {
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
//     },
//     {
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
//     },
//     {
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/GDLNu-03.jpg",
//     },
//     {
//       url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
//     },
//     {
//       url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
//     },
//     {
//       url: "https://hotelhimalaya.com/project/images/slideshow/id4vO-04.jpg",
//     },
//   ];

//   return (
//     <>
//       <Navbar />
//       <AboutPage />
//       <HallPage />
//       <Offers />
//       <SocialOffers />
//       <OffersContainer />
//       <GalleryPage />
//       <Slider
//         slides={slides}
//         containerClassName="w-full h-screen"
//         buttonClassName="hero-slider-button"
//         imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[2s]"
//         trueClassName="opacity-100"
//         falseClassName="opacity-0"
//       />
//       <Stay />
//       <Facilities />
//       <Hall />
//       <Testimonials />
//       <Gallery />
//       <FilterButton />
//       <Accommodation />

//       <Slider
//         slides={slides}
//         containerClassName="w-1/3 h-96 overflow-hidden relative mx-auto mt-10 group"
//         buttonClassName="room-slider-button"
//         imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[1s]"
//         trueClassName="opacity-100 scale-100 translate-y-0"
//         falseClassName="opacity-0 scale-90 -translate-y-4 -z-10"
//       />
//       <Hall />
//       <Footer />

//       <BackToTop />
//       <WhatsApp />
//       <Awards />
//     </>
//   );
// };

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Accommodation from "./pages/Accommodation";
import BackToTop from "./components/ui/BackToTop";
import WhatsApp from "./components/ui/WhatsApp";
import Awards from "./components/Awards";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import HallPage from "./pages/HallPage";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import DinePage from "./pages/DinePage";
import StayPage from "./pages/StayPage";
import Nearby from "./components/ui/Nearby";
import NearbyPage from "./pages/NearbyPage";
import Promotions from "./pages/Promotions";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/events" element={<HallPage />} />

          <Route path="/gallery" element={<GalleryPage />} />

          <Route path="/accommodation" element={<Accommodation />} />

          <Route path="/dine" element={<DinePage />} />

          <Route path="/stay" element={<StayPage />} />

          <Route path="/places" element={<NearbyPage />} />

          <Route path="/promotions" element={<Promotions />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <BackToTop />
        <WhatsApp />
        <Awards />
      </Router>
    </>
  );
};

export default App;
