// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import {
//   Navbar,
//   BackToTop,
//   WhatsApp,
//   Footer,
//   BrochurePDF,
//   Awards,
//   Home,
//   AboutPage,
//   GalleryPage,
//   HallPage,
//   DinePage,
//   StayPage,
//   NearbyPage,
//   Promotions,
//   RecreationPage,
//   ContactPage,
//   SocialMediaPostsPage,
//   useLenisScroll,
//   RouterToTop,
// } from "./constants/data";

// const App = () => {
//   useLenisScroll();
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <RouterToTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/events" element={<HallPage />} />
//           <Route path="/gallery" element={<GalleryPage />} />
//           <Route path="/dine" element={<DinePage />} />
//           <Route path="/stay" element={<StayPage />} />
//           <Route path="/places" element={<NearbyPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/promotions" element={<Promotions />} />
//           <Route path="/recreation" element={<RecreationPage />} />
//           <Route path="/social-offer" element={<SocialMediaPostsPage />} />
//           <Route path="/brochure" element={<BrochurePDF />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//         <Footer />
//         <BackToTop />
//         <WhatsApp />
//         <Awards />
//       </Router>
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

import {
  Navbar,
  BackToTop,
  WhatsApp,
  Footer,
  BrochurePDF,
  Awards,
  Home,
  AboutPage,
  GalleryPage,
  HallPage,
  DinePage,
  StayPage,
  NearbyPage,
  Promotions,
  RecreationPage,
  ContactPage,
  SocialMediaPostsPage,
  useLenisScroll,
  RouterToTop,
} from "./constants/data";

const App = () => {
  useLenisScroll();
  return (
    <>
      <Router>
        <Navbar />
        <RouterToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<HallPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/dine" element={<DinePage />} />
          <Route path="/stay" element={<StayPage />} />
          <Route path="/places" element={<NearbyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/recreation" element={<RecreationPage />} />
          <Route path="/social-offer" element={<SocialMediaPostsPage />} />
          <Route path="/brochure" element={<BrochurePDF />} />
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
