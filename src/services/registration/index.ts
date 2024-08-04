import axios from "axios";
import { queryClient } from "~/App";
import { Registration, RegistrationStatus } from "~/types/registration";

export const endpoint = "http://localhost:3000/registrations";

const fetchAll = async (
  registration: Partial<Registration>
): Promise<Registration[]> => {
  const queryParams = new URLSearchParams(registration);
  const response = await axios.get(`${endpoint}?${queryParams}`);
  return response.data as Registration[];
};

const updateStatus = async (
  registration: Registration,
  status: RegistrationStatus
): Promise<void> => {
  if (registration.status !== status) {
    await axios.put(`${endpoint}/${registration.id}`, {
      ...registration,
      status,
    });

    await queryClient.invalidateQueries("registrations");
  }
};

const remove = async (id: string): Promise<void> => {
  await axios.delete(`${endpoint}/${id}`);
  await queryClient.invalidateQueries("registrations");
};

const create = async (registration: Partial<Registration>) => {
  await axios.post(`${endpoint}`, registration);
  await queryClient.invalidateQueries("registrations");
};

export const RegistrationService = {
  fetchAll,
  updateStatus,
  remove,
  create,
};
