import styled from "styled-components";
import { RegistrationStatus } from "~/common/interfaces/Registration";

const registrationStatusStyles: {
  [key in RegistrationStatus]: { background: string; title: string };
} = {
  REVIEW: {
    background: "#FDF8E9",
    title: "#d4a01d",
  },
  APPROVED: {
    background: "#EEEEFD",
    title: "#4242DF",
  },
  REPROVED: {
    background: "#FBEDF6",
    title: "#CE2893",
  },
};

export const Container = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
  width: auto;
  overflow: auto;
`;

export const Column = styled.div<{ status: RegistrationStatus }>`
  height: auto;
  background-color: ${({ status }) =>
    registrationStatusStyles[status].background};
  border-radius: 32px;
  height: 80vh;
  flex-shrink: 0;
  min-width: 400px;
  flex: 1;
`;

export const TitleColumn = styled.h3<{ status: RegistrationStatus }>`
  margin: 0px;
  color: ${({ status }) => registrationStatusStyles[status].title};
  margin: 24px;
`;

export const CollumContent = styled.div`
  overflow: auto;
  max-height: 85%;
`;
