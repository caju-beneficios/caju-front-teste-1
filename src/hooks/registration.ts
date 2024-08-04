import { useState } from "react";
import { useQuery } from "react-query";
import { queryClient } from "~/App";
import { RegistrationService } from "~/services/registration";
import { Registration } from "~/types/registration";

export const invalidateQuery = async () => {
  await queryClient.invalidateQueries("registrations");
};

export const useRegistrations = () => {
  const [filter, setFilter] = useState<Partial<Registration>>({});
  const { data, isLoading, isError, refetch } = useQuery(
    ["registrations", filter],
    () => RegistrationService.fetchAll(filter)
  );

  return { data, isLoading, isError, refetch, setFilter };
};
