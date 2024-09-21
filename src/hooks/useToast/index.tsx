import {
  createContext,
  useContext,
  useCallback,
  useState,
  useRef,
} from 'react';

import { ToasterWrapper } from './styles';
import type { Toast, ToastContextData, ToastProviderProps } from './types';
import { uuidv4 } from './utils';

import Toaster from '~/components/Toaster';

/**
 * Contexto para gerenciar as mensagens de toast.
 */
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

/**
 * Provedor de contexto que gerencia mensagens de toast.
 *
 * @param {ToastProviderProps} props - Propriedades para configurar o provedor de toast.
 * @returns {JSX.Element} - Filhos renderizados e mensagens de toast.
 */
export function ToastProvider({
  dismissTime = 5000,
  maxToasters = 5,
  children,
}: ToastProviderProps) {
  const [toasters, setToasters] = useState<Toast[]>([]);

  const startDimissToaster = useRef((toasterId: Toast['id']) => {
    const timer = setTimeout(() => closeToaster(toasterId), dismissTime);

    return () => clearTimeout(timer);
  }).current;

  const addToaster = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const toastWithId = {
        id: uuidv4(),
        ...toast,
      };

      setToasters((prevState) =>
        prevState.length >= maxToasters
          ? [...prevState.slice(1), toastWithId]
          : [...prevState, toastWithId],
      );

      startDimissToaster(toastWithId.id);
    },
    [startDimissToaster, maxToasters],
  );

  function closeToaster(toasterId: string) {
    setToasters((prevState) => {
      const findIndex = prevState.findIndex(
        (toaster) => toaster.id === toasterId,
      );

      return findIndex > -1 ? prevState.slice(findIndex + 1) : prevState;
    });
  }

  return (
    <ToastContext.Provider value={{ addToaster }}>
      {children}

      {toasters.length > 0 && (
        <ToasterWrapper>
          {toasters.map(({ id, ...args }) => (
            <Toaster key={id} onClose={() => closeToaster(id)} {...args} />
          ))}
        </ToasterWrapper>
      )}
    </ToastContext.Provider>
  );
}

/**
 * Hook personalizado para acessar o contexto de toast.
 *
 * @throws {Error} - Se o hook for usado fora de um `ToastProvider`.
 * @returns {ToastContextData} - Dados do contexto de toast.
 */
export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
