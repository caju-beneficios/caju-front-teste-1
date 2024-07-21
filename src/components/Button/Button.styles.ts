import styled, { css } from "styled-components";
import { CgSpinner } from "react-icons/cg";
import { spin } from "~/common/styles/animations";

const buttonSizes = {
  sm: css`
    height: 32px;
    padding: 4px 16px;
    font-size: 14px;
  `,
  md: css`
    height: 40px;
    padding: 8px 24px;
    font-size: 16px;
  `,
  lg: css`
    height: 48px;
    padding: 12px 32px;
    font-size: 18px;
  `,
};

const variants = {
  filled: css`
    background-color: #64a98c;
    color: #fff;
    border: none;
  `,
  outlined: css`
    background-color: transparent;
    color: #64a98c;
    border: 1px solid #64a98c;
  `,
};

interface ButtonProps {
  variant: keyof typeof variants;
  size: keyof typeof buttonSizes;
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 36px;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-weight: 600;

  ${({ variant }) => variants[variant]}

  ${({ size }) => buttonSizes[size]}
`;

export const Spinner = styled(CgSpinner)`
  animation: ${spin} 1s linear infinite;
  margin-left: 8px;
  font-size: 24px;
  color: #fff;
`;
