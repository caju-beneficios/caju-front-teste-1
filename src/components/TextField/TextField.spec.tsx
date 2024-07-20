import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextField from "./TextField.view";

describe("TextField", () => {
  it("should be able render and type", async () => {
    const onChange = jest.fn();

    render(<TextField onChange={onChange} data-testid="input" />);

    const input = screen.getByTestId("input");

    await userEvent.type(input, "Hello World");

    expect(onChange).toHaveBeenCalledTimes(11);
  });

  it("should be able show an error", async () => {
    const onChange = jest.fn();

    render(
      <TextField onChange={onChange} label="Nome" error="Campo obrigatório" />
    );

    expect(screen.getByText("Nome")).toBeInTheDocument();
    expect(screen.getByText("Campo obrigatório")).toBeInTheDocument();
  });
});
