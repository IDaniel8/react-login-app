import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import { isValidToken } from '@utils/auth';
import { ROUTES } from '~/routes';

import { logoutActionRequest } from '@containers/login/actions';

const ProtectedRoute: React.SFC<RouteProps> = ({ path, component: Component, ...rest }) => {
  const dispatch = useDispatch();

  return (
    <Route
      path={path}
      render={(props) => {
        if (!isValidToken()) {
          dispatch(logoutActionRequest());
          return <Redirect to={ROUTES.LOGIN} />;
        } else {
          return <Component {...rest} {...props} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
