import styled from 'styled-components';

export const SubHeading = styled.h4`
  font-size: ${({ theme }) => theme.typography.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 23px;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.md};
`;

export const SpanContent = styled.span``;
