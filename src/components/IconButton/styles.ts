import styled from "styled-components";

import { theme } from "~/styles";

export const ButtonWrapper = styled.button`
  padding: 0.25rem;

  border: 0;
  background: 0;
  outline: 0;
  font-size: 0;

  &:hover:not(:disabled) {
    background: ${theme.colors["gray-100"]}20;
    border-radius: 50%;

    color: inherit;
  }
`;
