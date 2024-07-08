import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RouterToTop = ({ children }) => {
  const { pathname } = useLocation();
  const [fadeClass, setFadeClass] = useState("opacity-0");

  useEffect(() => {
    setFadeClass("opacity-0");

    const timer = setTimeout(() => {
      setFadeClass("opacity-100 transition-opacity duration-500 ease-in");
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <div className={fadeClass}>{children}</div>;
};

export default RouterToTop;
