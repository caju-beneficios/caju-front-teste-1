import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

export const RotateIconContainer = styled.div<{ $isloading: boolean }>`
  ${({ $isloading }) => {
    if ($isloading) {
      return css`
        animation: ${SpinAnimation} 1s infinite linear;
      `;
    }
    return css``;
  }}
`;

export const SpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;
