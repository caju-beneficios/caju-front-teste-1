import Button from "./Button.view";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestProvider } from "~/tests/TestProvider";

describe("Button", () => {
  it("should be able to click on the button", async () => {
    const onClick = jest.fn();

    render(
      <Button data-testid="button" onClick={onClick}>
        Click me
      </Button>,
      { wrapper: TestProvider }
    );

    const button = screen.getByTestId("button");

    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should be able to render a loading button", () => {
    render(
      <Button data-testid="button" isLoading>
        Click me
      </Button>,
      { wrapper: TestProvider }
    );

    const button = screen.getByTestId("button");

    expect(button).toHaveAttribute("disabled");
    expect(screen.queryByText("Click me")).toBeFalsy();
  });
});
