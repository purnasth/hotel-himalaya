import * as TbIcons from "react-icons/tb";
import { PiProjectorScreenBold } from "react-icons/pi";

const iconMap = {
  ...TbIcons,
  PiProjectorScreenBold,
};

export const getIconComponent = (iconName) => {
  return iconMap[iconName] || null;
};
