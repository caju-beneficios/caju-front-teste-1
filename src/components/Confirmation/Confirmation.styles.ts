import styled from "styled-components";

export const BackgroundBackdrop = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Dialog = styled.div`
  position: fixed;
  z-index: 10000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 24px;
`;

export const DialogTitle = styled.h4`
  margin-top: 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const DialogDescription = styled.p`
  font-size: 1rem;
  margin-top: 8px;
`;

export const DialogActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 32px;
`;
