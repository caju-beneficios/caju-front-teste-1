import styled from "styled-components";

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.cajuOrange};
  background: linear-gradient(
    258deg,
    ${({ theme }) => theme.colors.cajuOrange} 8%,
    ${({ theme }) => theme.colors.cajuRed} 53%
  );
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0px 24px;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
  }
`;
