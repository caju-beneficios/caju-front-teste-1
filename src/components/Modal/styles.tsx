import styled from "styled-components";

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 32px;
  box-shadow: 0 0 300px rgba(0, 0, 0, 0.3);

  width: 500px;
  max-width: 80%;

  height: auto;
  min-height: 100px;
  padding: 32px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    margin: 0;
  }

  .close {
    cursor: pointer;
  }
`;

export const Body = styled.div`
  margin-top: 16px;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 32px;

  span {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
  }
`;

export const FooterActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 16px;
`;
