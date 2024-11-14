import Button from "src/components/Button";
//import { i18n } from "src/i18n";
import theme from "src/styles/theme";

import { ModalFooterContainer } from "./styles";

type ModalFooterProps = {
  onConfirm: () => void;
  onClose: () => void;
};

const Footer: React.FC<ModalFooterProps> = ({ onConfirm, onClose }) => (
  <ModalFooterContainer>
    <Button variant="secondary" onClick={onClose}>
      {/* {i18n.t("shared.cancel")} */}
      Cancelar
    </Button>
    <Button variant="primary" onClick={onConfirm} color={theme.colors.cajuRed}>
      {/* {i18n.t("shared.remove")} */}
      Confirmar
    </Button>
  </ModalFooterContainer>
);

export default Footer;
