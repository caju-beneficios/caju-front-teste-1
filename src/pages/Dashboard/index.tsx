import Collumns from "src/pages/Dashboard/components/Columns";
import * as S from "src/pages/Dashboard/styles";
import { SearchBar } from "src/pages/Dashboard/components/Searchbar";

import { useUsersList } from "src/services/Users/hooks";
import { useEffect, useState } from "react";
import RemoveModal from "src/pages/Dashboard/components/RemoveModal";

import { useAppContext } from "src/pages/Dashboard/contexts/user";
import {
  fetchChangeStatusUser,
  fetchDeleteUser,
} from "src/services/Users/services";
import { useMutation } from "@tanstack/react-query";
import { cajuQueryClient } from "src/App";
import { messageApi } from "src/components/Message";

const DashboardPage = () => {
  const {
    users,
    setIsLoading,
    setUsers,
    isOpen,
    setIsOpen,
    currentUser,
    action,
  } = useAppContext();

  const [cpfSearch, setCpfSearch] = useState<string | undefined>(undefined);

  const { data, isLoading: fetchLoading } = useUsersList(cpfSearch);

  const { mutate: changeStatusUser } = useMutation(
    () => fetchChangeStatusUser(action, currentUser),
    {
      onSuccess: () => {
        cajuQueryClient.invalidateQueries(["usersList"]);
        setIsOpen(false);
        messageApi.open({
          type: "success",
          content: "Ação concluida com sucesso!",
        });
      },
    }
  );

  const { mutate: deleteUser } = useMutation(
    () => fetchDeleteUser(currentUser?.id),
    {
      onSuccess: () => {
        cajuQueryClient.invalidateQueries(["usersList"]);
        setIsOpen(false);
        messageApi.open({
          type: "success",
          content: "Usuário excluido com sucesso!",
        });
      },
    }
  );

  const handleActions = (): void => {
    if (action === "REMOVE") {
      deleteUser();
    }
    changeStatusUser();
  };

  useEffect(() => {
    if (fetchLoading) {
      setIsLoading(true);
    }

    if (data) {
      setUsers(data);
      setIsLoading(false);
    }
  }, [data, fetchLoading, setIsLoading, setUsers]);

  return (
    <S.Container>
      {isOpen && (
        <RemoveModal
          onClose={() => setIsOpen(false)}
          onConfirm={() => {
            handleActions();
          }}
        />
      )}

      <SearchBar handleSearch={(cpf) => setCpfSearch(cpf)} />
      <Collumns registrations={users} />
    </S.Container>
  );
};
export default DashboardPage;
