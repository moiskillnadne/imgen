import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useUserStore } from '../store/userStore';

export const ProtectedRoute = () => {
  const {authStatus} = useAuthenticator(ctx => [ctx.authStatus]);
  const {user}       = useAuthenticator(ctx => [ctx.user]);

  const setUser = useUserStore(s => s.setUser);
  const clear    = useUserStore(s => s.clear);

  useEffect(() => {
    if (authStatus === 'authenticated') {
      const email = user?.signInDetails?.loginId ?? null;
      const userId = user?.userId ?? null;

      if (email !== useUserStore.getState().email) {
        setUser(email, userId);
      }
    } else {
      clear()
    }
  }, [authStatus, user, setUser, clear]);

  if (authStatus === 'configuring') return <p>Loading…</p>;

  return authStatus === 'authenticated'
    ? <Outlet />
    : <Navigate to="/login" replace />;
};