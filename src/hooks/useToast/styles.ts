import styled from "styled-components";

import { theme } from "~/styles";

export const ToasterWrapper = styled.div`
  position: fixed;
  top: 32px;
  right: 32px;

  display: flex;
  flex-direction: column-reverse;
  gap: ${theme.spacing.md};
  z-index: ${theme.zIndex.toaster};
`;
