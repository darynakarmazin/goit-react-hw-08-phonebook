import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from './navigation/Navigation';
import { UserMenu } from './userMenu/UserMenu';
import { useAuth } from 'redux/auth/useAuth';
import { AuthNav } from './authNav/AuthNav';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
