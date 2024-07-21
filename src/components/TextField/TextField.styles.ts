import styled from "styled-components";

export const Input = styled.input`
  padding: 0 12px;
  vertical-align: middle;
  border-radius: 2px;
  width: 100%;
  min-height: 48px;
  background-color: #ffffff;
  border: 1px solid rgba(36, 28, 21, 0.3);
  transition: all 0.2s ease-in-out 0s;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.primary};
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.primary};
  }
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 8px;
  display: block;
`;

export const Error = styled.span`
  color: #f44;
  font-size: 12px;
  line-height: 14px;
  margin-top: 8px;
  display: block;
`;
