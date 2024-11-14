/* eslint-disable @typescript-eslint/explicit-function-return-type */

import styled, { css, DefaultTheme } from "styled-components";

type Variant = "error" | "light";
interface IconContainerProps {
  size: "md" | "sm" | "xs" | "lg";
  color?: string;
  variant?: Variant;
}

const variantStyles = (theme: DefaultTheme, variant: Variant = "light") =>
  ({
    error: css`
      ${theme.colors.cajuRed};
    `,
    light: css`
      ${theme.colors.cajuTeal};
    `,
  }[variant]);

export const IconContainer = styled.div<IconContainerProps>`
  height: ${({ size, theme }) => theme.size.icon[size]};
  width: ${({ size, theme }) => theme.size.icon[size]};

  svg {
    height: ${({ size, theme }) => theme.size.icon[size]};
    width: ${({ size, theme }) => theme.size.icon[size]};
  }

  & path {
    fill: ${({ color, variant, theme }) =>
      color || variantStyles(theme, variant)};
  }
`;
