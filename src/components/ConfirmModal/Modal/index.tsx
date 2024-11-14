import { ModalContext } from "src/components/ConfirmModal/context";

import { Container, ModalContainer } from "./styles";

interface ModalProps {
  width?: number | string;
  maxWidth?: number | string;
  noBackground?: boolean;
  onCloseClick: () => void;
  children: React.ReactNode;
}

const ConfirmModal: React.FC<ModalProps> = ({
  width = 320,
  maxWidth = "50vw",
  noBackground = false,
  onCloseClick,
  children,
}) => {
  const onKeyDown = ({ key }: React.KeyboardEvent): void => {
    if (key === "Escape") onCloseClick();
  };

  return (
    <ModalContext.Provider value={{ onCloseClick }}>
      <Container $noBackground={noBackground} onKeyDown={onKeyDown}>
        <ModalContainer width={width} maxWidth={maxWidth}>
          {children}
        </ModalContainer>
      </Container>
    </ModalContext.Provider>
  );
};
export default ConfirmModal;
