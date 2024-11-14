import { User, Status, Action } from "src/services/Users/dtos/Users.dto";
import { ButtonSmall } from "src/components/Buttons";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import theme from "src/styles/theme";

import { useAppContext } from "src/pages/Dashboard/contexts/user";

type RegistrationCardProps = {
  user: User;
};

interface ButtonProps {
  bgcolor: string;
  label: string;
  action: Action;
}

const RegistrationCard: React.FC<RegistrationCardProps> = ({ user }) => {
  const { setCurrentUser, setAction, setIsOpen } = useAppContext();

  const handleAction = (action: Action): void => {
    setCurrentUser(user);
    setAction(action);
    setIsOpen(true);
  };

  const getButtonsByStatus = (status: Status): ButtonProps[] => {
    switch (status) {
      case "APPROVED":
      case "REPROVED":
        return [
          {
            bgcolor: theme.colors.cajuCoralOrange,
            label: "Revisar novamente",
            action: "REVIEW",
          },
        ];
      case "REVIEW":
        return [
          {
            bgcolor: theme.colors.cajuSoftPink,
            label: "Reprovar",
            action: "REPROVED",
          },
          {
            bgcolor: theme.colors.cajuPastelGreen,
            label: "Aprovar",
            action: "APPROVED",
          },
        ];
      default:
        return [];
    }
  };

  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{user.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{user.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{user.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        {getButtonsByStatus(user.status as Status).map((button, index) => (
          <ButtonSmall
            key={index}
            $bgcolor={button.bgcolor}
            onClick={() => handleAction(button.action)}
          >
            {button.label}
          </ButtonSmall>
        ))}
        <HiOutlineTrash onClick={() => handleAction("REMOVE")} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
