import { ConfirmationDialogProps } from "./Confirmation.types";
import {
  BackgroundBackdrop,
  Dialog,
  DialogActions,
  DialogDescription,
  DialogTitle,
} from "./Confirmation.styles";
import Button from "../Button/Button.view";

export default function Confirmation(props: ConfirmationDialogProps) {
  const {
    open,
    title,
    description,
    primaryActionText = "Confirmar",
    secondaryActionText = "Cancelar",
    onSubmit,
    onClose,
  } = props;

  if (!open) return null;

  return (
    <BackgroundBackdrop onClick={onClose}>
      <Dialog>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>

        <DialogActions>
          <Button
            onClick={onClose}
            variant="outlined"
            data-testid="cancel-button"
          >
            {secondaryActionText}
          </Button>
          <Button onClick={onSubmit} data-testid="confirm-button">
            {primaryActionText}
          </Button>
        </DialogActions>
      </Dialog>
    </BackgroundBackdrop>
  );
}
