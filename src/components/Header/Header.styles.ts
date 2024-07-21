import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.gradients.primary};
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0px 24px;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.textOnPrimary};
    font-size: 24px;
  }
`;

export const HeaderSpacer = styled.div`
  height: 64px;
`;
