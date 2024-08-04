import { BackgroundContainer } from "./SharedStyles";
import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";

describe("<BackgroundContainer />", () => {
  test("Should match snapshot", () => {
    const component = render(
      <BackgroundContainer>
        <p>A Container content</p>
      </BackgroundContainer>
    );
    expect(component).toMatchSnapshot();
  });
});
