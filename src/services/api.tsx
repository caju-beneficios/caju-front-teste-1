import axios from "axios";
import { messageApi } from "src/components/Message";
import config from "src/configs/config";

const api = axios.create({
  baseURL: config.BASE_URL_API,
});

api.interceptors.response.use(
  (resp) => resp,
  (error) => {
    const status = error?.response?.status;
    switch (status) {
      case 404:
        messageApi.open({
          type: "error",
          content: "Pagina não encontrada.",
        });
        return error;
      case 500:
        messageApi.open({
          type: "error",
          content: "Um erro inesperado aconteceu!",
        });
        break;
      default:
        break;
    }
  }
);

export default api;
