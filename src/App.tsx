import Router from "~/router";
import { Header } from "./components/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />

      <Header />

      <main>
        <Router />
      </main>
    </>
  );
}

export default App;
