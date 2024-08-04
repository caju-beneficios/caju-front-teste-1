import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import Button from "~/components/Buttons";
import { IconButton } from "~/components/Buttons/IconButton";
import TextField from "~/components/TextField";
import routes from "~/router/routes";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import { SearchBarProps } from "./types";
import { validateCPF } from "~/utils/validators";
import { maskCPF } from "~/utils/mask";

export const SearchBar = ({ onRefresh, onSearch }: SearchBarProps) => {
  const cpfRef = useRef<HTMLInputElement>(null);
  const [cpf, setCPF] = useState("");
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
    const maskedCPF = maskCPF(target.value);
    setCPF(maskedCPF);
  };

  const handleRefresh = () => {
    setCPF("");
    if (cpfRef.current) cpfRef.current.value = "";
    if (onRefresh) onRefresh();
  };

  useEffect(() => {
    if (cpf) {
      onSearch({ cpf: cpf.replace(/\D/g, ""), valid: validateCPF(cpf) });
    }
  }, [cpf]);

  return (
    <>
      <S.Container>
        <TextField
          ref={cpfRef}
          placeholder="Digite um CPF válido"
          onChange={handleInputChange}
          value={cpf}
        />
        <S.Actions>
          <IconButton aria-label="refetch">
            <HiRefresh onClick={handleRefresh} />
          </IconButton>
          <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
        </S.Actions>
      </S.Container>
    </>
  );
};
