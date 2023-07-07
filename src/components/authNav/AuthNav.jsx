import { NavLinkSt, NavMenu } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavMenu>
      <NavLinkSt to="/register">Register</NavLinkSt>
      <NavLinkSt to="/login">Log In</NavLinkSt>
    </NavMenu>
  );
};
