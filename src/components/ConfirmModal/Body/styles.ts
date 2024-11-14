import styled from 'styled-components';

export const ModalBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.md};
  margin: ${({ theme }) => theme.spacings.custom(13)} 0;
`;
