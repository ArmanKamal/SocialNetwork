import { Suspense,lazy } from 'react';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes'
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';
const Login = lazy(() => import('./screens/LoginScreen'))
const Register = lazy(() => import('./screens/RegisterScreen'))
const NotFound = lazy(() => import('./screens/NotFound'))
const Dashboard = lazy(() => import('./screens/Dashboard'))

function App() {
  const { user } = useAuthListener();
  
  return (
    <UserContext.Provider value={{user}}>
      <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.REGISTER} component={Register} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
   
  );
}

export default App;
