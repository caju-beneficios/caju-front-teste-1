import axios from "axios";
import { endpoint, RegistrationService } from ".";
import { describe, test, expect, jest, beforeEach } from "@jest/globals";
import { Registration, RegistrationStatus } from "~/types/registration";

jest.mock("axios");

const dataResponseMock: Registration[] = [
  {
    id: "1",
    admissionDate: "22/10/2023",
    email: "filipe@caju.com.br",
    employeeName: "Filipe Marins",
    status: "REVIEW",
    cpf: "78502270001",
  },
  {
    id: "2",
    admissionDate: "22/10/2023",
    email: "jose@caju.com.br",
    employeeName: "José Leão",
    status: "REPROVED",
    cpf: "78502270001",
  },
  {
    admissionDate: "22/10/2023",
    email: "luiz@caju.com.br",
    employeeName: "Luiz Filho",
    status: "APPROVED",
    cpf: "56642105087",
    id: "3",
  },
];

describe("RegistrationService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should dispatch get all registrations endpoint", async () => {
    (axios as any).get.mockResolvedValue({ data: dataResponseMock });

    const response = await RegistrationService.fetchAll({});

    expect(axios.get).toBeCalledTimes(1);
    expect(response.length).toBe(3);
    expect(axios.get).toBeCalledWith(`${endpoint}?`);
  });

  test("Should dispatch update registrations endpoint when status is different", async () => {
    (axios as any).put.mockResolvedValue({ data: {} });

    const newStatus: RegistrationStatus = "APPROVED";
    const registration = dataResponseMock[0];
    await RegistrationService.updateStatus(registration, newStatus);

    expect(registration.status).not.toBe(newStatus);
    expect(axios.put).toBeCalledTimes(1);
    expect(axios.put).toBeCalledWith(`${endpoint}/${registration.id}`, {
      ...registration,
      status: newStatus,
    });
  });

  test("Should not dispatch update registrations endpoint when status when is the same", async () => {
    (axios as any).put.mockResolvedValue({ data: {} });

    const newStatus: RegistrationStatus = "REVIEW";
    const registration = dataResponseMock[0];
    await RegistrationService.updateStatus(registration, newStatus);

    expect(registration.status).toBe(newStatus);
    expect(axios.put).toBeCalledTimes(0);
  });

  test("Should dispatch delete registrations endpoint", async () => {
    (axios as any).get.mockResolvedValue({ data: {} });

    const registration = dataResponseMock[0];
    await RegistrationService.remove(registration.id);

    expect(axios.delete).toBeCalledTimes(1);
    expect(axios.delete).toBeCalledWith(`${endpoint}/${registration.id}`);
  });

  test("Should dispatch create registration endpoint", async () => {
    (axios as any).get.mockResolvedValue({ data: {} });

    const registration = dataResponseMock[0];
    await RegistrationService.create(registration);

    expect(axios.post).toBeCalledTimes(1);
    expect(axios.post).toBeCalledWith(`${endpoint}`, registration);
  });
});
