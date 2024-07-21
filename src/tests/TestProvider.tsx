import { ThemeProvider } from "styled-components";
import { theme } from "~/common/styles/theme";

export function TestProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
