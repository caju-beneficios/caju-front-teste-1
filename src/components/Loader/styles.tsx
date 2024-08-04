import styled from "styled-components";

export const Content = styled.div`
  background: rgba(0, 0, 0, 0.4);
  padding: 32px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 40px;
  color: rgba(255, 255, 255, 0.8);

  @keyframes spin {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  .spin {
    display: inline-block;
    animation: spin 1s linear infinite; /* 2 segundos por rotação, animação linear e infinita */
  }
`;
