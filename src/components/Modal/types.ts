export type ModalStateProps = {
  title?: string;
  content?: JSX.Element | string;
  footerVisible?: boolean;
} & FooterProps;

export interface ContentProps {
  children: JSX.Element;
  title?: string;
  onClose: () => void;
}

export interface FooterProps {
  message?: string;
  onConfirmText?: string;
  onCancelText?: string;
  onConfirmCallback?: () => void;
  onCancelCallback?: () => void;
}
