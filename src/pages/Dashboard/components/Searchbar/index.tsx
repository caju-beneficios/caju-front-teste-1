import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import Button from "src/components/Buttons";
import { IconButton } from "src/components/Buttons/IconButton";
import routes from "src/router/routes";
import * as S from "./styles";
import { useAppContext } from "src/pages/Dashboard/contexts/user";

import CPFInput from "src/components/InputCpf";
import { useQueryClient } from "@tanstack/react-query";
import { messageApi } from "src/components/Message";

type SearchBarProps = {
  handleSearch: (cpf: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const queryClient = useQueryClient();

  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };
  const { isLoading } = useAppContext();

  return (
    <S.Container>
      <CPFInput handleSearch={handleSearch} />
      <S.Actions>
        <S.RotateIconContainer $isloading={isLoading}>
          <IconButton
            aria-label="refetch"
            onClick={() => {
              queryClient.invalidateQueries(["usersList"]).then(() =>
                messageApi.open({
                  type: "success",
                  content: "Consulta refeita com sucesso!",
                })
              );
            }}
          >
            <HiRefresh />
          </IconButton>
        </S.RotateIconContainer>

        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
