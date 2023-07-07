import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from './navigation/Navigation';
import { UserMenu } from './userMenu/UserMenu';
import { useAuth } from 'redux/auth/useAuth';
import { AuthNav } from './authNav/AuthNav';
import { Wrapper } from './App.styled';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
          width: '100%',
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          paddingBottom: 8,
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
