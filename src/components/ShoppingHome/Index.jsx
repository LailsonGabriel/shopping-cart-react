import Products from '../Products/Index';
import { ContainerHome } from './styles';

function ShoppingHome() {
  return (
    <ContainerHome>
      <div className='products'>
        <Products />
      </div>
      <div className='cart'>
        <h3>Carrinho</h3>
      </div>
    </ContainerHome>
  );
}

export default ShoppingHome;
