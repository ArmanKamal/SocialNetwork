import { Suspense,lazy } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Login = lazy(() => import('./screens/LoginScreen'))

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
