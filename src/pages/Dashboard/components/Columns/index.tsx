
import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import { Registration, RegistrationStatus } from "~/services/registrations/types";

const allColumns = [
  { status: RegistrationStatus.REVIEW, title: "Pronto para revisar" },
  { status: RegistrationStatus.APPROVED, title: "Aprovado" },
  { status: RegistrationStatus.REPROVED, title: "Reprovado" },
];

type Props = {
  registrations?: Registration[];
};
const Collumns = (props: Props) => {
  
  // const filterRegistrationByStatus = (status: RegistrationStatus) => {
  //   // TODO
  // };

  return (
    <S.Container>
      {allColumns.map((collum) => {
        return (
          <S.Column status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>
                {collum.title}
              </S.TitleColumn>
              <S.CollumContent>
                {props?.registrations?.map((registration) => {
                  return (
                    <RegistrationCard
                      data={registration}
                      key={registration.id}
                    />
                  );
                })}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
