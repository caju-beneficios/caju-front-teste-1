import styled, { keyframes } from "styled-components";
import { CgSpinner } from "react-icons/cg";

export const ButtonContainer = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
  border-radius: 36px;
  padding: 8px 32px;
  background-color: #64a98c;
  cursor: pointer;
  height: 56px;
  color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-size: 16px;
  font-weight: 600;
`;

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
    `;

export const Spinner = styled(CgSpinner)`
  animation: ${spin} 1s linear infinite;
  margin-left: 8px;
  font-size: 24px;
  color: #fff;
`;
