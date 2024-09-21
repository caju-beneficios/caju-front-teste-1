import { Header } from "./components/Header";
import { RegistrationProvider, ToastProvider } from "./hooks";

import Router from "~/router";

function App() {
  return (
    <>
      <Header>
        <h1>Caju Frontend - Teste Luiz Eduardo</h1>
      </Header>

      <ToastProvider>
        <RegistrationProvider>
          <Router />
        </RegistrationProvider>
      </ToastProvider>
    </>
  );
}

export default App;
