import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useUserStore } from '../store/userStore';

export const ProtectedRoute = () => {
  const {authStatus} = useAuthenticator(ctx => [ctx.authStatus]);
  const {user}       = useAuthenticator(ctx => [ctx.user]);

  const setEmail = useUserStore(s => s.setEmail);
  const clear    = useUserStore(s => s.clear);

  useEffect(() => {
    if (authStatus === 'authenticated') {
      const email = user?.signInDetails?.loginId ?? null;

      if (email !== useUserStore.getState().email) {
        setEmail(email);
      }
    } else {
      clear()
    }
  }, [authStatus, user, setEmail, clear]);

  if (authStatus === 'configuring') return <p>Loading…</p>;

  return authStatus === 'authenticated'
    ? <Outlet />
    : <Navigate to="/login" replace />;
};