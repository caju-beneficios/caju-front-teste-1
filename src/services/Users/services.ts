import { FormData } from "src/pages/NewUser";
import api from "../api";
import { User, Action } from "./dtos/Users.dto";

export async function fetchUsers(cpf?: string): Promise<User[]> {
  const url = "/registrations";
  const params = {
    params: { cpf },
  };

  const { data } = await api.get(url, params);
  return data;
}

export async function fetchChangeStatusUser(
  newStatus: Action,
  user?: User | null
): Promise<User> {
  const url = `/registrations/${user?.id}`;
  const payload = { ...user, status: newStatus };

  const { data } = await api.put(url, payload);
  return data;
}

export async function fetchDeleteUser(id?: number): Promise<User[]> {
  const url = `/registrations/${id}`;

  const { data } = await api.delete(url);
  return data;
}

export async function createAdmission(admission: FormData): Promise<User[]> {
  const url = `/registrations`;

  const { data } = await api.post(url, admission);
  return data;
}
