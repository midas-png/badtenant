import {
  About,
  Account,
  Advertisement,
  Home,
  ResetEmail,
  ResetPassword,
  Search,
  Signin,
  Signup,
  Subscription,
  Terms,
  Contacts,
} from './index';
import {
  ABOUT_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  SEARCH_ROUTE,
  SUBSCRIPTION_ROUTE,
  TERMS_ROUTE,
  ADVERTISEMENT_ROUTE,
  ACCOUNT_ROUTE,
  RESET_EMAIL_ROUTE,
  RESET_PASSWORD_ROUTE,
  MAIN_ROUTE,
} from 'utils/consts';
import { Routes, Route } from 'react-router-dom';
import { UnauthRoute } from 'components/protectedRoute';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<UnauthRoute />}>
        <Route path={SIGNIN_ROUTE} element={<Signin />} />
        <Route path={SIGNUP_ROUTE} element={<Signup />} />
        <Route path={RESET_EMAIL_ROUTE} element={<ResetEmail />} />
        <Route
          path={RESET_PASSWORD_ROUTE + '/:userId' + '/:resetToken'}
          element={<ResetPassword />}
        />
      </Route>
      <Route path={MAIN_ROUTE} element={<Home />} />
      <Route path={ABOUT_ROUTE} element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path={ACCOUNT_ROUTE} element={<Account />} />
      <Route path={ADVERTISEMENT_ROUTE + '/:id'} element={<Advertisement />} />
      <Route path={SEARCH_ROUTE} element={<Search />} />
      <Route path={SUBSCRIPTION_ROUTE} element={<Subscription />} />
      <Route path={TERMS_ROUTE} element={<Terms />} />
    </Routes>
  );
};
