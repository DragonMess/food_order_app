import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const { items, cartIsShowen, handleCartIsShowen } = useContext(CartContext);

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  console.log(numberOfCartItems);

  const handleCart = () => {
    handleCartIsShowen();
  };

  return (
    <button className={classes.button} onClick={handleCartIsShowen}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Yout Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
