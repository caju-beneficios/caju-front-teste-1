import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "src/styles/theme";
import TextField from "../TextField";

describe("TextField component", () => {
  it("should render the label when provided", () => {
    render(
      <ThemeProvider theme={theme}>
        <TextField label="Username" id="username" />
      </ThemeProvider>
    );

    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });

  it("should render the input with the provided placeholder", () => {
    render(
      <ThemeProvider theme={theme}>
        <TextField placeholder="Enter your name" />
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });

  it("should display the error message when error prop is provided", () => {
    render(
      <ThemeProvider theme={theme}>
        <TextField error="This field is required" />
      </ThemeProvider>
    );

    expect(screen.getByText("This field is required")).toBeInTheDocument();
    expect(screen.getByText("This field is required")).toHaveStyle(
      "color: red; font-size: 12px;"
    );
  });

  it("should call onChange handler when typing in the input", () => {
    const handleChange = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <TextField onChange={handleChange} />
      </ThemeProvider>
    );
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "New value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should apply additional props to the input element", () => {
    render(
      <ThemeProvider theme={theme}>
        <TextField id="custom-id" />
      </ThemeProvider>
    );
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("id", "custom-id");
  });
});
