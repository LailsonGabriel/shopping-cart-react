import { useState } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';
import useSaveLocalStorage from '../Hooks/useSaveLocalStorage';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [cart, setCart] = useState([]);

  useLocalStorage(setCart);
  useSaveLocalStorage(cart);

  const reveal = {
    cart,
    setCart,
  };

  return <MyContext.Provider value={reveal}>{children}</MyContext.Provider>;
}

export default MyProvider;
