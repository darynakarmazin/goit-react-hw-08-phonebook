import styled from 'styled-components';

export const ListItem = styled.li`
  text-align: left;
  font-style: italic;
  display: flex;
  gap: 15px;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const DeleteButton = styled.button`
 background-color: transparent;
 border-radius: 10px;
 border: 0.5px solid;
 padding 2px 6px;
 cursor: pointer;

 &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
