import styled from "styled-components";
import { MessageType } from ".";

export const Container = styled.div<{ $type: MessageType }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: ${({ $type }) =>
    $type === "success" ? "#52c41a" : "#ff4d4f"};
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`;
