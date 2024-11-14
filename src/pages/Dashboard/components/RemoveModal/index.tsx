import { useEffect } from "react";

import {
  ConfirmModal,
  Body,
  Footer,
  Header,
} from "src/components/ConfirmModal";
//import { i18n } from "src/i18n";

import { useAppContext } from "src/pages/Dashboard/contexts/user";

import { ContainerContent, SpanContent } from "./style";

type ModalProps = {
  onClose: (cancelByButton?: boolean) => void;
  onConfirm: () => void;
  id?: string;
};

const RemoveModal: React.FC<ModalProps> = ({ onClose, onConfirm }) => {
  const { currentUser } = useAppContext();

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  return (
    <ConfirmModal onCloseClick={onClose} width={320} maxWidth="none">
      <Header size={14}>Tem certeza que deseja fazer essa ação?</Header>
      <Body>
        <ContainerContent>
          <SpanContent>Usuário: {currentUser?.employeeName}</SpanContent>
        </ContainerContent>
      </Body>
      <Footer onClose={() => onClose(true)} onConfirm={onConfirm} />
    </ConfirmModal>
  );
};

export default RemoveModal;
