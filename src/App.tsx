import Router from "~/router";
import { Header } from "./components/Header";
import { Toaster } from "react-hot-toast";
import { ConfirmationProvider } from "./hooks/useConfirmation";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfirmationProvider>
        <Toaster />

        <Header />

        <main>
          <Router />
        </main>
      </ConfirmationProvider>
    </ThemeProvider>
  );
}

export default App;
