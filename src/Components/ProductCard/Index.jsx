import { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import convertValue from '../../Utils/convertToCurrency';
import { ContainerProduct } from './styles';

function ProductCard({ image, name, price, id }) {
  const { cart, setCart } = useContext(MyContext);

  const addItemToCart = (item) => {
    const exist = cart.find((product) => product.id === id);

    if (exist) {
      const newCart = cart.map((product) => {
        if (product.id === item.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      return setCart(newCart);
    }

    setCart([...cart, { ...item, quantity: 1 }]);
  };

  return (
    <ContainerProduct>
      <img src={image} alt='product' />
      <h4>{name}</h4>
      <p>{convertValue(price / 100)}</p>
      <button
        type='button'
        onClick={() => addItemToCart({ image, name, price, id })}
      >
        Comprar
      </button>
    </ContainerProduct>
  );
}

export default ProductCard;
