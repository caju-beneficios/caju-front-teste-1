import * as S from "./NewUser.styles";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { useNewUserController } from "./NewUser.controller";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { maskCpf } from "~/common/masks";
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
      <IconButton
        onClick={() => goToHome()}
        aria-label="Voltar à página anterior"
      >
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
          name="document_number"
          control={control}
          render={({ field }) => (
            <TextField
              placeholder="CPF"
              label="CPF"
              error={errors.document_number?.message}
              disabled={isSubmitting}
              {...field}
              onChange={(e: React.ChangeEvent<HTMLInputElement> | null) => {
                const value = e?.target?.value || "";
                field.onChange(maskCpf(value));
              }}
            />
          )}
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
            data-testid="submit-form-button"
            size="lg"
          >
            Cadastrar
          </Button>
        </S.ButtonWrapper>
      </S.FormContainer>
    </S.Card>
  );
};

export default NewUserPage;
