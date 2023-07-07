import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../redux/auth/useAuth';
import { UserName, LogOutButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div style={{ display: 'flex' }}>
      <UserName>Welcome, {user.name}</UserName>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutButton>
    </div>
  );
};
