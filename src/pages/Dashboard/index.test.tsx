import DashboardPage from ".";
import { render } from "@testing-library/react";
import { describe, test, expect, jest } from "@jest/globals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const TestWrapper = ({ children }: { children: JSX.Element }) => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
};

describe("<DashboardPage />", () => {
  test("Should match snapshot", () => {
    const component = render(
      <TestWrapper>
        <DashboardPage />
      </TestWrapper>,
      { wrapper: BrowserRouter }
    );
    expect(component).toMatchSnapshot();
  });
});
