import React, { useState, ChangeEvent } from "react";
import TextField from "src/components/TextField";
import * as S from "./styles";
import Button from "src/components/Buttons/";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton } from "src/components/Buttons/IconButton";
import { useHistory } from "react-router-dom";
import routes from "src/router/routes";
import { formatCpf, formatDate } from "src/utils/format";
import { validateForm } from "src/utils/validadors";
import { createAdmission } from "src/services/Users/services";
import { Status } from "src/services/Users/dtos/Users.dto";
import { messageApi } from "src/components/Message";

export type FormData = {
  employeeName: string;
  email: string;
  cpf: string;
  admissionDate: string;
  status: Status;
};

export type FormErrors = {
  employeeName?: string;
  email?: string;
  cpf?: string;
  admissionDate?: string;
};

const NewUserPage: React.FC = () => {
  const history = useHistory();

  const [formData, setFormData] = useState<FormData>({
    employeeName: "",
    email: "",
    cpf: "",
    admissionDate: "",
    status: "REVIEW",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: keyof FormData, value: string) => {
    if (field === "cpf") {
      value = formatCpf(value);
    }
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async () => {
    const { formErros, isValidForm } = validateForm(formData);
    setErrors(formErros);
    if (isValidForm) {
      const cleanFormData: FormData = {
        ...formData,
        cpf: formData.cpf.replace(/\D/g, ""),
        admissionDate: formatDate(formData.admissionDate),
      };
      try {
        await createAdmission(cleanFormData);
        history.push(routes.dashboard);
        messageApi.open({
          type: "success",
          content: "Admissão incluida com sucesso!",
        });
      } catch (error) {
        console.error("Erro ao cadastrar:", error);
      }
    }
  };

  const goToHome = () => {
    history.push(routes.dashboard);
  };

  return (
    <S.Container>
      <S.Card>
        <IconButton onClick={goToHome} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <TextField
          placeholder="Nome"
          label="Nome"
          value={formData.employeeName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("employeeName", e.target.value)
          }
          error={errors.employeeName}
        />
        <TextField
          placeholder="Email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("email", e.target.value)
          }
          error={errors.email}
        />
        <TextField
          placeholder="CPF"
          label="CPF"
          value={formData.cpf}
          maxLength={14}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("cpf", e.target.value)
          }
          error={errors.cpf}
        />
        <TextField
          label="Data de admissão"
          type="date"
          value={formData.admissionDate}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("admissionDate", e.target.value)
          }
          error={errors.admissionDate}
        />
        <Button onClick={handleSubmit}>Cadastrar</Button>
      </S.Card>
    </S.Container>
  );
};

export default NewUserPage;
