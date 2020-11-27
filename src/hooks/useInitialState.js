import { useReducer } from 'react';
import '../initialState';
import initialState from '../initialState';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products: state.products,
        cart: [...state.cart, action.payload.product],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        products: state.products,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case 'ADD_TO_BUYER':
      return {
        ...state,
        buyer: [...state.buyer, action.payload.buyer],
      };
    default:
      throw new Error('Not action identified');
  }
};

const useInitialState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product } });
  };

  const addToBuyer = (buyer) => {
    dispatch({ type: 'ADD_TO_BUYER', payload: { buyer } });
  };

  return { state, addToCart, removeFromCart, addToBuyer };
};

export default useInitialState;
