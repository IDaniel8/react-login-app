import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '~/routes';

import Layout from '@containers/layout';
import ProtectedRoute from '@components/protected_route';

import Login from '@containers/login';
import Dashboard from '@containers/dashboard';
import Settings from '@containers/settings';

const App: React.SFC<unknown> = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={ROUTES.DASHBOARD} />
      </Route>
      <Route path={ROUTES.LOGIN} component={Login} />
      <Layout>
        <ProtectedRoute path={ROUTES.DASHBOARD} component={Dashboard} />
        <ProtectedRoute path={ROUTES.SETTINGS} component={Settings} />
      </Layout>
    </Switch>
  );
};

export default App;
