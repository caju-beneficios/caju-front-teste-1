import {
  Registration,
  RegistrationStatus,
} from "~/common/interfaces/Registration";

export type RegistrationsList = {
  [key in RegistrationStatus]: Registration[];
};
