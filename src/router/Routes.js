import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import PrivateRoute from '../components/PrivateRoute';

import Customer from '../containers/Customer/Customer';

const Routes = () => {
  const LayoutComponent = Layout;
  return (
    <LayoutComponent>
      <Switch>
        <PrivateRoute exact path="/">
          <Redirect to="/customer" />
        </PrivateRoute>
        <PrivateRoute exact path="/customer" component={Customer} />
      </Switch>
    </LayoutComponent>
  );
};

export default Routes;
