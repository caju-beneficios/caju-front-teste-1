import { Registration } from "~/common/interfaces/Registration";

export interface RegistrationCardProps {
  data: Registration;
  onApprove: (id: string) => void;
  onReprove: (id: string) => void;
  onReviewAgain: (id: string) => void;
  onDelete: (id: string) => void;
}
