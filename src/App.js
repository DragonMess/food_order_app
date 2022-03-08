import React, { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import { useContext } from "react";
import CartContext from "./store/CartContext";

function App() {
  const { cartIsShowen, handleCartIsShowen, setCartIsShowen } =
    useContext(CartContext);

  useEffect(() => {
    console.log(cartIsShowen);
  }, [cartIsShowen]);

  return (
    <CartProvider>
      {/* {cartIsShowen && <Cart />} */}
      <Cart />
      {console.log(cartIsShowen)}
      {console.log(handleCartIsShowen)}
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
