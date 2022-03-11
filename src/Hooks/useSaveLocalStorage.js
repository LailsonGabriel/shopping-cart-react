import { useEffect } from 'react';

function useSaveLocalStorage(cart) {
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
}

export default useSaveLocalStorage;
