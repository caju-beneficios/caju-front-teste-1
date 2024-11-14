import { fireEvent, render, screen } from "@testing-library/react";
import Button, { ButtonProps } from ".";
import { ThemeProvider } from "styled-components";
import theme from "src/styles/theme";

jest.mock("src/components/Icon", () => () => <span>Mocked Icon</span>);

describe("Button component", () => {
  const defaultProps: ButtonProps = {
    children: "Click Me",
    variant: "primary",
    size: "md",
  };

  it("should render the button with correct text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} />
      </ThemeProvider>
    );
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("should render the button as disabled when disabled prop is true", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} disabled />
      </ThemeProvider>
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should call onClick handler when button is clicked", () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} onClick={handleClick} />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should apply the correct variant and size classes", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button
          {...defaultProps}
          variant="secondary"
          size="md"
          className="secondary"
        />
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle(`
    font-size: 14px; 
    height: 40px;
    padding: 12px 16px;
  `);
  });
});
