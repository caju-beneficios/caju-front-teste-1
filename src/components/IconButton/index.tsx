import { forwardRef } from 'react';

import { ButtonWrapper } from './styles';

interface IconButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement;
}

function IconButtonComponent(
  { children, disabled, ...props }: IconButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  return (
    <ButtonWrapper ref={ref} disabled={disabled} {...props} type="button">
      {children}
    </ButtonWrapper>
  );
}

export const IconButton = forwardRef(IconButtonComponent);
