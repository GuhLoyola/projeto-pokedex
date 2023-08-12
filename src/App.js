import { Header } from "./components/header/header";
import { ThemeProvider } from "./contexts/theme-context";

function App() {
  return (
    <ThemeProvider>
        <Header/>
    </ThemeProvider>
  );
}

export default App;
