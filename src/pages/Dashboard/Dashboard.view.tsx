import * as S from "./Dashboard.styles";
import { useDashboardController } from "./Dashboard.controller";
import { Searchbar, Columns } from "./components";

const DashboardPage = () => {
  const { registrations } = useDashboardController();

  return (
    <S.Container>
      <Searchbar />
      <Columns registrations={registrations} />
    </S.Container>
  );
};

export default DashboardPage;
