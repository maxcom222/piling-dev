import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import { PublicRoute, PrivateRoute } from './Routes';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <PublicRoute path="/" exact component={Home} />

          <PublicRoute path="*">
            <p>Page not found</p>
          </PublicRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
