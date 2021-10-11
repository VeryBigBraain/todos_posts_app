import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './../../router/routes';

function Pages({state}) {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          render={() => {
            const Component = route.component;
            return <Component />
            }}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Redirect to="/"/>
    </Switch>
  );
}

export default Pages;
