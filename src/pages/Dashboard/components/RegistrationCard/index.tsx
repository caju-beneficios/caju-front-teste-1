import { ButtonSmall } from "~/components/Buttons";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { RegistrationStatus } from "~/types/registration";
import { RegistrationCardProps } from "./types";

const RegistrationCard = (props: RegistrationCardProps) => {
  const handleUpdateStatus = (status: RegistrationStatus) => {
    props.onUpdate(props.data, status);
  };

  return (
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
        <S.Status>
          {props.data.status === "REVIEW" && (
            <ButtonSmall
              bgcolor="rgb(155, 229, 155)"
              onClick={() => handleUpdateStatus("APPROVED")}
            >
              Aprovar
            </ButtonSmall>
          )}
          {props.data.status === "REVIEW" && (
            <ButtonSmall
              bgcolor="rgb(255, 145, 154)"
              onClick={() => handleUpdateStatus("REPROVED")}
            >
              Reprovar
            </ButtonSmall>
          )}
          {props.data.status !== "REVIEW" && (
            <ButtonSmall
              bgcolor="#ff8858"
              onClick={() => handleUpdateStatus("REVIEW")}
            >
              Revisar novamente
            </ButtonSmall>
          )}
        </S.Status>

        <HiOutlineTrash onClick={() => props.onDelete(props.data)} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
