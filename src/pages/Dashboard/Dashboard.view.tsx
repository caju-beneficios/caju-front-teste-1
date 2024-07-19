import Collumns from "./components/Columns";
import * as S from "./Dashboard.styles";
import { SearchBar } from "./components/Searchbar";
import { useDashboardController } from "./Dashboard.controller";

const DashboardPage = () => {
  const { registrations } = useDashboardController();

  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={registrations} />
    </S.Container>
  );
};
export default DashboardPage;
