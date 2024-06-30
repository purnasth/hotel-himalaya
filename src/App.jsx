import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
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
import NearbyPage from "./pages/NearbyPage";
import Promotions from "./pages/Promotions";
import RecreationPage from "./pages/RecreationPage";
import BrochurePDF from "./components/BrochurePDF";
import ContactPage from "./pages/ContactPage";
import SocialMediaPostsPage from "./pages/SocialMediaPostsPage";
import useLenisScroll from "./hooks/useLenisScroll";
import SocialPosts from "./components/SocialPosts";

const App = () => {
  useLenisScroll();
  return (
    <>
      <Router>
        <Navbar />
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
