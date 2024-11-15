import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import useGetRegistrations from "./hooks/registration/useGetRegistrations";
import { UseGetRegistrationsReturn } from "./hooks/registration/types";

const DashboardPage = () => {
  const registrationsQuery: UseGetRegistrationsReturn = useGetRegistrations({ currentPage: 1 });
  return (
    <S.Container>
      <SearchBar />
      <Collumns registrationsQuery={registrationsQuery} />
    </S.Container>
  );
};
export default DashboardPage;
