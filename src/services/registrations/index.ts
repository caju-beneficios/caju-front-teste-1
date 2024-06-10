import axios from "axios";
import { PaylodCreate, Registration } from "./types";

export const get = async () => {
  const response = await axios.get<Registration[]>(
    "http://localhost:3000/registrations"
  );

  return response.data;
};

export const create = async (payload: PaylodCreate) => {
  const response = await axios.post(
    "http://localhost:3000/registrations",
    payload
  );

  return response.data;
};

export const put = async (payload: Registration) => {
  const response = await axios.put(
    `http://localhost:3000/registrations/${payload.id}`,
    payload
  );

  return response.data;
};
