import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './../../router/routes';

function Pages() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Redirect to="/nopage" />
    </Switch>
  );
}

export default Pages;
