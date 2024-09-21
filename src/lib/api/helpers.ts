import type { AxiosRequestConfig } from 'axios';

import { api } from './axios';

/**
 * Faz uma requisição GET para a URL especificada e retorna os dados da resposta.
 * @param URL A URL para a qual a requisição GET será feita.
 * @param config (Opcional) Configurações adicionais para a requisição.
 * @returns Uma Promise que resolve com os dados da resposta.
 */
export async function getRequest<T>(URL: string, config?: AxiosRequestConfig) {
  return api.get<T>(`/${URL}`, config).then((response) => response.data);
}

/**
 * Realiza uma requisição HTTP POST para a URL especificada.
 * @param URL A URL para a qual a requisição será feita.
 * @param payload O corpo da requisição.
 * @param config Configurações adicionais para a requisição.
 * @returns Uma Promise que resolve com os dados da resposta da requisição.
 * @template T O tipo dos dados da resposta da requisição.
 * @template K O tipo do corpo da requisição.
 */
export async function postRequest<T, K = unknown>(
  URL: string,
  payload?: K,
  config?: AxiosRequestConfig,
) {
  return api
    .post<T>(`/${URL}`, payload, config)
    .then((response) => response.data);
}

/**
 * Realiza uma requisição HTTP POST para a URL especificada no formato multipart/form-data.
 * @param URL A URL para a qual a requisição será feita.
 * @param payload O corpo da requisição.
 * @param config Configurações adicionais para a requisição.
 * @returns Uma Promise que resolve com os dados da resposta da requisição.
 * @template T O tipo dos dados da resposta da requisição.
 * @template K O tipo do corpo da requisição.
 */
export async function postFormRequest<T, K = unknown>(
  URL: string,
  payload?: K,
  config?: AxiosRequestConfig,
) {
  return api
    .postForm<T>(`/${URL}`, payload, config)
    .then((response) => response.data);
}

/**
 * Realiza uma requisição PUT para a URL especificada.
 * @param URL A URL para a qual a requisição PUT será enviada.
 * @param payload O corpo da requisição.
 * @param config Configurações adicionais para a requisição.
 * @returns Uma Promise que resolve com os dados da resposta da requisição.
 */
export async function putRequest<T, K = unknown>(
  URL: string,
  payload?: K,
  config?: AxiosRequestConfig,
) {
  return api
    .put<T>(`/${URL}`, payload, config)
    .then((response) => response.data);
}

/**
 * Realiza uma requisição PATCH para a API.
 * @param URL O endpoint da API.
 * @param payload O corpo da requisição.
 * @param config Configurações adicionais para a requisição.
 * @returns Uma Promise que resolve com os dados da resposta da API.
 */
export async function patchRequest<T, K = unknown>(
  URL: string,
  payload?: K,
  config?: AxiosRequestConfig,
) {
  return api
    .patch<T>(`/${URL}`, payload, config)
    .then((response) => response.data);
}

/**
 * Realiza uma requisição HTTP DELETE para a URL especificada.
 * @param URL A URL para a qual a requisição será enviada.
 * @param config Configurações adicionais para a requisição.
 * @returns Uma Promise que resolve com os dados da resposta da requisição.
 * @template T O tipo dos dados da resposta da requisição.
 */
export async function deleteRequest<T>(
  URL: string,
  config?: AxiosRequestConfig,
) {
  return api.delete<T>(`/${URL}`, config).then((response) => response.data);
}
