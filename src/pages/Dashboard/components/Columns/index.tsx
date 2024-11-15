import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import { UseGetRegistrationsReturn } from "../../hooks/registration/types";
import { useMemo } from "react";
import { ApprovedFilterStrategy, ReprovedFilterStrategy, ReviewFilterStrategy } from "./strategy/filterStrategies";
import type { IFilterStrategy } from "./strategy/filterStrategyInterface";
import { APPROVED, REPROVED, REVIEW } from "./constants";

const allColumns = [
  { status: REVIEW, title: "Pronto para revisar" },
  { status: APPROVED, title: "Aprovado" },
  { status: REPROVED, title: "Reprovado" },
];

type ColumnsProps = {
  registrationsQuery: UseGetRegistrationsReturn;
};

const Collumns: React.FC<ColumnsProps> = ({ registrationsQuery }) => {
  const { registrations = [] } = registrationsQuery;

  const filterStrategies = new Map<string, IFilterStrategy>([
    [REVIEW, new ReviewFilterStrategy()],
    [APPROVED, new ApprovedFilterStrategy()],
    [REPROVED, new ReprovedFilterStrategy()],
  ]);

  const renderRegistrationCards = useMemo(() => {
    return allColumns.map((column) => {
      const strategy = filterStrategies.get(column.status);
      const filteredRegistrations = strategy?.filter(registrations);
      return (
        <S.Column status={column.status} key={column.title}>
          <S.TitleColumn status={column.status}>{column.title}</S.TitleColumn>
          <S.CollumContent>
            {(!filteredRegistrations || filteredRegistrations.length === 0) ? (
              <S.EmptyContent>Nenhum Registro Encontrado.</S.EmptyContent>
            ) : (
              filteredRegistrations.map((registration) => (
                <RegistrationCard data={registration} key={registration.id} />
              ))
            )}
          </S.CollumContent>
        </S.Column>
      );
    });
  }, [registrations]);

  return (
    <S.Container>
      {renderRegistrationCards}
    </S.Container >
  );
};

export default Collumns;