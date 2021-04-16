/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

/**
 This is used to determine if a user is authenticated and
 if they are allowed to visit the page they navigated to.

 If they are: they proceed to the page
 If not: they are redirected to the login page.
* */
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = true;

  return (
    <Route
      {...rest}
      render={(props) => (
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
        )
      )}
    />
  );
};

export default PrivateRoute;
