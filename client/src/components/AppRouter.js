import React from 'react';
import About from 'pages/About';
import Signin from 'pages/Signin';
import Home from 'pages/Home';
import Privacy from 'pages/Privacy';
import Signup from 'pages/Signup';
import Search from 'pages/Search';
import Terms from 'pages/Terms';
import Chat from 'pages/Chat';
import Account from 'pages/Account';
import Subscription from 'pages/Subscription';
import Advertisement from 'pages/Advertisement';
import ResetEmail from 'pages/ResetEmail';
import ResetPassword from 'pages/ResetPassword';
import {
  ABOUT_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  SEARCH_ROUTE,
  SUBSCRIPTION_ROUTE,
  PRIVACY_ROUTE,
  TERMS_ROUTE,
  ADVERTISEMENT_ROUTE,
  CHAT_ROUTE,
  ACCOUNT_ROUTE,
  RESET_EMAIL_ROUTE,
  RESET_PASSWORD_ROUTE,
  MAIN_ROUTE,
} from 'utils/consts';
import { Routes, Route } from 'react-router-dom';
import { AuthRoute, UnauthRoute } from 'components/protectedRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path={CHAT_ROUTE} element={<Chat />}></Route>
      </Route>
      <Route element={<UnauthRoute />}>
        <Route path={SIGNIN_ROUTE} element={<Signin />}></Route>
        <Route path={SIGNUP_ROUTE} element={<Signup />}></Route>
        <Route path={RESET_EMAIL_ROUTE} element={<ResetEmail />}></Route>
        <Route path={RESET_PASSWORD_ROUTE + '/:userId' + '/:resetToken'} element={<ResetPassword />}></Route>
      </Route>
      <Route path={MAIN_ROUTE} element={<Home />}></Route>
      <Route path={ABOUT_ROUTE} element={<About />}></Route>
      <Route path={ACCOUNT_ROUTE + '/:id'} element={<Account />}></Route>
      <Route path={ADVERTISEMENT_ROUTE + '/:id'} element={<Advertisement />}></Route>
      <Route path={SEARCH_ROUTE} element={<Search />}></Route>
      <Route path={SUBSCRIPTION_ROUTE} element={<Subscription />}></Route>
      <Route path={TERMS_ROUTE} element={<Terms />}></Route>
      <Route path={PRIVACY_ROUTE} element={<Privacy />}></Route>
    </Routes>
  );
};

export default AppRouter;
