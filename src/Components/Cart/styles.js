import styled from 'styled-components';

export const ContainerCart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: space-around;
  background-color: white;
  width: 40%;
  height: 100vh;
  flex-direction: column;

  .free {
    background-color: #2ecc71;
  }

  .result p,
  h1 {
    text-align: center;
    color: black;
    background-color: white;
  }
`;

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  color: black;
  padding: 5px;
  p {
    font-size: 11px;
    margin-left: 5px;
    background-color: white;
  }

  img {
    width: 40px;
    background-color: white;
    border: 1px solid grey;
  }

  .trash-icon {
    margin-left: 5px;
    background-color: white;
  }
`;
