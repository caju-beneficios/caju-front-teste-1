import styled from 'styled-components';

type TitleSize = {
  size?: number;
};

export const ModalHeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ButtonIconContainer = styled.div`
  cursor: pointer;
`;

export const Title = styled.span<TitleSize>`
  font-size: ${({ size }) => `${size}px`};
  font-weight: 600;
  margin-top: ${({ theme }) => theme.spacings.xs};
`;
