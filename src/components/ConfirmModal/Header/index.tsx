import { useContext } from "react";

import Icon from "src/components/Icon";
import { ModalContext } from "src/components/ConfirmModal/context";
import theme from "src/styles/theme";

import { ModalHeaderContainer, ButtonIconContainer, Title } from "./styles";

type ModalHeaderProps = {
  size?: number;
  children: React.ReactNode;
};
const Header: React.FC<ModalHeaderProps> = ({ children, size }) => {
  const { onCloseClick } = useContext(ModalContext);
  return (
    <ModalHeaderContainer>
      <Title size={size || 20}>{children}</Title>
      <ButtonIconContainer
        onClick={() => {
          onCloseClick();
        }}
      >
        <Icon name="xmark" color={theme.colors.cajuBlack} width={24} />
      </ButtonIconContainer>
    </ModalHeaderContainer>
  );
};

export default Header;
