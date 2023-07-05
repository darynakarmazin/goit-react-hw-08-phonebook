import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100vh;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  width: 450px;
  min-height: 500px;
  padding: 50px;
  margin: 0 auto;
  background: white;
  height: auto;
  border-radius: 5px;
  margin: 2% auto;
  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
  padding: 2%;
  background-image: linear-gradient(-225deg, #e3fdf5 50%, #ffe6fa 50%);
`;

export const Header = styled.h1`
  margin: 2% auto 10% auto;
  text-align: center;
`;
