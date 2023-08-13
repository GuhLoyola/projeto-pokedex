import { ThemeProvider } from "./contexts/theme-context";
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./pages/routes";

function App() {
  return (
    <ThemeProvider>
        <GlobalStyle/>
        <AppRoutes/>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

`

export default App;
