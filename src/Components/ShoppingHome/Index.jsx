import Products from '../Products/Index';
import { ContainerHome } from './styles';
import Cart from '../Cart/Index';

function ShoppingHome() {
  return (
    <ContainerHome>
      <Products />
      <Cart />
    </ContainerHome>
  );
}

export default ShoppingHome;
