import * as S from "./Button.styles";
import { ButtonProps } from "./Button.types";

export default function Button(props: ButtonProps) {
  const { children, isLoading, disabled, ...rest } = props;

  return (
    <S.ButtonContainer {...rest} disabled={disabled || isLoading}>
      {isLoading ? <S.Spinner /> : children}
    </S.ButtonContainer>
  );
}
