import { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import convertValue from '../../Utils/convertToCurrency';
import CartItem from './CartItem';
import { ContainerCart } from './styles';

function Cart() {
  const { cart } = useContext(MyContext);

  const sumItemsPrice = () => {
    const total = cart.reduce(
      (acc, current) => (acc += current.price * current.quantity),
      0,
    );
    return total / 100;
  };

  return (
    <ContainerCart>
      {cart.length > 0 &&
        cart.map((product, i) => (
          <CartItem
            key={product.name + i}
            image={product.image}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            id={product.id}
          />
        ))}
      <div className='result'>
        <p>Total: {convertValue(sumItemsPrice())}</p>
        {sumItemsPrice() > 10 && <h1>Frete grátis</h1>}
      </div>
    </ContainerCart>
  );
}

export default Cart;
