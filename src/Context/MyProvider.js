import { useState } from 'react';
import useLoadLocalStorage from '../Hooks/useLoadLocalStorage';
import useSaveLocalStorage from '../Hooks/useSaveLocalStorage';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [cart, setCart] = useState([]);

  useLoadLocalStorage(setCart);
  useSaveLocalStorage(cart);

  const reveal = {
    cart,
    setCart,
  };

  return <MyContext.Provider value={reveal}>{children}</MyContext.Provider>;
}

export default MyProvider;
