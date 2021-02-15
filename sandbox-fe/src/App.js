import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import MainPage from './pages/main/main.page';
import CSSTrick from './pages/cssTrick/cssTrick.page';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/css-trick" exact>
            <CSSTrick testProps={'hello'}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
