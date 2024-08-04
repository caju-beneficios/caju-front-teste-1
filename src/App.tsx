import Router from "~/router";
import { Header } from "./components/Header";
import { QueryClientProvider, QueryClient } from "react-query";

export const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
