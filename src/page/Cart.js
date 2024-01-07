import { useContext, useState } from "react";

import CartContext from "../context/cartApi";
import CartCard from "../components/CartCard";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const cartData = state.cart;
  // console.log(state.totalQuantity);
  console.log(state.totalPrice);

  function handleQuantityInc(id) {
    dispatch({ type: "INC", payload: id });
    dispatch({ type: "TOTAL" });
  }
  function handleQuantityDec(id) {
    dispatch({ type: "DEC", payload: id });
    dispatch({ type: "TOTAL" });
  }

  console.log(state.cart);

  return (
    <ul>
      {cartData.map((item) => (
        <CartCard
          item={item}
          key={item.id}
          onInc={handleQuantityInc}
          onDec={handleQuantityDec}
        />
      ))}
    </ul>
  );
}

export default Cart;
