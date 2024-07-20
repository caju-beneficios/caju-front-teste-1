import { PropsWithChildren } from "react";
import {
  Registration,
  RegistrationStatus,
} from "~/common/interfaces/Registration";

export type RegistrationsList = {
  [key in RegistrationStatus]: Registration[];
};

export interface DashboardContextProps {
  registrations: Registration[];
  refetching: boolean;
  fetchRegistrations: (query?: string) => Promise<void>;
  handleApprove: (id: string) => Promise<void>;
  handleReprove: (id: string) => Promise<void>;
  handleReviewAgain: (id: string) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
  handleAddNewUser: () => void;
}

export type DashboardProviderProps = PropsWithChildren<{
  push: (path: string) => void;
}>;
