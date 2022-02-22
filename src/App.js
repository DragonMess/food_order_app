import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShowen, setCartIsShowen] = useState(false);
  const handleCartIsShowen = () => {
    setCartIsShowen(!cartIsShowen);
  };
  return (
    <CartProvider>
      {cartIsShowen && <Cart handleCartIsShowen={handleCartIsShowen} />}
      <Header handleCartIsShowen={handleCartIsShowen} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
