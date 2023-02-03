import { Navigate, Outlet } from 'react-router-dom';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from 'index';

export const AuthRoute = ({ redirectPath }) => {
  const { user } = useContext(Context);

  if (user.isAuth) {
    return <Outlet />;
  }

  return <Navigate to={redirectPath ? redirectPath : '/'} />;
};

AuthRoute.propTypes = {
  redirectPath: PropTypes.string,
};
