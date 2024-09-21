import styled, { keyframes } from 'styled-components';

import { LoaderIcon } from '~/assets/icons';
import { theme } from "~/styles";


const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${theme.zIndex.backdrop};
`;

const StyledLoader = styled.span`
  display: inline-block;
  animation: ${spin} 1s infinite linear;
`;

const Loader = () => {
  return (
    <Overlay>
      <StyledLoader>
        <LoaderIcon />
      </StyledLoader>
    </Overlay>
  );
};

export default Loader;
