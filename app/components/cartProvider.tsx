import React, { ReactNode, useReducer } from 'react';
import CartContext from './cart';

const initialState = { cart: [] };

type Item = any;

type CartState = {
    cart: Item[]; // Replace 'any' with the type of items in your cart
  };
  
  type CartAction = {
    type: string;
    item?: Item; // Replace 'any' with the type of items in your cart
    id?: string;
  };


  
  type CartProviderProps = {
    children: ReactNode;
  };
  
  function cartReducer(state: CartState, action: CartAction) {
    switch (action.type) {
      case 'ADD_ITEM':
        return { ...state, cart: [...state.cart, action.item] };
      case 'REMOVE_ITEM':
        return { ...state, cart: state.cart.filter(item => item.id !== action.id) };
      default:
        return state;
    }
  }

  export function CartProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);
  
    const addItem = (item: Item) => {
      dispatch({ type: 'ADD_ITEM', item });
    };
  
    const removeItem = (id: string) => {
      dispatch({ type: 'REMOVE_ITEM', id });
    };
  
    return (
      <CartContext.Provider value={{ cart: state.cart, addItem, removeItem }}>
        {children}
      </CartContext.Provider>
    );
  }