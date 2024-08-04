import { HiOutlineX } from "react-icons/hi";
import { ContentProps, FooterProps } from "./types";
import { ButtonSmall } from "../Buttons";
import {
  Body,
  Container,
  FooterActions,
  FooterContainer,
  Header,
} from "./styles";
import { BackgroundContainer } from "../SharedStyles";

const Content = (props: ContentProps) => {
  return (
    <BackgroundContainer onClick={props.onClose}>
      <Container onClick={(e: Event) => e.stopPropagation()}>
        <Header>
          <h4>{props.title}</h4>
          <HiOutlineX className="close" onClick={props.onClose} />
        </Header>
        <Body>{props.children}</Body>
      </Container>
    </BackgroundContainer>
  );
};

const Footer = (props: FooterProps) => {
  return (
    <FooterContainer>
      <span>{props.message}</span>

      <FooterActions>
        {props.onCancelText && props.onConfirmCallback && (
          <ButtonSmall
            bgcolor="rgb(255, 145, 154)"
            onClick={props.onCancelCallback}
          >
            {props.onCancelText}
          </ButtonSmall>
        )}
        {props.onConfirmText && props.onConfirmCallback && (
          <ButtonSmall
            bgcolor="rgb(155, 229, 155)"
            onClick={props.onConfirmCallback}
          >
            {props.onConfirmText}
          </ButtonSmall>
        )}
      </FooterActions>
    </FooterContainer>
  );
};

export const Modal = {
  Content,
  Footer,
};

export default Modal;
