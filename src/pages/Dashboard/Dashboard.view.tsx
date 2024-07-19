import Collumns from "./components/Columns";
import * as S from "./Dashboard.styles";
import { SearchBar } from "./components/Searchbar";

const DashboardPage = () => {
  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={[]} />
    </S.Container>
  );
};
export default DashboardPage;
