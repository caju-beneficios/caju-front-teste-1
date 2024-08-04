import styled from "styled-components";

export const BackgroundContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);

  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  opacity: 0;
  animation: fadeIn 0.4s forwards;
`;
