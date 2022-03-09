import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import { useContext } from "react";
import CartContext from "./store/CartContext";

function App() {
  const { cartIsShowen, handleCartIsShowen } = useContext(CartContext);

  return (
    <CartProvider>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
