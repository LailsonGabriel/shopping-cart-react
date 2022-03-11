import { ContainerProduct } from './styles';

function ProductCard({ image, name, price }) {
  return (
    <ContainerProduct>
      <h4>{name}</h4>
      <img src={image} alt='product' />
      <p>
        {(price / 100).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
      <button type='button'>Comprar</button>
    </ContainerProduct>
  );
}

export default ProductCard;
