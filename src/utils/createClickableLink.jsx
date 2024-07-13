import React from "react";
import { Link, NavLink } from "react-router-dom";

export const createClickableLink = (Component) => {
  return ({ to, onClick, ...props }) => (
    <Component
      to={to}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
      {...props}
    />
  );
};

export const ClickableNavLink = createClickableLink(NavLink);
export const ClickableLink = createClickableLink(Link);
