import * as S from "./Dashboard.styles";
import {
  DashboardProvider,
  useDashboardController,
} from "./Dashboard.controller";
import { Searchbar, Columns } from "./components";
import { useHistory } from "react-router-dom";
import { Loading } from "~/components";

const DashboardPage = () => {
  const { refetching, loading } = useDashboardController();
  return (
    <S.Container>
      {(refetching || loading) && <Loading />}
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
