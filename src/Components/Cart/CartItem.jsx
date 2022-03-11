import convertValue from '../../Utils/convertToCurrency';
import { CartItemContainer } from './styles';
import { BiTrash } from 'react-icons/bi';
import MyContext from '../../Context/MyContext';
import { useContext } from 'react';

function CartItem({ image, name, price, id, quantity }) {
  const { cart, setCart } = useContext(MyContext);

  const removeToCart = () => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartItemContainer>
      <img src={image} alt='product-cart' />
      <p>{name}</p>
      <p>{convertValue(price / 100)}</p>
      <p>Qtd: {quantity}</p>
      <BiTrash onClick={removeToCart} className='trash-icon' />
    </CartItemContainer>
  );
}

export default CartItem;
