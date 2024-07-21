import * as React from "react";
import toast from "react-hot-toast";
import {
  Registration,
  RegistrationStatus,
} from "~/common/interfaces/Registration";
import routes from "~/router/routes";
import { apiBase } from "~/services/api.service";
import {
  DashboardContextProps,
  DashboardProviderProps,
} from "./Dashboard.types";
import { useConfirmation } from "~/hooks/useConfirmation";

const DashboardContext = React.createContext({} as DashboardContextProps);

export function DashboardProvider({ children, push }: DashboardProviderProps) {
  const [refetching, setRefetching] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [registrations, setRegistrations] = React.useState<Registration[]>([]);

  const confirmation = useConfirmation();

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
      toast.error("Erro ao buscar admissões");
    } finally {
      setRefetching(false);
    }
  }, []);

  const handleChangeStatus = React.useCallback(
    async (id: string, status: RegistrationStatus, message: string) => {
      await confirmation({
        title: "Atenção",
        description: message,
      }).then(async () => {
        try {
          setLoading(true);
          await apiBase.patch(`/registrations/${id}`, {
            status: status,
          });

          await fetchRegistrations();

          toast.success("Admissão aprovada");
        } catch (error) {
          toast.error("Falha ao aprovar admissão");
        } finally {
          setLoading(false);
        }
      });
    },
    [confirmation, fetchRegistrations]
  );

  const handleApprove = React.useCallback(
    async (id: string) => {
      await handleChangeStatus(
        id,
        RegistrationStatus.APPROVED,
        "Deseja aprovar essa admissão?"
      );
    },
    [handleChangeStatus]
  );

  const handleReprove = React.useCallback(
    async (id: string) => {
      await handleChangeStatus(
        id,
        RegistrationStatus.REPROVED,
        "Deseja reprovar essa admissão?"
      );
    },
    [handleChangeStatus]
  );

  const handleReviewAgain = React.useCallback(
    async (id: string) => {
      await handleChangeStatus(
        id,
        RegistrationStatus.REVIEW,
        "Deseja revisar essa admissão novamente?"
      );
    },
    [handleChangeStatus]
  );

  const handleDelete = React.useCallback(
    async (id: string) => {
      await confirmation({
        title: "Atenção",
        description: "Você deseja deletar essa admissão?",
      }).then(async () => {
        try {
          setLoading(true);

          await apiBase.delete(`/registrations/${id}`);

          await fetchRegistrations();

          toast.success("Admissão deletada");
        } catch (error) {
          toast.error("Falha ao deletar admissão");
        } finally {
          setLoading(false);
        }
      });
    },
    [confirmation, fetchRegistrations]
  );

  const handleAddNewUser = React.useCallback(() => {
    push(routes.newUser);
  }, [push]);

  React.useEffect(() => {
    void fetchRegistrations();
  }, [fetchRegistrations]);

  return (
    <DashboardContext.Provider
      value={{
        registrations,
        loading,
        refetching,
        fetchRegistrations,
        handleApprove,
        handleReprove,
        handleReviewAgain,
        handleDelete,
        handleAddNewUser,
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
