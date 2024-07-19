import {
  Registration,
  RegistrationStatus,
} from "~/common/interfaces/Registration";

export type Column = {
  status: RegistrationStatus;
  title: string;
};

export interface ColumnsProps {
  registrations?: Registration[];
}
