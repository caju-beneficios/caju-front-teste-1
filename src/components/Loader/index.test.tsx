import Loader from ".";
import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";

describe("<Loader />", () => {
  test("Should match snapshot", () => {
    const component = render(<Loader />);
    expect(component).toMatchSnapshot();
  });
});
