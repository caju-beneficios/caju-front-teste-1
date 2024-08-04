import { Registration, RegistrationStatus } from "~/types/registration";

export interface RegistrationCardProps {
  data: Registration;
  onDelete: (registration: Registration) => void;
  onUpdate: (registration: Registration, status: RegistrationStatus) => void;
}
