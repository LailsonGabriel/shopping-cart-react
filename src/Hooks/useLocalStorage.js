import { useEffect } from 'react';

function useLocalStorage(setCart) {
  useEffect(() => {
    const saveLocalStorage = JSON.parse(localStorage.getItem('cart'));

    if (saveLocalStorage !== null) {
      setCart(saveLocalStorage);
    }
  }, [setCart]);
}

export default useLocalStorage;
