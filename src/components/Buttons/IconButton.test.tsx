import { IconButton } from "./IconButton";
import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";

describe("<IconButton />", () => {
  test("Should match snapshot", () => {
    const component = render(
      <IconButton>
        <i />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });
});
