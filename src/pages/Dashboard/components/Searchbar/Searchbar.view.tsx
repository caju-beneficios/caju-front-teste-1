import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { Button, IconButton, TextField } from "~/components";

import routes from "~/router/routes";
import * as S from "./Searchbar.styles";

const SearchBarView = () => {
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  return (
    <S.Container>
      <TextField placeholder="Digite um CPF válido" />
      <S.Actions>
        <IconButton aria-label="refetch">
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBarView;
