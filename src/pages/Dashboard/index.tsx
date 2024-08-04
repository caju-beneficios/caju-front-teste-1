import * as S from "./styles";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchBar } from "./components/Searchbar";
import { useRegistrations } from "~/hooks/registration";
import { Registration, RegistrationStatus } from "~/types/registration";
import { RegistrationService } from "~/services/registration";
import { getColumnByStatus } from "~/utils/columns";
import Loader from "~/components/Loader";
import Collumns from "./components/Columns";
import Modal from "~/components/Modal";
import { ModalStateProps } from "~/components/Modal/types";
import { maskCPF } from "~/utils/mask";

const DashboardPage = () => {
  const history = useHistory();
  const [modal, setModal] = useState<ModalStateProps | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    data,
    isLoading: isRegistrationLoading,
    refetch,
    setFilter,
    isError,
  } = useRegistrations();

  const handleRefresh = async () => {
    setFilter({});
    await refetch();
  };

  const handleSearch = ({ cpf, valid }: any) => {
    if (cpf.length === 11 && !valid) {
      setModal({
        title: "Ops! CPF Inválido",
        content: `O CPF ${maskCPF(
          cpf
        )}, informado na pesquisa não é válido. Confirme o CPF digitado e tente novamente.`,
      });
      return;
    }

    if (cpf.length === 11 && valid) {
      setFilter({ cpf: cpf });
    }
  };

  const handleRegistrationDelete = (registration: Registration) => {
    setIsLoading(true);
    setModal({
      title: "Deseja excluir a admissão?",
      message: "Esta ação é irreversível",
      content: (
        <span>
          Você está tentando excluir a admissão de{" "}
          <strong>{registration.employeeName}</strong>.<br />
          Ao excluir essa admissão não será mais possível acessá-la.
          <br />
          <br />
          Tem certeza que deseja excluir?
        </span>
      ),
      onConfirmCallback: async () => {
        setModal(null);

        try {
          await RegistrationService.remove(registration.id);
          await refetch();

          setModal({
            title: "Admissão excluida",
            content: `A admissão de ${registration.employeeName} foi removida com sucesso!`,
          });
        } catch (error) {
          setModal({
            title: "Ops!",
            content: `Não foi possível excluir a admissão de ${registration.employeeName}. Tente novamente mais tarde.`,
          });
        } finally {
          setIsLoading(false);
        }
      },
    });
  };

  const handleRegistrationUpdate = (
    registration: Registration,
    status: RegistrationStatus
  ) => {
    setIsLoading(true);
    const currentStatus = getColumnByStatus(registration.status);
    const desiredStatus = getColumnByStatus(status);
    setModal({
      title: "Deseja atualizar o status dessa admissão?",
      content: (
        <span>
          Você está tentando atualizar o status da admissão de{" "}
          <strong>{registration.employeeName}</strong> de{" "}
          <strong style={{ color: currentStatus?.color }}>
            {currentStatus?.title}
          </strong>{" "}
          para{" "}
          <strong style={{ color: desiredStatus?.color }}>
            {desiredStatus?.title}
          </strong>
          .
          <br />
          <br />
          Tem certeza que deseja fazer essa atualização?
        </span>
      ),
      onConfirmCallback: async () => {
        setModal(null);

        try {
          await RegistrationService.updateStatus(registration, status);
          await refetch();

          setModal({
            title: "Admissão atualizada",
            content: `A admissão de ${registration.employeeName} foi atualizada com sucesso!`,
          });
        } catch (error) {
          setModal({
            title: "Ops!",
            content: `Não foi possível atualizar a admissão de ${registration.employeeName}. Tente novamente mais tarde.`,
          });
        } finally {
          setIsLoading(false);
        }
      },
    });
  };

  useEffect(() => {
    if (history.location.search.slice(1) === "new-user") {
      setModal({
        title: "Nova admissão",
        content: `A admissão cadastrada já está dispoível na coluna com o status Pronto para revisar.`,
      });
      history.replace({ search: "" });
    }
  }, [history.location.search]);

  useEffect(() => {
    if (
      isLoading === false &&
      isRegistrationLoading === false &&
      data?.length === 0
    ) {
      setModal({
        title: "Nenhuma admissão encontrada!",
        content: `Não existe nenhum registro de admissão! Adicione uma nova clicando no botão Nova Admissão no canto superior direito.`,
      });
    }
  }, [isLoading, isRegistrationLoading, data]);

  useEffect(() => {
    if (isError) {
      setModal({
        title: "Ops!",
        content: `Não foi possível consultar as admissões devido à um erro no servidor. Tente novamente mais tarde.`,
      });
    }
  }, [isError]);

  return (
    <>
      {(isLoading || isRegistrationLoading) && <Loader />}
      {modal && (
        <Modal.Content title={modal?.title} onClose={() => setModal(null)}>
          <>
            {modal.content}
            <Modal.Footer
              message={modal.message}
              onConfirmText="Confirmar"
              onConfirmCallback={modal.onConfirmCallback}
              onCancelText="Cancelar"
              onCancelCallback={() => setModal(null)}
            />
          </>
        </Modal.Content>
      )}
      <S.Container>
        <SearchBar onRefresh={handleRefresh} onSearch={handleSearch} />
        <Collumns
          registrations={data}
          onRegistrationDelete={handleRegistrationDelete}
          onRegistrationUpdate={handleRegistrationUpdate}
        />
      </S.Container>
    </>
  );
};

export default DashboardPage;
