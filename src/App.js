import Container from "./components/Container";
import CreateArticle from "./containers/CreateArticle";
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Articles from "./containers/Articles";
import NotFound from "./containers/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header/>
        <Container>
          <Switch>
            <Route exact path="/">
              <Articles />
            </Route>
            <Route exact path="/articles/new">
              <CreateArticle />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
