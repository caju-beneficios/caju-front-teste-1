import styled from "styled-components";
import theme from "src/styles/theme";

const Button = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 36px;
  padding: 8px 32px;
  background-color: ${({ theme }) => theme.colors.cajuGreenMint};
  cursor: pointer;
  height: 56px;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.cajuLightBlueGray} 0px 8px 24px;
  font-size: 16px;
  font-weight: 600;
`;

export const ButtonSmall = styled.button<{
  $bgcolor?: string;
  color?: string;
}>`
  font-size: 12px;
  outline: none;
  border-radius: 4px;
  border: none;
  padding: 4px 16px;
  background-color: ${(props) => props.$bgcolor ?? "none"};
  color: ${(props) => props.color ?? theme.colors.white};
  cursor: pointer;
`;

export default Button;
