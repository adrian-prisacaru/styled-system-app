import Container from "./components/Container";
import CreateArticle from "./containers/CreateArticle";
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CreateArticle/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
