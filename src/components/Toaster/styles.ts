import styled from "styled-components";

import type { ToasterVariant } from "./types";

import { theme } from "~/styles";

interface ToasterContainerProps {
  $variant: ToasterVariant;
}

const TOASTER_COLORS: Record<ToasterVariant, string> = {
  success: theme.colors["green-400"],
  danger: theme.colors["red-400"],
  info: theme.colors["blue-400"],
};

export const ToasterTitle = styled.h4`
  color: ${theme.colors["gray-600"]};
  font-size: ${theme.font.size.sm};
  line-height: ${theme.font.lineHeight.body};
`;

export const ToasterContainer = styled.div<ToasterContainerProps>`
  display: flex;
  align-items: center;

  width: 400px;

  padding: ${theme.spacing.lg};

  background-color: ${theme.colors.white};

  border: 1px solid ${({ $variant }) => TOASTER_COLORS[$variant]};
  border-left: 8px solid ${({ $variant }) => TOASTER_COLORS[$variant]};
  border-radius: ${theme.border.radius.sm};

  box-shadow: ${theme.shadows["level-5"]};

  > svg {
    align-self: flex-start;
  }
`;

export const ToasterContent = styled.div`
  flex: 1;

  margin-left: ${theme.spacing.sm};

  p {
    color: ${theme.colors["gray-600"]};
    font-size: ${theme.font.size.xs};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
