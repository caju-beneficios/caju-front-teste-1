import App from "./App";
import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";

describe("<App />", () => {
  test("Should match snapshot", () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});
