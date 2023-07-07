import styled from 'styled-components';

export const UserName = styled.p`
  font-style: italic;
  font-size: 14px;
  margin-right: 8px;
`;

export const LogOutButton = styled.button`
 background-color: transparent;
 border-radius: 75px;
 border: 1px solid;
 padding 2px 6px;
 cursor: pointer;

 &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
