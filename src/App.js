import "./index.css";

import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./page/Cart";
import Home from "./page/Home";
import { CartApi } from "./context/cartApi";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <CartApi>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartApi>
    </BrowserRouter>
  );
}

export default App;
