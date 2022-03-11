import { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [cart, setCart] = useState([]);

  const reveal = {
    cart,
    setCart,
  };

  return <MyContext.Provider value={reveal}>{children}</MyContext.Provider>;
}

export default MyProvider;
