
import { NavMenu, NavLinkSt } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavMenu>
      <NavLinkSt to="/">Home</NavLinkSt>
      <NavLinkSt to="/contacts">Contacts</NavLinkSt>
    </NavMenu>
  );
};
