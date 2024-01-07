import { createContext, useReducer } from "react";
import data1 from "../data";

const CartContext = createContext();

const data = [...data1];

function totalPrice(state) {
  console.log(state);
  state.totalPrice = 0;
  const total = state.cart.reduce((acc, item) => (acc += item.total), 0);
  return total;
}

const initialState = {
  data,
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalQuantity: state.totalQuantity++,
      };
    case "INC":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              total: item.quantity * item.price,
              quantity: item.quantity++,
            };
          } else {
            return { ...item };
          }
        }),
        totalQuantity: state.totalQuantity++,
        totalPrice: totalPrice(state),
      };
    case "DEC":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              item: item.quantity--,
              total: item.total - item.price,
            };
          } else {
            return { ...item };
          }
        }),
        totalQuantity: state.totalQuantity--,
        totalPrice: totalPrice(state),
      };
    case "TOTAL":
      return {
        ...state,
        totalPrice: totalPrice(state),
      };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        totalQuantity: state.totalQuantity--,
        totalPrice: totalPrice(state),
      };
    default:
      return { ...state };
  }
};

export function CartApi({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
