import { AxiosRequestConfig } from "axios";

import { deleteRequest, getRequest, postRequest, putRequest } from "~/lib/api";
import type { Employee } from "~/models";

/**
 * Obtém os valores dos funcionários.
 *
 * @returns Uma Promise que resolve com os dados dos funcionários.
 */
export function getEmployees(config: AxiosRequestConfig = {}) {
  return getRequest<Array<Employee>>("registrations", config);
}

/**
 * Cadastra um novo funcionário.
 *
 * @param employee Os dados do funcionário a ser cadastrado.
 * @returns Uma Promise que resolve com os dados do funcionário cadastrado.
 */
export function registerEmployee(employee: Omit<Employee, "id">) {
  return postRequest<Employee>("registrations", employee);
}

/**
 * Altera os dados de um funcionário.
 *
 * @param employee Os novos dados do funcionário.
 * @returns Uma Promise que resolve com os novos dados do funcionário.
 */
export function editEmployee(employee: Employee) {
  return putRequest<Employee>(`registrations/${employee.id}`, employee);
}

/**
 * Deleta os dados de um funcionário.
 *
 * @param id O id do funcionário a ser deletado.
 * @returns Uma Promise que resolve com os dados do funcionário deletado.
 */
export function deleteEmployee(id: number) {
  return deleteRequest<Employee>(`registrations/${id}`);
}
