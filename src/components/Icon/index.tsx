import { ImgHTMLAttributes } from "react";
import SVG from "react-inlinesvg";

import xmark from "src/assets/icons/xmark.svg";

import { IconContainer } from "./styles";

type IconComponentType = {
  [key: string]: string;
};

const iconNameAndPathMap: IconComponentType = {
  xmark,
};

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  color?: string;
  size?: "md" | "sm" | "xs" | "lg";
  variant?: "success" | "info" | "warning" | "error" | "light";
}

const Icon: React.FC<IconProps> = ({ name, color, variant, size = "md" }) => {
  const SvgIcon = iconNameAndPathMap[name];
  return SvgIcon ? (
    <IconContainer color={color} size={size} variant={variant}>
      <SVG src={SvgIcon} />
    </IconContainer>
  ) : null;
};

export default Icon;
