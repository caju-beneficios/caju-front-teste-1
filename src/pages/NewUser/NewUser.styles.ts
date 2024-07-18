import styled from "styled-components";

export const Card = styled.div`
  border: 2px solid #f0f0f0;
  width: 100%;
  max-width: 500px;
  padding: 48px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 32px auto;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;
