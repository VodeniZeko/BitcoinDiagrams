import Main from "./components/main/Main";
import Layout from "./components/layout";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Main />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
