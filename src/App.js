import "./index.css";

import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./page/Cart";
import Home from "./page/Home";
import { CartApi } from "./context/cartApi";

function App() {
  // return <Header />;
  return (
    <BrowserRouter>
      <Header />
      <CartApi>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartApi>
    </BrowserRouter>
  );
}

export default App;
