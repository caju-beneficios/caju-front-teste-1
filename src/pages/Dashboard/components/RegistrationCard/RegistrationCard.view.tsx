import * as S from "./RegistrationCard.styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { RegistrationStatus } from "~/common/interfaces/Registration";
import { IconButton } from "~/components";
import { RegistrationCardProps } from "./RegistrationCard.types";

const RegistrationCardView = (props: RegistrationCardProps) => {
  const { data, onApprove, onReprove, onReviewAgain, onDelete } = props;

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
              <S.ButtonSmall
                bgcolor="rgb(255, 145, 154)"
                onClick={() => onReprove(data.id)}
              >
                Reprovar
              </S.ButtonSmall>
              <S.ButtonSmall
                bgcolor="rgb(155, 229, 155)"
                onClick={() => onApprove(data.id)}
              >
                Aprovar
              </S.ButtonSmall>
            </>
          )}

          {[RegistrationStatus.APPROVED, RegistrationStatus.REPROVED].includes(
            data.status
          ) && (
            <S.ButtonSmall
              bgcolor="#ff8858"
              onClick={() => onReviewAgain(data.id)}
            >
              Revisar novamente
            </S.ButtonSmall>
          )}
        </div>

        <IconButton className="delete-button" onClick={() => onDelete(data.id)}>
          <HiOutlineTrash />
        </IconButton>
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCardView;
