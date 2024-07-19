import { HiRefresh } from "react-icons/hi";
import styled, { css } from "styled-components";
import { spin } from "~/common/styles/animations";

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

export const RefetchingIcon = styled(HiRefresh)<{ refetching: boolean }>`
  ${({ refetching }) => css`
    animation: ${refetching ? spin : "none"} 1s linear infinite;
  `}
`;
