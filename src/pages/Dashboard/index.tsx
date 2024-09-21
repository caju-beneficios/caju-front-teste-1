import { useEffect } from 'react';

import Collumns from "./components/Columns";
import { SearchBar } from "./components/Searchbar";
import * as S from "./styles";

import Loader from "~/components/Loader";
import { useRegistration } from '~/hooks';

const DashboardPage = () => {
  const { fetchEmployees, isLoading } = useRegistration();

  useEffect(() => {
    fetchEmployees();
    //eslint-disable-next-line
  }, [])

  return (
    <S.Container>
      {isLoading ? <Loader /> : null}
      <SearchBar />

      <Collumns />
    </S.Container>
  );
};
export default DashboardPage;
