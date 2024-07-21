export interface ConfirmationOptions {
  catchOnCancel?: boolean;
  title: string;
  description: string | React.ReactElement;
  primaryActionText?: string;
  secondaryActionText?: string;
}

export interface ConfirmationDialogProps extends ConfirmationOptions {
  open: boolean;
  onSubmit: () => void;
  onClose: () => void;
}
