import * as S from "./styles";
import RegistrationCard from "src/pages/Dashboard/components/RegistrationCard";
import { User, Status } from "src/services/Users/dtos/Users.dto";

type Column = {
  status: Status;
  title: string;
};

const allColumns: Column[] = [
  { status: "REVIEW", title: "Pronto para revisar" },
  { status: "APPROVED", title: "Aprovado" },
  { status: "REPROVED", title: "Reprovado" },
];

type ColumnsProps = {
  registrations?: User[];
};

const Columns: React.FC<ColumnsProps> = ({ registrations }) => {
  return (
    <S.Container>
      {allColumns.map((column) => {
        return (
          <S.Column $status={column.status} key={column.title}>
            <>
              <S.TitleColumn $status={column.status}>
                {column.title}
              </S.TitleColumn>
              <S.ColumnContent>
                {registrations
                  ?.filter(
                    (registration) => registration.status === column.status
                  )
                  .map((registration) => {
                    return (
                      <RegistrationCard
                        user={registration}
                        key={registration.id}
                      />
                    );
                  })}
              </S.ColumnContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Columns;
