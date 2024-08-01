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
  // BrochurePDF,
  Awards,
  Home,
  // AboutPage,
  // GalleryPage,
  // HallPage,
  // DinePage,
  // StayPage,
  // NearbyPage,
  // Promotions,
  // RecreationPage,
  // ContactPage,
  // SocialMediaPostsPage,
  useLenisScroll,
  RouterToTop,
  // EnquiryReview,
} from "./constants/data";
import { ToastContainer } from "./constants/library";

const App = () => {
  useLenisScroll();
  return (
    <>
      <Router>
        <Navbar />
        <RouterToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutPage />} />
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
          <Route path="/enquiry-review" element={<EnquiryReview />} />
          <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        <Footer />
        <BackToTop />
        <WhatsApp />
        <Awards />
        {/* <ToastContainer position="top-center" autoClose={5000} /> */}
      </Router>
    </>
  );
};

export default App;
