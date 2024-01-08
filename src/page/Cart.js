import { useContext } from "react";

import CartContext from "../context/cartApi";
import CartCard from "../components/CartCard";
import Button from "../components/Button";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const cartData = state.cart;

  function handleQuantityInc(id) {
    dispatch({ type: "INC", payload: id });
    dispatch({ type: "TOTAL" });
  }
  function handleQuantityDec(id) {
    dispatch({ type: "DEC", payload: id });
    dispatch({ type: "TOTAL" });
  }

  return (
    <div className=" overflow-y-auto lg:flex p-4 min-h-[80vh] gap-4 relative">
      <ul className=" lg:w-[70%] flex gap-2 sm:gap-4 flex-col ">
        {cartData.map((item) => (
          <CartCard
            item={item}
            key={item.id}
            onInc={handleQuantityInc}
            onDec={handleQuantityDec}
          />
        ))}
      </ul>
      <aside className=" w-full mt-4 lg:w-[30%]  rounded-md bg-[#0F1035] text-white h-fit px-4 py-10 flex flex-col justify-center gap-5 sticky top-0">
        <h2 className="font-bold text-2xl">Order Summary</h2>
        <div className="border border-b-2 border-solid w-[50%]"></div>
        <p className="text-xl font-semibold">
          Total Item : {state.totalQuantity}{" "}
        </p>
        <p className="text-xl font-semibold">
          Total Price : {state.totalPrice}{" "}
        </p>
        <Button>Chack Out</Button>
      </aside>
    </div>
  );
}

export default Cart;
