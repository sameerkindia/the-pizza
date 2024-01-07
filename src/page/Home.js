import { useContext } from "react";
import PizzaCard from "../components/PizzaCard";
import CartContext from "../context/cartApi";

// import data1 from "../data";

function Home() {
  // const data = data1;
  const { state } = useContext(CartContext);
  return (
    <div className="m-5 grid grid-cols-4 gap-4">
      {state.data.map((item) => (
        <PizzaCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Home;
