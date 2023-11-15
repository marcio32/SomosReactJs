import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route path="/marvel" component={MarvelScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
