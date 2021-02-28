import Main from "./components/main/Main";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
