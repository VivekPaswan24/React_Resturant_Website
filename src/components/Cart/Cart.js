import React from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Modal>
      <div className={classes["cart-items"]}>Sushi</div>
      <div className={classes.total}>
        Total Amount
        <div>35.62</div>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Cancle</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
