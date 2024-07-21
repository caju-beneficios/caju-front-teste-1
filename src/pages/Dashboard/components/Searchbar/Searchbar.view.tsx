import * as S from "./Searchbar.styles";
import * as React from "react";
import { Button, IconButton, TextField } from "~/components";
import { maskCpf, unmaskCpf } from "~/common/masks";
import { useDashboardController } from "../../Dashboard.controller";
import { validateCpf } from "~/common/validations";

const SearchBarView = () => {
  const { fetchRegistrations, refetching, handleAddNewUser } =
    useDashboardController();

  const [search, setSearch] = React.useState("");
  const [isFiltering, setIsFiltering] = React.useState(false);

  const handleSearch = React.useCallback(() => {
    const isValidCpf = validateCpf(unmaskCpf(search));

    if ((!isValidCpf && !isFiltering) || (isValidCpf && isFiltering)) return;

    fetchRegistrations(isValidCpf ? unmaskCpf(search) : undefined);

    setIsFiltering(isValidCpf);
  }, [isFiltering, fetchRegistrations, search]);

  React.useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <S.Container>
      <TextField
        type="search"
        placeholder="Digite um CPF válido"
        value={search}
        inputMode="search"
        role="searchbox"
        onChange={(e) => {
          const value = e.target.value || "";

          setSearch(maskCpf(value));
        }}
      />

      <S.Actions>
        <IconButton
          aria-label="Atualizar listagem"
          onClick={() => handleSearch()}
        >
          <S.RefetchingIcon refetching={refetching} />
        </IconButton>

        <Button size="lg" onClick={handleAddNewUser}>
          Nova Admissão
        </Button>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBarView;
