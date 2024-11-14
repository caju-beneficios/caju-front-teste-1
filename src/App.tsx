import Router from "./router";
import { Header } from "./components/Header";

import { ThemeProvider } from "styled-components";
//import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "src/pages/Dashboard/contexts/user";

export const cajuQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={cajuQueryClient}>
          <AppProvider>
            <Header>
              <h1>Caju Front Teste</h1>
            </Header>
            <Router />
          </AppProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
