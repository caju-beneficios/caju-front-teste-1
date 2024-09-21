import { useState } from "react";

import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";

import * as S from "./styles";

import { AlertModal } from '~/components/AlertModal';
import { ButtonSmall } from "~/components/Buttons";
import { Status } from "~/enum";
import { useRegistration, useToast } from "~/hooks";
import type { Employee, EmployeeStatus } from "~/models";
import { deleteEmployee, editEmployee } from "~/services";
import { theme } from "~/styles"

type Props = {
  data: Employee;
};

type ActionFunction = (...args: any[]) => void;

type ModalProps = {
  title: string;
  content: string;
  show: boolean;
}

const RegistrationCard = (props: Props) => {
  const { addToaster } = useToast();
  const { setRegistrations } = useRegistration();

  const [modalProps, setModalProps] = useState<ModalProps>({ title: "", content: "", show: false });
  const [currentAction, setCurrentAction] = useState<{
    action: ActionFunction | null;
    params: any[];
  }>({ action: null, params: [] });

  const resetModalProps = () => {
    setModalProps({ title: "", content: "", show: false });
  }

  const openModalWithAction = (action: ActionFunction, params: any[] = [], modalProps: ModalProps) => {
    setCurrentAction({ action, params });
    setModalProps(modalProps);
  };

  const handleYesClick = () => {
    if (currentAction.action) {
      currentAction.action(...currentAction.params);
    }

    setCurrentAction({ action: null, params: [] });
    resetModalProps()
  };

  const handleNoClick = () => {
    setCurrentAction({ action: null, params: [] });
    resetModalProps()
  };

  const isReviewPending = () => {
    return props.data.status === Status.Review;
  }

  const changeEmployeeStatus = async (status: EmployeeStatus) => {
    try {
      const response = await editEmployee({ ...props.data, status });

      setRegistrations((prevRegistrations) =>
        prevRegistrations.map((registration) =>
          registration.id === response.id
            ? { ...registration, status: response.status }
            : registration
        )
      );

      addToaster({
        text: "Status alterado com sucesso!",
        variant: 'success',
      });
    } catch (error) {
      addToaster({
        text: "Não foi possível alterar o status do usuário.",
        variant: "danger",
      });
    }
  }

  const removeEmployee = async () => {
    try {
      const response = await deleteEmployee(props.data.id);

      setRegistrations((prevRegistrations) =>
        prevRegistrations.filter((registration) => registration.id !== response.id)
      );

      addToaster({
        text: "Usuário deletado com sucesso!",
        variant: 'success',
      });
    }
    catch (error) {
      addToaster({
        text: "Não foi possível deletar o usuário.",
        variant: "danger",
      });
    }
  }

  return (
    <>
      <S.Card>
        <S.IconAndText>
          <HiOutlineUser />
          <h3>{props.data.employeeName}</h3>
        </S.IconAndText>
        <S.IconAndText>
          <HiOutlineMail />
          <p>{props.data.email}</p>
        </S.IconAndText>
        <S.IconAndText>
          <HiOutlineCalendar />
          <span>{props.data.admissionDate}</span>
        </S.IconAndText>
        <S.Actions>
          {isReviewPending() && (
            <>
              <ButtonSmall $bgcolor={theme.colors["red-400"]} onClick={() => openModalWithAction(changeEmployeeStatus, [Status.Reproved], {
                title: "Tem certeza que deseja alterar o status do funcionário para REPROVADO?",
                content: "Essa ação colocará o usuário na coluna Reprovado e pode ser alterada ao clicar em Revisar novamente, deseja realmente prosseguir com a alteração do status do usuário?",
                show: true
              })}>
                Reprovar
              </ButtonSmall>

              <ButtonSmall $bgcolor={theme.colors["green-400"]} onClick={() => openModalWithAction(changeEmployeeStatus, [Status.Approved], {
                title: "Tem certeza que deseja alterar o status do funcionário para APROVADO?",
                content: "Essa ação colocará o usuário na coluna Aprovado e pode ser alterada ao clicar em Revisar novamente, deseja realmente prosseguir com a alteração do status do usuário?",
                show: true
              })}>
                Aprovar
              </ButtonSmall>
            </>
          )}

          {!isReviewPending() && (
            <ButtonSmall $bgcolor="#ff8858" onClick={() => openModalWithAction(changeEmployeeStatus, [Status.Review], {
              title: 'Tem certeza que deseja revisar novamente o status do funcionário?',
              content: "Essa ação colocará o usuário na coluna Pronto para revisar novamente, deseja realmente prosseguir com a alteração do status do funcionário?",
              show: true
            })}>
              Revisar novamente
            </ButtonSmall>
          )}

          <HiOutlineTrash
            aria-label="delete employee"
            onClick={() => openModalWithAction(removeEmployee, [], {
              title: "Tem certeza que deseja excluir o funcionário?",
              content: "Essa ação não pode der desfeita, deseja realmente prosseguir com a exclusão do funcionário selecionado?",
              show: true
            })}
          />
        </S.Actions>
      </S.Card>


      <AlertModal title={modalProps.title} show={modalProps.show} onClose={() => resetModalProps()}>
        {modalProps.content}

        <S.ModalContent>
          <ButtonSmall $bgcolor={theme.colors["red-400"]} onClick={() => handleNoClick()}>Não</ButtonSmall>
          <ButtonSmall $bgcolor={theme.colors["green-400"]} onClick={() => handleYesClick()}>Sim</ButtonSmall>
        </S.ModalContent>
      </AlertModal>
    </>
  );
};

export default RegistrationCard;
