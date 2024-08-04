import { Registration, RegistrationStatus } from "~/types/registration";

export interface ColumnsProps {
  registrations?: Registration[];
  onRegistrationDelete: (registration: Registration) => void;
  onRegistrationUpdate: (
    registration: Registration,
    status: RegistrationStatus
  ) => void;
}
