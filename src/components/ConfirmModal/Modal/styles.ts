import styled, { css } from "styled-components";

interface ModalContainerProps {
  width?: number | string;
  maxWidth: number | string;
}

export const Container = styled.div<{ $noBackground: boolean }>`
  ${({ $noBackground }) => {
    if (!$noBackground) {
      return css`
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        z-index: 1001;
      `;
    }
    return css``;
  }}
`;

export const ModalContainer = styled.div<ModalContainerProps>`
  padding: ${({ theme }) => theme.spacings.md};
  border-radius: ${({ theme }) => theme.border.lg};

  max-width: ${({ maxWidth }) => {
    if (typeof maxWidth === "string") {
      return maxWidth;
    }
    return `${maxWidth}px`;
  }};

  ${({ width }) => {
    if (width) {
      if (typeof width === "string") {
        return css`
          width: ${width};
        `;
      }
      return css`
        width: ${width}px;
      `;
    }
    return null;
  }}

  background: ${({ theme }) => theme.colors.white};
`;
