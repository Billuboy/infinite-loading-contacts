import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';

import type { AuthFormValues } from 'types/form';
import type {
  AuthContextProps,
  AuthContextValues,
  AuthFunctionsReturn,
} from 'types/hooks';

const AuthContext = createContext<AuthContextValues>({
  auth: {
    isAuthenticated: false,
    username: '',
  },
  login: () =>
    new Promise((resolve) => {
      resolve({ status: 'loading' });
    }),
  logout: () => ({ status: 'loading' }),
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }: AuthContextProps) {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    username: '',
  });

  useEffect(() => {
    if (localStorage.getItem('auth_status') === 'true')
      setAuth(() => ({ isAuthenticated: true, username: 'foo' }));
  });

  const login = useCallback(
    (creds: AuthFormValues) =>
      new Promise<AuthFunctionsReturn>((resolve) => {
        setTimeout(() => {
          if (creds.username === 'foo' && creds.password === 'bar') {
            localStorage.setItem('auth_status', 'true');
            setAuth(() => ({ isAuthenticated: true, username: 'foo' }));
            resolve({ status: 'successful' });
          } else resolve({ status: 'unsuccessful' });
        }, 2000);
      }),

    []
  );

  const logout = useCallback(() => {
    localStorage.removeItem('auth_status');
    setAuth(() => ({ isAuthenticated: false, username: '' }));
    return { status: 'successful' } as AuthFunctionsReturn;
  }, []);

  const value = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
