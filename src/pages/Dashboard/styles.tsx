import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;

  button {
    align-self: flex-end;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;
