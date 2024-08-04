import { SearchBar } from ".";
import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";
import { BrowserRouter } from "react-router-dom";

describe("<SearchBar />", () => {
  test("Should match snapshot", () => {
    const component = render(
      <SearchBar onSearch={() => {}} onRefresh={() => {}} />,
      { wrapper: BrowserRouter }
    );
    expect(component).toMatchSnapshot();
  });
});
