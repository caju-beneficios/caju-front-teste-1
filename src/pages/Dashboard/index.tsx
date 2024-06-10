import Button from "~/components/Buttons";
import Collumns from "./components/Columns";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { Registration } from "~/services/registrations/types";
import { useHistory } from "react-router-dom";
import routes from "~/router/routes";
import * as RegistrationService from "~/services/registrations";
import { IconButton } from "~/components/Buttons/IconButton";
import { HiRefresh } from "react-icons/hi";

const DashboardPage = () => {
  const history = useHistory();
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await RegistrationService.get();
      setRegistrations(data);
    };
    load();
  }, []);

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };
  return (
    <S.Container>
      <S.Actions>
        <IconButton>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
      <Collumns registrations={registrations} />
    </S.Container>
  );
};
export default DashboardPage;
