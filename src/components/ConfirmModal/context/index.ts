import { createContext } from 'react';

interface ModalContextProps {
  onCloseClick: () => void;
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps,
);
