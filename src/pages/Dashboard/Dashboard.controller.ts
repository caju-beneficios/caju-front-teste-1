import * as React from "react";
import toast from "react-hot-toast";
import { Registration } from "~/common/interfaces/Registration";
import { apiBase } from "~/services/api.service";

export const useDashboardController = () => {
  const [registrations, setRegistrations] = React.useState<Registration[]>([]);

  const fetchRegistrations = React.useCallback(async () => {
    try {
      const response = await apiBase.get<Registration[]>("/registrations");
      setRegistrations(response.data);
    } catch (error) {
      toast.error("Failed to fetch dashboard data");
    }
  }, []);

  React.useEffect(() => {
    void fetchRegistrations();
  }, [fetchRegistrations]);

  return {
    registrations,
  };
};
