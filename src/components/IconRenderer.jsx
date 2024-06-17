import React from "react";
import { getIconComponent } from "../utils/iconMap";

const IconRenderer = ({ iconName, className, fallbackIcon }) => {
  const IconComponent = getIconComponent(iconName);

  if (IconComponent) {
    return <IconComponent className={className} />;
  }

  return fallbackIcon ? (
    <img src={fallbackIcon} alt="icon" className={className} />
  ) : null;
};

export default IconRenderer;
