import { RegistrationStatus } from "~/types/registration";

interface Column {
  status: RegistrationStatus;
  title: string;
  color: string;
}

export const allColumns: Column[] = [
  { status: "REVIEW", title: "Pronto para revisar", color: "#EFC24D" },
  { status: "APPROVED", title: "Aprovado", color: "#4242DF" },
  { status: "REPROVED", title: "Reprovado", color: "#CE2893" },
];

export const getColumnByStatus = (status: RegistrationStatus) =>
  allColumns.find((c) => c.status === status);
