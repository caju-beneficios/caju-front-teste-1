import * as S from "./Searchbar.styles";
import * as React from "react";
import { Button, IconButton, TextField } from "~/components";
import { maskCpf, unmaskCpf } from "~/common/masks";
import { useDashboardController } from "../../Dashboard.controller";
import { useDebounce } from "~/hooks/useDebounce";
import { validateCpf } from "~/common/validations";

const SearchBarView = () => {
  const { fetchRegistrations, refetching, handleAddNewUser } =
    useDashboardController();

  const [search, setSearch] = React.useState("");

  const debouncedSearch = useDebounce(search, 500);

  const handleSearch = React.useCallback(() => {
    const isValidCpf = validateCpf(debouncedSearch);

    fetchRegistrations(isValidCpf ? unmaskCpf(debouncedSearch) : undefined);
  }, [debouncedSearch, fetchRegistrations]);

  React.useEffect(() => {
    handleSearch();
  }, [debouncedSearch]);

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
