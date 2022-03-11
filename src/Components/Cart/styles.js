import styled from 'styled-components';

export const ContainerCart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  flex-direction: column;

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
