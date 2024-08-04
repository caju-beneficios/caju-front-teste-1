import Button from ".";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";

describe("<Button />", () => {
  test("Should match snapshot", () => {
    const component = render(<Button>Ativar</Button>);
    expect(component).toMatchSnapshot();
  });

  test("Should show button", () => {
    const { debug } = render(<Button>Ativar</Button>);
    expect(screen.getByRole("button", { name: /ativar/i }));
    debug();
  });
});
