
import { FaXmark } from "react-icons/fa6";

import { IconButton } from '../IconButton';
import { ToasterContainer, ToasterTitle, ToasterContent } from './styles';
import type { ToasterVariant } from "./types";

interface ToasterProps {
  text: string;
  onClose?: () => void;
  variant: ToasterVariant;
}

export function Toaster({ text, onClose, variant }: ToasterProps) {
  return (
    <ToasterContainer data-testid="toaster-container" $variant={variant}>
      <ToasterContent>
        <div>
          <ToasterTitle>{text}</ToasterTitle>

          {onClose && (
            <IconButton onClick={onClose}>
              <FaXmark size={24} />
            </IconButton>
          )}
        </div>
      </ToasterContent>
    </ToasterContainer>
  );
}

export default Toaster;
