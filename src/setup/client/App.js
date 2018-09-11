import React from 'react';
import { Route, Switch } from 'react-router-dom';

// UI Imports
// TODO: custom theme
import theme from './theme';

// App Imports
import routes from '../../setup/routes';
import Header from '../../modules/layout/header';
import RoutePrivate from '../../modules/auth/RoutePrivate';
import NotFound from '../../modules/common/NotFound';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      {Object.values(routes).map(
        (route, index) =>
          route.auth ? (
            <RoutePrivate
              {...route}
              key={index}
              path={
                typeof route.path === 'function' ? route.path() : route.path
              }
            />
          ) : (
            <Route
              {...route}
              key={index}
              path={
                typeof route.path === 'function' ? route.path() : route.path
              }
            />
          )
      )}
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
