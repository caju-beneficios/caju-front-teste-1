import Columns from ".";
import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";

describe("<Columns />", () => {
  test("Should match snapshot", () => {
    const component = render(
      <Columns
        onRegistrationDelete={() => {}}
        onRegistrationUpdate={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
