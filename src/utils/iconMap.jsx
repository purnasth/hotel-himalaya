import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";
import { PiProjectorScreenBold } from "react-icons/pi";

const iconMap = {
  ...TbIcons,
  ...MdIcons,
  PiProjectorScreenBold,
};

export const getIconComponent = (iconName) => {
  return iconMap[iconName] || null;
};
