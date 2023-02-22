import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
   const cartCtx=useContext(CartContext);
   const filteredMealItemName=Array.from(cartCtx.items.reduce((map,item)=>map.set(item.id,item),new Map()).values());
   const mealItemName=filteredMealItemName.map((item)=>{
    return <li key={item.id}>{item.name}</li>
   })
   console.log(mealItemName)
  return (
    <Modal onClick={props.onClose}>
      <div>
        <ul className={classes["cart-items"]}>
          {mealItemName}
        </ul>
      </div>
      <div className={classes.total}>
        Total Amount
        <div>35.62</div>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Cancle</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
