import Router from "~/router";
import { Header } from "./components/Header";
import { Toaster } from "react-hot-toast";
import { ConfirmationProvider } from "./hooks/useConfirmation";

function App() {
  return (
    <>
      <Toaster />

      <Header />

      <main>
        <ConfirmationProvider>
          <Router />
        </ConfirmationProvider>
      </main>
    </>
  );
}

export default App;
