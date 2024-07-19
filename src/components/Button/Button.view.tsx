import * as S from "./Button.styles";
import { ButtonProps } from "./Button.types";

export default function Button(props: ButtonProps) {
  const { children, isLoading, ...rest } = props;

  return (
    <S.ButtonContainer {...rest}>
      {isLoading ? <S.Spinner /> : children}
    </S.ButtonContainer>
  );
}
