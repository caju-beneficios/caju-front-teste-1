import { CgSpinner } from "react-icons/cg";
import styled from "styled-components";
import { spin } from "~/common/styles/animations";

export const LoadingBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const LoadingSpinner = styled(CgSpinner)`
  animation: ${spin} 1s linear infinite;
  margin-left: 8px;
  font-size: 64px;
  color: ${(props) => props.theme.colors.terciary};
`;
