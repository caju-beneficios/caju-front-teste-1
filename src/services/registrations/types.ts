export enum RegistrationStatus {
  REVIEW = "REVIEW",
  APPROVED = "APROVED",
  REPROVED = "REPROVED",
}

export type Registration = {
  employeeName: string;
  email: string;
  admissionDate: string;
  status: RegistrationStatus;
  id: number;
};

export type PaylodCreate = Omit<Registration, "id">;
