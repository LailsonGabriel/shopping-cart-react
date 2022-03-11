import styled from 'styled-components';

export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 250px;
  text-align: center;
  margin: 5px;
  padding: 5px;
  color: black;
  img {
    width: 100px;
    background-color: white;
    border-radius: 10px;
  }
  background-color: #f8f8f8;
  border-radius: 10px;

  p {
    background-color: #f8f8f8;
  }

  h4 {
    background-color: #f8f8f8;
  }

  button {
    background-color: #87cefa;
    padding: 10px;
    border-radius: 10px;
  }
`;
