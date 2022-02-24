import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import { useContext } from "react";
import CartContext from "./store/cart-context";

function App() {
  const { cartIsShowen, handleCartIsShowen } = useContext(CartContext);

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
