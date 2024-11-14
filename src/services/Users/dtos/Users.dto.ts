export type User = {
  admissionDate: string;
  email: string;
  employeeName: string;
  status: Status;
  cpf: string;
  id: number;
};

export type Status = "APPROVED" | "REVIEW" | "REPROVED";

export type Action = Status | "REMOVE";
