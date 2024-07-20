import * as React from "react";
import toast from "react-hot-toast";
import routes from "~/router/routes";
import { apiBase } from "~/services/api.service";
import { FormValues, NewUserControllerProps } from "./NewUser.types";
import { unmaskCpf } from "~/common/masks";

export function useNewUserController(props: NewUserControllerProps) {
  const { push } = props;

  const goToHome = () => {
    push(routes.dashboard);
  };

  const handleCreateUser = React.useCallback(
    async (data: FormValues) => {
      try {
        await apiBase.post("/registrations", {
          admissionDate: data.date,
          email: data.email,
          employeeName: data.name,
          cpf: unmaskCpf(data.document_number),
          status: "REVIEW",
        });

        toast.success("Usuário criado com sucesso");

        push(routes.dashboard);
      } catch (error) {
        toast.error("Erro ao criar usuário");
      }
    },
    [push]
  );

  return { goToHome, handleCreateUser };
}
