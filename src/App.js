import { Header } from "./components/header/header";
import { ThemeProvider } from "./contexts/theme-context";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <ThemeProvider>
        <Header/>
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
