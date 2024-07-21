import * as S from "./RegistrationCard.styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { RegistrationStatus } from "~/common/interfaces/Registration";
import { Button, IconButton } from "~/components";
import { RegistrationCardProps } from "./RegistrationCard.types";
import { formatDate } from "~/common/utils/formatDate";

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
        <span>{formatDate(data.admissionDate)}</span>
      </S.IconAndText>
      <S.Actions>
        <div className="managing-buttons">
          {data.status === RegistrationStatus.REVIEW && (
            <>
              <Button
                size="sm"
                onClick={() => onReprove(data.id)}
                className="reprove-button"
              >
                Reprovar
              </Button>
              <Button
                size="sm"
                onClick={() => onApprove(data.id)}
                className="approve-button"
              >
                Aprovar
              </Button>
            </>
          )}

          {[RegistrationStatus.APPROVED, RegistrationStatus.REPROVED].includes(
            data.status
          ) && (
            <Button
              size="sm"
              onClick={() => onReviewAgain(data.id)}
              className="review-again-button"
            >
              Revisar novamente
            </Button>
          )}
        </div>

        <IconButton
          className="delete-button"
          onClick={() => onDelete(data.id)}
          aria-label="Deletar admissão"
        >
          <HiOutlineTrash />
        </IconButton>
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCardView;
