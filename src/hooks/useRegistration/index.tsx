import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

import { useToast } from "~/hooks/useToast";
import type { Employee } from "~/models";
import { getEmployees } from "~/services";

interface RegistrationContextType {
  registrations: Array<Employee> | undefined;
  setRegistrations: Dispatch<SetStateAction<Array<Employee>>>;
  fetchEmployees: (cpfValue?: string) => Promise<void>;
  isLoading: boolean;
}

export const RegistrationContext =
  createContext<RegistrationContextType | null>(null);

interface RegistrationProviderProps {
  children: ReactNode;
}

export function RegistrationProvider({ children }: RegistrationProviderProps) {
  const { addToaster } = useToast();

  const [registrations, setRegistrations] = useState<Array<Employee>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEmployees = async (cpfValue = "") => {
    setIsLoading(true);

    try {
      const params = cpfValue ? { params: { cpf: cpfValue } } : {}
      const employees = await getEmployees(params);

      setRegistrations(employees);

      addToaster({
        text: "Usuários recuperados com sucesso.",
        variant: "success",
      });
    } catch (error) {
      addToaster({
        text: "Não foi possível recuperar os dados dos usuários.",
        variant: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <RegistrationContext.Provider value={{ registrations, setRegistrations, fetchEmployees, isLoading }}>
      {children}
    </RegistrationContext.Provider>
  );
}

/**
 * Hook personalizado para acessar o contexto de registro.
 *
 * @throws {Error} - Se o hook for usado fora de um `RegistrationProvider`.
 * @returns {RegistrationContextType} - Dados do contexto de registro.
 */
export function useRegistration() {
  const context = useContext(RegistrationContext);

  if (!context) {
    throw new Error(
      "useRegistration must be used within a RegistrationProvider"
    );
  }

  return context;
}
