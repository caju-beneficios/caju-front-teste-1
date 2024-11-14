import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchUsers, fetchChangeStatusUser, fetchDeleteUser } from "./services";
import { User, Status } from "src/services/Users/dtos/Users.dto";

export function useUsersList(cpf?: string): UseQueryResult<User[]> {
  const queryKey = ["usersList", cpf];

  return useQuery(queryKey, () => fetchUsers(cpf), {
    keepPreviousData: true,
  });
}

export function useChangeUserStatus(
  user: User,
  newStatus: Status
): UseQueryResult<User> {
  const queryKey = ["useChangeUserStatus"];

  return useQuery(queryKey, () => fetchChangeStatusUser(newStatus, user), {
    keepPreviousData: true,
  });
}

export function useDeleteUser(id: number): UseQueryResult<User> {
  const queryKey = ["useDeleteUser"];

  return useQuery(queryKey, () => fetchDeleteUser(id), {
    keepPreviousData: true,
  });
}
