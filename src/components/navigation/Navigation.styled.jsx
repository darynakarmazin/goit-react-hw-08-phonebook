import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.nav`
  display: flex;
  gap: 8px;
`;

export const NavLinkSt = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 5px;

  &.active {
    text-decoration: underline;
  }
`;
