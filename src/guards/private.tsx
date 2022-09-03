import { Navigate } from 'react-router-dom';

import type RouteElement from 'types/guards';

import { useAuth } from '@hooks';

export default function PrivateRoute({ element }: RouteElement) {
  const { auth } = useAuth();

  if (!auth.isAuthenticated) return <Navigate to="/" replace />;
  return element;
}
