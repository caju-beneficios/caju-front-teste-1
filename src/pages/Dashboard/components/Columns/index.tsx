
import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";

import { useRegistration } from "~/hooks";
import type { EmployeeStatus } from "~/models";

const ALL_COLUMNS: Array<{ status: EmployeeStatus, title: string }> = [
  { status: 'REVIEW', title: "Pronto para revisar" },
  { status: 'APPROVED', title: "Aprovado" },
  { status: 'REPROVED', title: "Reprovado" },
];

const Collumns = () => {
  const { registrations } = useRegistration();

  return (
    <S.Container>
      {ALL_COLUMNS.map((column) => {
        return (
          <S.Column $status={column.status} key={column.title}>
            <>
              <S.TitleColumn $status={column.status}>
                {column.title}
              </S.TitleColumn>

              <S.CollumContent>
                {registrations?.filter((registration) => registration.status === column.status).map((registration) => {
                  return (
                    <RegistrationCard
                      data={registration}
                      key={registration.id}
                    />
                  );
                })}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
