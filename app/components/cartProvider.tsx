import React, { ReactNode, useReducer, useState } from 'react';
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
        // Check if the item already exists in the cart
        const itemExists = state.cart.some(item => item.id === action.item?.id);
        if (!itemExists && action.item) {
          // Item does not exist, so add it
          return { ...state, cart: [...state.cart, action.item] };
        }
        // Item already exists or no item provided, return the state unchanged
        return state;
      case 'REMOVE_ITEM':
        // Remove item by filtering out the item with the matching id
        return { ...state, cart: state.cart.filter(item => item.id !== action.id) };
      case 'CLEAR_CART':
          return{...state, cart: []};
      default:
        // Return the current state if no actions match
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
    const clearCart = () => {
      dispatch({ type: 'CLEAR_CART' }); // Clear the cart
    };
    return (
      <CartContext.Provider value={{ cart: state.cart, addItem, removeItem, clearCart }}>
        {children}
      </CartContext.Provider>
    );
  }