import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Yout Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
