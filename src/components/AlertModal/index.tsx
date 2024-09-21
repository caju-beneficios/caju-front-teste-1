import { useEffect } from "react";

import { FaXmark } from "react-icons/fa6";

import { Container, AlertModalTitle, Content, Wrapper, Overlay } from "./styles";

import { IconButton } from "~/components/IconButton";

type AlertModalProps = {
  title: string;
  show: boolean;
  onClose: () => void;
};

export function AlertModal({
  show,
  title,
  children,
  onClose,
}: React.PropsWithChildren<AlertModalProps>) {
  useEffect(() => {
    function handleEscKeyPress(event: KeyboardEvent) {
      event.stopPropagation();

      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };

    //eslint-disable-next-line
  }, []);

  return (
    <Wrapper role="dialog">
      {show ? (
        <>
          <Overlay onClick={onClose} />

          <Container>
            <header>
              <AlertModalTitle title={title}>{title}</AlertModalTitle>

              <IconButton onClick={onClose}>
                <FaXmark size={24} />
              </IconButton>
            </header>

            <Content>{children}</Content>
          </Container>
        </>) : null
      }
    </Wrapper>
  );
}
