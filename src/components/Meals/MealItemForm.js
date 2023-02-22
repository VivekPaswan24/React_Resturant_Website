import React, { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input/Input";
import CartContext from "../../store/cart-context";

const MealItemForm = (props) => {
  const cartCtx=useContext(CartContext);

  const mealAddToCartHandler=()=>{
    const quantity=document.getElementById("amount" + props.id).value
    cartCtx.addItem({...props.item,quantity:quantity})
  }
  return (
    <form>
      <div className={classes.form}>
        <Input
          label="Amount"
          input={{
            type: "number",
            id: "amount" + props.id,
            min: "1",
            max: "5",
            step: "1",
            defaultValue:'1'
          }}
        />
        <button type="button" onClick={mealAddToCartHandler}>+ADD</button>
      </div>
    </form>
  );
};

export default MealItemForm;
