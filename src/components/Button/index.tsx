import { HTMLAttributes } from "react";

import Icon from "src/components/Icon";

import { ButtonContainer, StyleProps } from "./styles";

export interface ButtonProps
  extends StyleProps,
    HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  variant = "primary",
  size = "md",
  children,
  icons,
  ...props
}) => (
  <ButtonContainer disabled={disabled} variant={variant} size={size} {...props}>
    {icons && <Icon {...icons} />}
    {children}
  </ButtonContainer>
);

export default Button;
