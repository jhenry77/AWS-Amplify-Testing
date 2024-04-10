import React from 'react';

type Item = any;

const CartContext = React.createContext({
    cart: [] as Item[],
    addItem: (item: Item) => {},
    removeItem: (id: string) => {},
    clearCart: () => {},
  });

  export default CartContext;