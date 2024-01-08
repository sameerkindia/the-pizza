import CartContext from "../context/cartApi";
import Button from "./Button";
import { useContext, useState } from "react";

function PizzaCard({ item }) {
  const { dispatch, state } = useContext(CartContext);
  let isTrue = false;
  let quantityCount = 1;

  state.cart.forEach((el) => {
    if (el.id === item.id) {
      isTrue = true;
      quantityCount = el.quantity * 1;
    }
  });
  const [count, setCount] = useState(quantityCount);
  const [isAdd, setIsAdd] = useState(isTrue);

  const myOrder = {
    ...item,
    quantity: 1,
    total: item.price,
    isAdd: true,
  };

  function handleInc() {
    setCount((count) => count + 1);
    dispatch({ type: "INC", payload: item.id });
    dispatch({ type: "TOTAL" });
  }

  function handleDec() {
    if (count <= 1) {
      setIsAdd(false);
      dispatch({ type: "REMOVE", payload: item.id });
      dispatch({ type: "TOTAL" });
      return;
    }

    setCount((count) => count - 1);
    dispatch({ type: "DEC", payload: item.id });
    dispatch({ type: "TOTAL" });
  }

  function handleIsAdd() {
    setIsAdd(true);
    dispatch({ type: "ADD", payload: myOrder });
    dispatch({ type: "TOTAL" });
  }

  return (
    <div
      className=" bg-[#0F1035] flex flex-col justify-between rounded-xl overflow-hidden p-2 "
      id={item.id}
    >
      <div className="w-full h-52 bg-white rounded-md">
        <img
          className="o object-cover w-full h-full rounded-t-md rounded-tl-md"
          src={item.img_url}
          alt="pizza"
        />
      </div>
      <div className=" py-1.5 px-3 text-white font-samibold">
        <p className="text-2xl  text-center font-medium">{item.name}</p>
        <p>Price : {item.price}</p>

        <div className="flex justify-evenly text-2xl mt-4 mb-2">
          {!isAdd && <Button onClick={handleIsAdd}>Add To Cart</Button>}

          {isAdd && (
            <div className="flex flex-row w-full items-center">
              <Button onClick={handleDec}>-</Button>
              <span className="block w-full text-center">{count}</span>
              <Button onClick={handleInc}>+</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;
