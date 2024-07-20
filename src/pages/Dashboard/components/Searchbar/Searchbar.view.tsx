import { useHistory } from "react-router-dom";
import { Button, IconButton, TextField } from "~/components";

import routes from "~/router/routes";
import * as S from "./Searchbar.styles";
import * as React from "react";
import { maskCpf, unmaskCpf } from "~/common/masks";
import { useDashboardController } from "../../Dashboard.controller";
import { validateCpf } from "~/common/validations";

const SearchBarView = () => {
  const { fetchRegistrations, refetching } = useDashboardController();

  const [search, setSearch] = React.useState("");

  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  React.useEffect(() => {
    if (validateCpf(search)) {
      void fetchRegistrations(unmaskCpf(search));
    }
  }, [fetchRegistrations, search]);

  return (
    <S.Container>
      <TextField
        placeholder="Digite um CPF válido"
        value={search}
        onChange={(e) => {
          const value = e.target.value || "";

          setSearch(maskCpf(value));
        }}
      />

      <S.Actions>
        <IconButton
          aria-label="Atualizar listagem"
          onClick={() => fetchRegistrations()}
        >
          <S.RefetchingIcon refetching={refetching} />
        </IconButton>

        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBarView;
