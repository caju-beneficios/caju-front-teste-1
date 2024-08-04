import NewUserPage from ".";
import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";
import { BrowserRouter } from "react-router-dom";

describe("<NewUserPage />", () => {
  test("Should match snapshot", () => {
    const component = render(<NewUserPage />, { wrapper: BrowserRouter });
    expect(component).toMatchSnapshot();
  });
});
