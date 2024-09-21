import styled from "styled-components";

import { theme } from "~/styles";

const MODAL_WIDTH = "720px";
const MODAL_HEIGHT = "220px";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${theme.zIndex.backdrop};
`;

export const Wrapper = styled.aside`
  z-index: ${theme.zIndex.modal};
  border-radius: ${theme.border.radius.sm};
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;

  width: ${MODAL_WIDTH};
  height: ${MODAL_HEIGHT};

  position: absolute;

  top: 30%;
  left: 30%;

  background: ${theme.colors.white};

  z-index: ${theme.zIndex.modal};
  box-shadow: ${theme.shadows["level-1"]};

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.25rem;

    border-bottom: 1px solid rgb(232, 232, 232);
  }
`;

export const AlertModalTitle = styled.p`
  display: flex;
  align-items: center;
  font-weight: 500;
`;

export const Content = styled.section`
  height: 100%;
  max-height: 100%;

  padding: 1.25rem;
`;
