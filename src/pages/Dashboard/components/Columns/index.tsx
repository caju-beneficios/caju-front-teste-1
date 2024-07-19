import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import {
  Registration,
  RegistrationStatus,
} from "~/common/interfaces/Registration";

type Column = {
  status: RegistrationStatus;
  title: string;
};

const allColumns: Column[] = [
  { status: RegistrationStatus.REVIEW, title: "Pronto para revisar" },
  { status: RegistrationStatus.APPROVED, title: "Aprovado" },
  { status: RegistrationStatus.REPROVED, title: "Reprovado" },
];

type Props = {
  registrations?: Registration[];
};

const Collumns = (props: Props) => {
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

export default Collumns;
