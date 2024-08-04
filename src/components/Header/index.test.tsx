import { Header } from ".";
import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";

describe("<Header />", () => {
  test("Should match snapshot", () => {
    const component = render(<Header><h1>a header component</h1></Header>);
    expect(component).toMatchSnapshot();
  });
});
