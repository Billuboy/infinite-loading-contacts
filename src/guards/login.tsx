import { Navigate } from 'react-router-dom';

import type RouteElement from 'types/guards';

import { useAuth } from '@hooks';

export default function LoginRoute({ element }: RouteElement) {
  const { auth } = useAuth();

  if (auth.isAuthenticated) return <Navigate to="/home" replace />;
  return element;
}
