import { Suspense,lazy } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes'
const Login = lazy(() => import('./screens/LoginScreen'))
const Register = lazy(() => import('./screens/RegisterScreen'))

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.REGISTER} component={Register} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
