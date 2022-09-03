import { useState } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import type {
  AuthFormValues,
  ValidationError,
  ResolverReturn,
} from 'types/form';

import { useAuth } from '@hooks';
import LoginSchema from '@validations';
import Input from '@components/input';

const resolver: Resolver<AuthFormValues, ResolverReturn> = async (formBody) => {
  try {
    const values = await LoginSchema.validate(formBody, {
      abortEarly: false,
    });
    return { values, errors: {} };
  } catch (error: any) {
    const formErrors = error.inner.reduce(
      (acc: ValidationError, err: any) => ({
        ...acc,
        [err.path]: {
          type: err.name,
          message: err.message,
        },
      }),
      {}
    );
    return { values: {}, errors: formErrors };
  }
};

export default function LoginForm() {
  const [disabled, setDisabled] = useState<boolean>(true);
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthFormValues>({ resolver, mode: 'onBlur' });

  const onSubmit = handleSubmit(async (formData) => {
    setDisabled(true);
    const { status } = await login(formData);
    setDisabled(false);

    if (status === 'successful') navigate('/home', { replace: true });
    else if (status === 'unsuccessful') {
      setError('username', {
        type: 'ValidationError',
        message: 'Incorrect Username or Password',
      });
      setError('password', {
        type: 'ValidationError',
        message: 'Incorrect Username or Password',
      });
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Input
        register={register}
        name="username"
        error={errors.username?.message}
        disabled={disabled}
      />
      <Input
        register={register}
        name="password"
        error={errors.password?.message}
        disabled={disabled}
      />
      <button type="submit" disabled={disabled}>
        Login
      </button>
    </form>
  );
}
