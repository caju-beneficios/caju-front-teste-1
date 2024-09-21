import axios from "axios";

const processEnv = import.meta.env;

const api = axios.create({
  baseURL: `${processEnv.VITE_API_BASE_URL}/`,
});

export { api, axios };
