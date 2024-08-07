// assets
import logo from "../assets/logo.svg";
import logoMark from "../assets/logo-mark.svg";
import sata from "../assets/awards/sata.webp";
import sataBlack from "../assets/awards/sata_black.webp";
import tripaward from "../assets/awards/tripaward.webp";
import himalayaPDF from "../assets/himalaya_booklet.pdf";

export { logo, logoMark, sata, sataBlack, tripaward, himalayaPDF };

// icons
import {
  TbUsersGroup,
  TbClock,
  TbChevronDown,
  TbCircleArrowRight,
  TbBrandWhatsapp,
  TbClipboard,
  TbCalendarQuestion,
  TbTrophy,
  TbMailFilled,
  TbArrowNarrowLeft,
  TbArrowNarrowRight,
  TbLoader,
} from "react-icons/tb";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineBrunchDining,
  MdOutlineCardMembership,
  MdPhone,
  MdFacebook,
  MdOutlineKeyboardDoubleArrowUp,
  MdFullscreen,
} from "react-icons/md";
import { BiLogoTripAdvisor } from "react-icons/bi";
import { RiInstagramFill, RiMenu2Fill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoHome, IoClose } from "react-icons/io5";

export {
  MdFacebook,
  TbCircleArrowRight,
  TbChevronDown,
  TbBrandWhatsapp,
  TbClipboard,
  TbCalendarQuestion,
  TbMailFilled,
  TbArrowNarrowLeft,
  TbArrowNarrowRight,
  IoHome,
  IoClose,
  MdKeyboardDoubleArrowRight,
  TbUsersGroup,
  TbClock,
  TbTrophy,
  TbLoader,
  MdOutlineBrunchDining,
  MdOutlineCardMembership,
  MdOutlineKeyboardDoubleArrowUp,
  MdPhone,
  RiInstagramFill,
  BiLogoTripAdvisor,
  RiMenu2Fill,
  IoIosCloseCircleOutline,
  MdFullscreen,
};

// hoc
import withDataFetching from "../hoc/withDataFetching";

export { withDataFetching };

// hoooks
import useFetchData from "../hooks/useFetchData";
import useLenisScroll from "../hooks/useLenisScroll";
import useCustomForm from "../hooks/useCustomForm";
import useFormSubmit from "../hooks/useFormSubmit";

export { useFetchData, useLenisScroll, useCustomForm, useFormSubmit };

// utils
import RouterToTop from "../utils/RouterToTop";
import { ClickableNavLink, ClickableLink } from "../utils/createClickableLink";
import generateValidationSchema from "../utils/generateValidationSchema";

export {
  RouterToTop,
  ClickableNavLink,
  ClickableLink,
  generateValidationSchema,
};

// components
import AccordianContact from "../components/ui/AccordianContact";
import IconRenderer from "../components/IconRenderer";
import FloatingButtonWithNavbar from "../components/ui/FloatingButtonWithNavbar";
import Slider from "../components/Slider";
import Loader from "../components/Loader";
import Socials from "../components/ui/Socials";
import Video from "../components/ui/Video";
import BreadCrumb from "../components/ui/BreadCrumb";
import Navigation from "../components/ui/Navigation";
import EnquiryNow from "../components/ui/EnquiryNow";
import DynamicSlider from "../components/ui/DynamicSlider";
import RoomSlider from "../components/ui/RoomSlider";
import TestimonialFilter from "../components/ui/TestimonialFilter";
import About from "../components/About";
import DiscoverHimalaya from "../components/DiscoverHimalaya";
import Accordian from "../components/ui/Accordian";
import Nearby from "../components/ui/Nearby";
import ContactForm from "../components/ui/ContactForm";
import Banner from "../components/Banner";
import Summary from "../components/ui/Summary";
import FilterComponent from "../components/ui/FilterComponent";
import HallComponent from "../components/HallComponent";
import Amenities from "../components/Amenities";
import PromotionsComponent from "../components/PromotionsComponent";
import MembershipForm from "../components/ui/MembershipForm";
import RecreationLayout from "../components/RecreationLayout";
import PackageComponent from "../components/PackageComponent";
import Facilities from "../components/Facilities";
import Hall from "../components/Hall";
import Stay from "../components/Stay";
import Testimonials from "../components/Testimonials";
import VideoPlayer from "../components/ui/VideoPlayer";

import Navbar from "../components/Navbar";
import BackToTop from "../components/ui/BackToTop";
import WhatsApp from "../components/ui/WhatsApp";

import Awards from "../components/Awards";
import Footer from "../components/Footer";
import BrochurePDF from "../components/BrochurePDF";

export {
  Navbar,
  BackToTop,
  WhatsApp,
  Footer,
  BrochurePDF,
  Awards,
  AccordianContact,
  Banner,
  IconRenderer,
  FloatingButtonWithNavbar,
  Slider,
  Loader,
  Socials,
  Video,
  BreadCrumb,
  Navigation,
  EnquiryNow,
  DynamicSlider,
  RoomSlider,
  TestimonialFilter,
  About,
  DiscoverHimalaya,
  Accordian,
  Nearby,
  ContactForm,
  Summary,
  FilterComponent,
  HallComponent,
  Amenities,
  PromotionsComponent,
  MembershipForm,
  RecreationLayout,
  PackageComponent,
  Facilities,
  Hall,
  Stay,
  Testimonials,
  VideoPlayer,
};

// pages

import GalleryPage from "../pages/GalleryPage";
import AboutPage from "../pages/AboutPage";
import HallPage from "../pages/HallPage";
import Home from "../pages/Home";
import DinePage from "../pages/DinePage";
import StayPage from "../pages/StayPage";
import NearbyPage from "../pages/NearbyPage";
import Promotions from "../pages/Promotions";
import RecreationPage from "../pages/RecreationPage";
import ContactPage from "../pages/ContactPage";
import SocialMediaPostsPage from "../pages/SocialMediaPostsPage";
import EnquiryReview from "../pages/EnquiryReview";

export {
  GalleryPage,
  AboutPage,
  HallPage,
  Home,
  DinePage,
  StayPage,
  NearbyPage,
  Promotions,
  RecreationPage,
  ContactPage,
  SocialMediaPostsPage,
  EnquiryReview,
};
