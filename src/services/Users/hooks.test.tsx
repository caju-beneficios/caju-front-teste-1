import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUsersList, useChangeUserStatus, useDeleteUser } from "./hooks";
import { fetchUsers, fetchChangeStatusUser, fetchDeleteUser } from "./services";
import { User } from "src/services/Users/dtos/Users.dto";

jest.mock("./services");

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useUsersList", () => {
  it("should fetch users list successfully", async () => {
    const mockUsers: User[] = [
      {
        id: 1,
        employeeName: "John Doe",
        cpf: "12345678901",
        email: "teste@teste.com",
        admissionDate: "11/11/1999",
        status: "APPROVED",
      },
    ];
    (fetchUsers as jest.Mock).mockResolvedValueOnce(mockUsers);

    const { result, waitFor } = renderHook(() => useUsersList(), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual(mockUsers);
    expect(fetchUsers).toHaveBeenCalledWith(undefined);
  });

  it("should fetch users list filtered by CPF", async () => {
    const mockUsers: User[] = [
      {
        id: 1,
        employeeName: "John Doe",
        cpf: "98765432109",
        email: "teste@teste.com",
        admissionDate: "11/11/1999",
        status: "APPROVED",
      },
    ];
    (fetchUsers as jest.Mock).mockResolvedValueOnce(mockUsers);

    const { result, waitFor } = renderHook(() => useUsersList("98765432109"), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual(mockUsers);
    expect(fetchUsers).toHaveBeenCalledWith("98765432109");
  });
});

describe("useChangeUserStatus", () => {
  it("should change the user status successfully", async () => {
    const user: User = {
      id: 1,
      employeeName: "John Doe",
      cpf: "12345678901",
      status: "APPROVED",
      admissionDate: "11/11/1999",
      email: "teste@teste.com",
    };
    const updatedUser: User = { ...user, status: "REPROVED" };
    (fetchChangeStatusUser as jest.Mock).mockResolvedValueOnce(updatedUser);

    const { result, waitFor } = renderHook(
      () => useChangeUserStatus(user, "REPROVED"),
      {
        wrapper,
      }
    );

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual(updatedUser);
    expect(fetchChangeStatusUser).toHaveBeenCalledWith("inactive", user);
  });
});

describe("useDeleteUser", () => {
  it("should delete the user successfully", async () => {
    const deletedUser: User = {
      id: 1,
      employeeName: "John Doe",
      cpf: "12345678901",
      status: "APPROVED",
      admissionDate: "11/11/1999",
      email: "teste@teste.com",
    };
    (fetchDeleteUser as jest.Mock).mockResolvedValueOnce(deletedUser);

    const { result, waitFor } = renderHook(() => useDeleteUser(1), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual(deletedUser);
    expect(fetchDeleteUser).toHaveBeenCalledWith(1);
  });
});
