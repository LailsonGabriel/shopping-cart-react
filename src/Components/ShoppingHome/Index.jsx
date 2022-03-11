import Products from '../Products/Index';
import { ContainerHome } from './styles';
import Cart from '../Cart/Index';

function ShoppingHome() {
  return (
    <ContainerHome>
      <div className='products'>
        <Products />
      </div>
      <div className='cart'>
        <Cart />
      </div>
    </ContainerHome>
  );
}

export default ShoppingHome;
