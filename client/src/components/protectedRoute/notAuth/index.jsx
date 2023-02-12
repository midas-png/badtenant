import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from 'index';

export const UnauthRoute = ({ redirectPath }) => {
  const { user } = useContext(Context);

  if (!user.isAuth) {
    return <Outlet />;
  }

  return <Navigate to={redirectPath ? redirectPath : '/'} />;
};

UnauthRoute.propTypes = {
  redirectPath: PropTypes.string,
};
