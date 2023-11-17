import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/login/loginScreen';

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticate={user.logged}
          />

          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticate={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
