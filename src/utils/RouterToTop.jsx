import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useLenisScroll from "../hooks/useLenisScroll";

const RouterToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenisScroll();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0.05 }, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
};

export default RouterToTop;
