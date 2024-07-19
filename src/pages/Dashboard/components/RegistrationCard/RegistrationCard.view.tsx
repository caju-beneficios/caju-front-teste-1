import * as S from "./RegistrationCard.styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import {
  Registration,
  RegistrationStatus,
} from "~/common/interfaces/Registration";
import { IconButton } from "~/components";

const RegistrationCardView = ({ data }: { data: Registration }) => {
  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{data.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{data.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{data.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        <div className="managing-buttons">
          {data.status === RegistrationStatus.REVIEW && (
            <>
              <S.ButtonSmall bgcolor="rgb(255, 145, 154)">
                Reprovar
              </S.ButtonSmall>
              <S.ButtonSmall bgcolor="rgb(155, 229, 155)">
                Aprovar
              </S.ButtonSmall>
            </>
          )}

          {[RegistrationStatus.APPROVED, RegistrationStatus.REPROVED].includes(
            data.status
          ) && (
            <S.ButtonSmall bgcolor="#ff8858">Revisar novamente</S.ButtonSmall>
          )}
        </div>

        <IconButton className="delete-button">
          <HiOutlineTrash />
        </IconButton>
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCardView;
