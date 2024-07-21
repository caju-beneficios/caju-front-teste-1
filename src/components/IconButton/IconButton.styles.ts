import styled from "styled-components";

export const IconButtonContainer = styled.button`
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.primary};
  width: fit-content;
  padding: 4px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  svg {
    color: ${(props) => props.theme.colors.primary};
  }
`;
