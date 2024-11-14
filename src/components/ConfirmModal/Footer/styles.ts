import styled from 'styled-components';

export const ModalFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacings.sm};
`;
