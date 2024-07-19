import * as S from "./Dashboard.styles";
import { DashboardProvider } from "./Dashboard.controller";
import { Searchbar, Columns } from "./components";

const DashboardPage = () => {
  return (
    <DashboardProvider>
      <S.Container>
        <Searchbar />
        <Columns />
      </S.Container>
    </DashboardProvider>
  );
};

export default DashboardPage;
