import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.div`
  display: flex;
  gap: 8px;
`;

export const NavLinkSt = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`;
