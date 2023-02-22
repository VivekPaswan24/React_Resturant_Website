import React, { useContext } from "react";
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfItemAddedInCart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + Number(item.quantity);
  }, 0);

  return (
    <button className={classes.button} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItemAddedInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
