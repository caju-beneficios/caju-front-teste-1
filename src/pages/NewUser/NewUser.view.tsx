import * as S from "./NewUser.styles";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { useNewUserController } from "./NewUser.controller";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { maskCpf } from "~/utils/masks";
import { FormValues } from "./NewUser.types";
import { validateSchema } from "./NewUser.static";
import { Button, IconButton, TextField } from "~/components";

const NewUserPage = () => {
  const { push } = useHistory();
  const { goToHome, handleCreateUser } = useNewUserController({ push });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(validateSchema),
  });

  return (
    <S.Card>
      <IconButton onClick={() => goToHome()} aria-label="back">
        <HiOutlineArrowLeft size={24} />
      </IconButton>

      <S.FormContainer>
        <TextField
          placeholder="Nome"
          label="Nome"
          error={errors.name?.message}
          disabled={isSubmitting}
          {...register("name")}
        />

        <TextField
          placeholder="Email"
          label="Email"
          type="email"
          error={errors.email?.message}
          disabled={isSubmitting}
          {...register("email")}
        />

        <Controller
          render={({ field }) => (
            <TextField
              placeholder="CPF"
              label="CPF"
              error={errors.document_number?.message}
              disabled={isSubmitting}
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement> | null) => {
                const value = e?.target?.value || "";
                field.onChange(maskCpf(value));
              }}
            />
          )}
          name="document_number"
          control={control}
        />

        <TextField
          label="Data de admissão"
          type="date"
          error={errors.date?.message}
          disabled={isSubmitting}
          {...register("date")}
        />

        <S.ButtonWrapper>
          <Button
            isLoading={isSubmitting}
            onClick={handleSubmit(handleCreateUser)}
          >
            Cadastrar
          </Button>
        </S.ButtonWrapper>
      </S.FormContainer>
    </S.Card>
  );
};

export default NewUserPage;
