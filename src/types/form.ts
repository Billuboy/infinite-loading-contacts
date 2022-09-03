import type { UseFormRegister } from 'react-hook-form';

export type AuthFormValues = {
  username: string;
  password: string;
};

export type ValidationError = {
  [key: string]: {
    path: string;
    message: string;
  };
};

export type InputProps = {
  register: UseFormRegister<AuthFormValues>;
  name: 'username' | 'password';
  error: string | undefined;
  disabled: boolean;
};

export type ResolverReturn = {
  values: AuthFormValues;
  errors: ValidationError;
};
