/* eslint-disable react/react-in-jsx-scope */
import { Assets } from 'assets';

export const homeObject1 = {
  id: 'signup',
  lightBackground: false,
  lightText: true,
  lightTextDescription: true,
  topLine: 'Service to Help You',
  headline: 'Check for Your Tenant right now for free',
  description:
    'Get access to our service by registering in one click to left a review about your tenant without getting charged any fees.',
  buttonLabel: 'Sign Up',
  imageStart: true,
  icon: <Assets.SvgAsset1 />,
  dark: true,
  primary: true,
  darkText: false,
  linkTo: '/signup',
};

export const homeObject2 = {
  id: 'about',
  lightBackground: true,
  lightText: false,
  lightTextDescription: false,
  topLine: 'Service to Help You',
  headline: 'Check for Your Tenant right now for free',
  description:
    'Get access to our service by registering in one click to left a review about your tenant without getting charged any fees.',
  buttonLabel: 'Learn more',
  imageStart: false,
  icon: <Assets.SvgAsset5 />,
  dark: false,
  primary: false,
  darkText: true,
  linkTo: '/about',
};
