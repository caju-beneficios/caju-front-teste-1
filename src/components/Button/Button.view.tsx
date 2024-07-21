import * as S from "./Button.styles";
import { ButtonProps } from "./Button.types";

export default function Button(props: ButtonProps) {
  const {
    children,
    isLoading,
    disabled,
    size = "md",
    variant = "filled",
    ...rest
  } = props;

  return (
    <S.ButtonContainer
      {...rest}
      disabled={disabled || isLoading}
      size={size}
      variant={variant}
    >
      {isLoading ? <S.Spinner /> : children}
    </S.ButtonContainer>
  );
}
