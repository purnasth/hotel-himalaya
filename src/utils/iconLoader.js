import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";

const iconMap = {
  ...FaIcons,
  ...RiIcons,
  ...BiIcons,
};

export const getIconComponent = (iconName) => {
  return iconMap[iconName] || null;
};
