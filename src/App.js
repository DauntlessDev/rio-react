import React from 'react';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();
  console.log(user)

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
        <ProtectedRoute
          user={user}
          path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
