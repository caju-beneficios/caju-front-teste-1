import * as S from "./Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export default function Button(props: ButtonProps) {
  const { children, isLoading, ...rest } = props;

  return (
    <S.ButtonContainer {...rest}>
      {isLoading ? <S.Spinner /> : children}
    </S.ButtonContainer>
  );
}
