import * as React from "react";
import toast from "react-hot-toast";
import {
  Registration,
  RegistrationStatus,
} from "~/common/interfaces/Registration";
import { apiBase } from "~/services/api.service";

interface DashboardContextProps {
  registrations: Registration[];
  refetching: boolean;
  fetchRegistrations: (query?: string) => Promise<void>;
  handleApprove: (id: string) => Promise<void>;
  handleReprove: (id: string) => Promise<void>;
  handleReviewAgain: (id: string) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
}

const DashboardContext = React.createContext({} as DashboardContextProps);

export function DashboardProvider({ children }: React.PropsWithChildren) {
  const [refetching, setRefetching] = React.useState(false);
  const [registrations, setRegistrations] = React.useState<Registration[]>([]);

  const fetchRegistrations = React.useCallback(async (query?: string) => {
    try {
      setRefetching(true);
      const response = await apiBase.get<Registration[]>("/registrations", {
        params: {
          ...(query && {
            cpf: query,
          }),
        },
      });
      setRegistrations(response.data);
    } catch (error) {
      toast.error("Failed to fetch dashboard data");
    } finally {
      setRefetching(false);
    }
  }, []);

  const handleApprove = React.useCallback(
    async (id: string) => {
      try {
        await apiBase.patch(`/registrations/${id}`, {
          status: RegistrationStatus.APPROVED,
        });

        await fetchRegistrations();

        toast.success("Admissão aprovada");
      } catch (error) {
        toast.error("Falha ao aprovar admissão");
      }
    },
    [fetchRegistrations]
  );

  const handleReprove = React.useCallback(
    async (id: string) => {
      try {
        await apiBase.patch(`/registrations/${id}`, {
          status: RegistrationStatus.REPROVED,
        });

        await fetchRegistrations();

        toast.success("Admissão reprovada");
      } catch (error) {
        toast.error("Falha ao reprovar admissão");
      }
    },
    [fetchRegistrations]
  );

  const handleReviewAgain = React.useCallback(
    async (id: string) => {
      try {
        await apiBase.patch(`/registrations/${id}`, {
          status: RegistrationStatus.REVIEW,
        });

        await fetchRegistrations();

        toast.success("Admissão enviada para revisão novamente");
      } catch (error) {
        toast.error("Falha ao enviar admissão para revisão novamente");
      }
    },
    [fetchRegistrations]
  );

  const handleDelete = React.useCallback(
    async (id: string) => {
      try {
        await apiBase.delete(`/registrations/${id}`);

        await fetchRegistrations();

        toast.success("Admissão deletada");
      } catch (error) {
        toast.error("Falha ao deletar admissão");
      }
    },
    [fetchRegistrations]
  );

  React.useEffect(() => {
    void fetchRegistrations();
  }, [fetchRegistrations]);

  return (
    <DashboardContext.Provider
      value={{
        registrations,
        refetching,
        fetchRegistrations,
        handleApprove,
        handleReprove,
        handleReviewAgain,
        handleDelete,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export const useDashboardController = () => {
  const context = React.useContext(DashboardContext);

  if (!context) {
    throw new Error(
      "useDashboardController must be used within an DashboardProvider"
    );
  }

  return context;
};
