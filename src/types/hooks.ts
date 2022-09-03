/* eslint-disable no-unused-vars */
import type { AuthFormValues } from './form';

export type AuthContextProps = {
  children: JSX.Element;
};

export type AuthFunctionsReturn = {
  status: 'successful' | 'unsuccessful' | 'loading';
};

export type AuthContextValues = {
  auth: {
    isAuthenticated: boolean;
    username: string;
  };
  login: (creds: AuthFormValues) => Promise<AuthFunctionsReturn>;
  logout: () => AuthFunctionsReturn;
};
