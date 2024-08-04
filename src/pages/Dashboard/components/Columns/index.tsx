import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import { ColumnsProps } from "./types";
import { allColumns } from "~/utils/columns";

const Collumns = (props: ColumnsProps) => {
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
                  if (collum.status === registration.status) {
                    return (
                      <RegistrationCard
                        data={registration}
                        key={registration.id}
                        onDelete={props.onRegistrationDelete}
                        onUpdate={props.onRegistrationUpdate}
                      />
                    );
                  }
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
