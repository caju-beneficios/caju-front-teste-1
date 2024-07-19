import RegistrationCard from "../RegistrationCard/RegistrationCard.view";
import * as S from "./Columns.styles";
import { RegistrationStatus } from "~/common/interfaces/Registration";
import { Column, ColumnsProps } from "./Columns.types";

const allColumns: Column[] = [
  { status: RegistrationStatus.REVIEW, title: "Pronto para revisar" },
  { status: RegistrationStatus.APPROVED, title: "Aprovado" },
  { status: RegistrationStatus.REPROVED, title: "Reprovado" },
];

const ColumnsView = (props: ColumnsProps) => {
  const renderColumn = ({ status, title }: Column) => {
    const filteredRegistrations = props?.registrations?.filter(
      (registration) => registration.status === status
    );

    return (
      <S.Column status={status} key={status}>
        <S.TitleColumn status={status}>{title}</S.TitleColumn>
        <S.CollumContent>
          {filteredRegistrations?.map((registration) => (
            <RegistrationCard data={registration} key={registration.id} />
          ))}
        </S.CollumContent>
      </S.Column>
    );
  };

  return <S.Container>{allColumns.map(renderColumn)}</S.Container>;
};

export default ColumnsView;
