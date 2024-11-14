import styled from "styled-components";

export const _IconButtonStyled = styled.button`
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.cajuGreenMint};
  width: fit-content;
  padding: 4px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  svg {
    color: ${({ theme }) => theme.colors.cajuGreenMint};
  }
`;

type IconButtonProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export const IconButton = (props: IconButtonProps) => {
  return <_IconButtonStyled {...props}>{props.children}</_IconButtonStyled>;
};
