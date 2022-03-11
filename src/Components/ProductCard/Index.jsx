import { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import convertValue from '../../Utils/convertToCurrency';
import { ContainerProduct } from './styles';

function ProductCard({ image, name, price, id }) {
  const { cart, setCart } = useContext(MyContext);

  const addItemToCart = (item, option) => {
    const exist = cart.find((product) => product.id === id);

    if (exist) {
      const newCart = cart.map((product) => {
        if (product.id === item.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      return setCart(newCart);
    }

    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const decreaseAmount = (item) => {
    const exist = cart.find((product) => product.id === id);

    if (exist && exist.quantity > 1) {
      const newCart = cart.map((product) => {
        if (product.id === item.id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      return setCart(newCart);
    }
  };

  return (
    <ContainerProduct>
      <img src={image} alt='product' />
      <h4>{name}</h4>
      <p>{convertValue(price / 100)}</p>
      <div className='buy'>
        <p onClick={() => decreaseAmount({ image, name, price, id })}>-</p>
        <button
          type='button'
          onClick={() => addItemToCart({ image, name, price, id })}
        >
          Comprar
        </button>
        <p onClick={() => addItemToCart({ image, name, price, id })}>+</p>
      </div>
    </ContainerProduct>
  );
}

export default ProductCard;
