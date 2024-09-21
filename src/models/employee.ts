export type EmployeeStatus = "APPROVED" | "REPROVED" | "REVIEW";

export type Employee = {
  id: number;
  employeeName: string;
  email: string;
  cpf: string;
  admissionDate: string;
  status: EmployeeStatus;
};
