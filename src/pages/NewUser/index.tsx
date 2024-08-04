import TextField from "~/components/TextField";
import * as S from "./styles";
import Button from "~/components/Buttons";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton } from "~/components/Buttons/IconButton";
import { useHistory } from "react-router-dom";
import routes from "~/router/routes";
import { useRef, useState } from "react";
import { RegistrationService } from "~/services/registration";
import {
  validateCPF,
  validateEmail,
  validateFullName,
} from "~/utils/validators";
import Modal from "~/components/Modal";
import { ModalStateProps } from "~/components/Modal/types";
import { maskCPF } from "~/utils/mask";
import Loader from "~/components/Loader";

const NewUserPage = () => {
  const history = useHistory();

  const [modal, setModal] = useState<ModalStateProps | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const admissionDateRef = useRef<HTMLInputElement>(null);
  const cpfRef = useRef<HTMLInputElement>(null);
  const [cpf, setCpf] = useState("");

  const goToHome = (isNewUser: boolean = false) =>
    history.push(`${routes.dashboard}${isNewUser ? "?new-user" : ""}`);

  const handleCreateRegistration = async () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const cpf = cpfRef.current?.value;
    const admissionDate = admissionDateRef.current?.value;

    if (!(name && validateFullName(name))) {
      setModal({
        title: "Ops!",
        content: "Digite um nome válido para realizar o cadastro.",
      });
      return;
    }

    if (!(email && validateEmail(email))) {
      setModal({
        title: "Ops!",
        content: "Digite um email válido para realizar o cadastro.",
      });
      return;
    }

    if (!(cpf && validateCPF(cpf))) {
      setModal({
        title: "Ops!",
        content: "Digite um CPF válido para realizar o cadastro.",
      });
      return;
    }

    if (!admissionDate) {
      setModal({
        title: "Ops!",
        content: "Digite uma Data de admissão válida para realizar o cadastro.",
      });
      return;
    }

    setIsLoading(true);

    try {
      const spreadDate = admissionDate.split("-");

      await RegistrationService.create({
        admissionDate: `${spreadDate[2]}/${spreadDate[1]}/${spreadDate[0]}`,
        email: emailRef.current.value,
        employeeName: nameRef.current.value,
        status: "REVIEW",
        cpf: cpfRef.current.value.replace(/\D/g, ""),
      });

      goToHome(true);
    } catch (error) {
      setModal({
        title: "Ops!",
        content:
          "Não foi possível cadastrar uma nova admissão. Por favor, revise as informações utilizadas e tente novamente.",
      });
    } finally {
      setIsLoading(true);
    }
  };

  const handleChangeCPF = ({ target }: { target: HTMLInputElement }) => {
    const maskedCPF = maskCPF(target.value);

    setCpf(maskedCPF);
  };

  return (
    <>
      {isLoading && <Loader />}
      {modal && (
        <Modal.Content title={modal?.title} onClose={() => setModal(null)}>
          <>{modal.content}</>
        </Modal.Content>
      )}
      <S.Container>
        <S.Card>
          <IconButton onClick={() => goToHome()} aria-label="back">
            <HiOutlineArrowLeft size={24} />
          </IconButton>
          <TextField ref={nameRef} placeholder="Nome" label="Nome" />
          <TextField
            ref={emailRef}
            placeholder="Email"
            label="Email"
            type="email"
          />
          <TextField
            ref={cpfRef}
            placeholder="CPF"
            label="CPF"
            value={cpf}
            onChange={handleChangeCPF}
          />
          <TextField
            ref={admissionDateRef}
            label="Data de admissão"
            type="date"
          />
          <Button onClick={handleCreateRegistration}>Cadastrar</Button>
        </S.Card>
      </S.Container>
    </>
  );
};

export default NewUserPage;
