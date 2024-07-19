import { useDashboardController } from "../../Dashboard.controller";
import RegistrationCard from "../RegistrationCard/RegistrationCard.view";
import { allColumns } from "./Columns.static";
import * as S from "./Columns.styles";
import { Column } from "./Columns.types";

const ColumnsView = () => {
  const {
    registrations,
    handleApprove,
    handleReprove,
    handleReviewAgain,
    handleDelete,
  } = useDashboardController();

  const renderColumn = ({ status, title }: Column) => {
    const filteredRegistrations = registrations?.filter(
      (registration) => registration.status === status
    );

    return (
      <S.Column status={status} key={status}>
        <S.TitleColumn status={status}>{title}</S.TitleColumn>
        <S.CollumContent>
          {filteredRegistrations?.map((registration) => (
            <RegistrationCard
              key={registration.id}
              data={registration}
              onApprove={handleApprove}
              onReprove={handleReprove}
              onReviewAgain={handleReviewAgain}
              onDelete={handleDelete}
            />
          ))}
        </S.CollumContent>
      </S.Column>
    );
  };

  return <S.Container>{allColumns.map(renderColumn)}</S.Container>;
};

export default ColumnsView;
