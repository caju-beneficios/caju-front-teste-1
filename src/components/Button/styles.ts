/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css, DefaultTheme } from "styled-components";

import { IconProps } from "src/components/Icon/index";

type buttonSize = "md" | "sm" | "xs";
type buttonVariant = "primary" | "secondary";

export interface StyleProps {
  disabled?: boolean;
  size?: buttonSize;
  variant?: buttonVariant;
  icons?: IconProps;
  iconposition?: "left" | "right";
}

const disabledStyles = (theme: DefaultTheme, disabled = false) =>
  disabled
    ? css`
        background:${theme.colors.cajuSoftGray};
        color: ${theme.colors.cajuGray};
        cursor: default;

        &:hover ${theme.colors.cajuSoftGray};
          cursor: not-allowed;
        }

        & path {
          fill: ${theme.colors.cajuGray};
        }
      `
    : "";

const iconStyles = (theme: DefaultTheme, icons?: IconProps) =>
  css`
    & path {
      fill: ${icons?.color ?? theme.colors.cajuBlack};
    }
  `;

const sizeStyles = (theme: DefaultTheme, size: buttonSize = "sm") => css`
  height: ${theme.size.button[size]};
  padding: ${theme.padding.button[size]};
  font-size: ${theme.fontSize.body[size]};
  line-height: ${theme.lineHeight.body[size]};
`;

const variantStyles = (
  theme: DefaultTheme,
  variant: buttonVariant = "primary"
) =>
  ({
    primary: css`
      cursor: pointer;
      color: ${theme.colors.white};
      background: ${theme.colors.cajuCoralOrange};
      &:hover {
        background: ${theme.colors.cajuOrange};
      }
      & path {
        fill: ${theme.colors.white};
      }
    `,
    secondary: css`
      cursor: pointer;
      background: ${theme.colors.white};
      border: ${theme.border.sm} solid ${theme.colors.cajuSoftGray};
      &:hover {
        border-color: ${theme.colors.cajuGray};
      }
      & path {
        fill: ${theme.colors.cajuBlack};
      }
    `,
  }[variant]);

export const ButtonContainer = styled.button<StyleProps>`
  border-style: none;
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  flex-direction: ${({ iconposition }) =>
    iconposition === "left" ? "row" : "row-reverse"};
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-radius: ${({ theme }) => theme.borderRadius.buttom};
  gap: ${({ theme }) => theme.spacings.xs};
  color: ${({ theme }) => theme.colors.cajuBlack};

  /* The order below matters */
  ${({ theme, size }) => sizeStyles(theme, size)}
  ${({ theme, icons }) => iconStyles(theme, icons)}
  ${({ theme, variant }) => variantStyles(theme, variant)}
  ${({ theme, disabled }) => disabledStyles(theme, disabled)}
`;
