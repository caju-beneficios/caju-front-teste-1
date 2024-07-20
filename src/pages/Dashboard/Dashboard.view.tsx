import * as S from "./Dashboard.styles";
import { DashboardProvider } from "./Dashboard.controller";
import { Searchbar, Columns } from "./components";
import { useHistory } from "react-router-dom";

const DashboardPage = () => {
  return (
    <S.Container>
      <Searchbar />
      <Columns />
    </S.Container>
  );
};

const DashboardWithProvider = () => {
  const { push } = useHistory();

  return (
    <DashboardProvider push={push}>
      <DashboardPage />
    </DashboardProvider>
  );
};

export default DashboardWithProvider;
