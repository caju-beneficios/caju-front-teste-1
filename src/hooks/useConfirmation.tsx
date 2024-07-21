import * as React from "react";
import { ConfirmationOptions, Confirmation } from "../components";

export const ConfirmationContext = React.createContext<
  (options: ConfirmationOptions) => Promise<void>
>(Promise.reject);

export const ConfirmationProvider = ({ children }: React.PropsWithChildren) => {
  const [confirmationState, setConfirmationState] =
    React.useState<ConfirmationOptions | null>(null);

  const awaitingPromiseRef = React.useRef<{
    resolve: () => void;
    reject: () => void;
  }>();

  const openConfirmation = (options: ConfirmationOptions) => {
    setConfirmationState(options);
    return new Promise<void>((resolve, reject) => {
      awaitingPromiseRef.current = { resolve, reject };
    });
  };

  const handleClose = () => {
    if (confirmationState?.catchOnCancel && awaitingPromiseRef.current) {
      awaitingPromiseRef.current.reject();
    }

    setConfirmationState(null);
  };

  const handleSubmit = () => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.resolve();
    }

    setConfirmationState(null);
  };

  return (
    <>
      <ConfirmationContext.Provider value={openConfirmation}>
        {children}
      </ConfirmationContext.Provider>

      <Confirmation
        open={Boolean(confirmationState)}
        onSubmit={handleSubmit}
        onClose={handleClose}
        description={confirmationState?.description || ""}
        title={confirmationState?.title || ""}
      />
    </>
  );
};

export function useConfirmation() {
  return React.useContext(ConfirmationContext);
}
