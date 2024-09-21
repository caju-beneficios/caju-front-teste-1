import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form"
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";

import { validationSchema, type ValidationSchema } from './constants';
import * as S from "./styles";

import Button from "~/components/Buttons";
import { IconButton } from "~/components/Buttons/IconButton";
import TextField from "~/components/TextField";
import { Status } from "~/enum";
import { useToast } from '~/hooks';
import routes from "~/router/routes";
import { registerEmployee } from "~/services";
import { formatCPF, removeCPFFormatting } from "~/utils";

const NewUserPage = () => {
  const { addToaster } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ValidationSchema>({
    defaultValues: {
      employeeName: "",
      email: "",
      cpf: "",
      admissionDate: "",
      status: Status.Review
    },
    resolver: zodResolver(validationSchema),
  })

  const history = useHistory();

  const cpfValue = watch("cpf");

  useEffect(() => {
    setValue("cpf", formatCPF(cpfValue));
    //eslint-disable-next-line
  }, [cpfValue])

  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const onSubmit = async (data: ValidationSchema) => {
    try {
      await registerEmployee({ ...data, cpf: removeCPFFormatting(data.cpf) });

      addToaster({
        text: "Usuários cadastrado com sucesso.",
        variant: "success",
      });

      goToHome();
    } catch (error) {
      addToaster({
        text: "Não foi possível cadastrar o novo usuário!",
        variant: "danger",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.Card>
          <IconButton onClick={() => goToHome()} aria-label="back">
            <HiOutlineArrowLeft size={24} />
          </IconButton>

          <TextField placeholder="Nome" label="Nome completo" {...register("employeeName")} error={errors.employeeName?.message} />

          <TextField placeholder="E-mail" label="E-mail" type="email" {...register("email")} error={errors.email?.message} />

          <TextField placeholder="CPF" label="CPF" {...register("cpf")} error={errors.cpf?.message} />

          <TextField id="admissionDate" label="Data de admissão" type="date" {...register("admissionDate")} error={errors.admissionDate?.message} />

          <Button type="submit">Cadastrar</Button>
        </S.Card>
      </S.Container>
    </form>
  );
};

export default NewUserPage;
