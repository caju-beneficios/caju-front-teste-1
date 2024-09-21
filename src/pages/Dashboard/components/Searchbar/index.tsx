import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form"
import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";

import { validationSchema, type ValidationSchema } from './constants';
import * as S from "./styles";

import Button from "~/components/Buttons"
import { IconButton } from "~/components/Buttons/IconButton";
import TextField from "~/components/TextField";
import { useRegistration } from '~/hooks';
import routes from "~/router/routes";
import { isValidCPF, formatCPF, removeCPFFormatting } from '~/utils';

export const SearchBar = () => {
  const { fetchEmployees } = useRegistration();

  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const {
    register,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ValidationSchema>({
    defaultValues: {
      cpf: "",
    },
    resolver: zodResolver(validationSchema),
  })

  const cpfValue = watch("cpf");

  useEffect(() => {
    setValue("cpf", formatCPF(cpfValue));

    if (isValidCPF(cpfValue)) {
      fetchEmployees(removeCPFFormatting(cpfValue));
      reset();
    }

    //eslint-disable-next-line
  }, [cpfValue])

  return (
    <S.Container>
      <TextField placeholder="Digite um CPF válido" {...register("cpf")} error={errors.cpf?.message} />

      <S.Actions>
        <IconButton aria-label="refetch" onClick={() => fetchEmployees()}>
          <HiRefresh />
        </IconButton>

        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
