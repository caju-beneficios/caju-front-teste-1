import TextField from ".";
import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";

describe("<TextField />", () => {
  test("Should match snapshot", () => {
    const component = render(<TextField />);
    expect(component).toMatchSnapshot();
  });
});
