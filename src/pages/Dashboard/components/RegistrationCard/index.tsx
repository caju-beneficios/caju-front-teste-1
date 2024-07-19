import styled from "styled-components";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";

type Props = {
  data: any;
};

export const ButtonSmall = styled.button<{
  bgcolor?: string;
  color?: string;
}>`
  font-size: 12px;
  outline: none;
  border-radius: 4px;
  border: none;
  padding: 4px 16px;
  background-color: ${(props) => props.bgcolor ?? "none"};
  color: ${(props) => props.color ?? "#000"};
  cursor: pointer;
`;

const RegistrationCard = (props: Props) => {
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
        <ButtonSmall bgcolor="rgb(255, 145, 154)">Reprovar</ButtonSmall>
        <ButtonSmall bgcolor="rgb(155, 229, 155)">Aprovar</ButtonSmall>
        <ButtonSmall bgcolor="#ff8858">Revisar novamente</ButtonSmall>

        <HiOutlineTrash />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
