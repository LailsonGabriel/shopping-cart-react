import styled from 'styled-components';

export const ContainerHome = styled.div`
  color: white;
  display: flex;
  width: 100%;
  height: 100vh;

  button {
    color: white;
  }

  .products {
    width: 70%;
    display: flex;
  }

  .cart {
    background-color: white;
    width: 30%;

    h3 {
      color: black;
      position: relative;
      top: 0px;
      background-color: white;
      text-align: center;
    }
  }
`;
