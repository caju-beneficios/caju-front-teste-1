import { RegistrationStatus } from "~/common/interfaces/Registration";
import { Column } from "./Columns.types";

export const allColumns: Column[] = [
  { status: RegistrationStatus.REVIEW, title: "Pronto para revisar" },
  { status: RegistrationStatus.APPROVED, title: "Aprovado" },
  { status: RegistrationStatus.REPROVED, title: "Reprovado" },
];
