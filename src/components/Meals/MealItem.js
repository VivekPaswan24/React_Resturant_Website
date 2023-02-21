import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {

const price=`$${props.price}`
  return (
    <li className={classes.meal}>
      <div>
        <h2>{props.name}</h2>
        <section className={classes.description}>{props.description}</section>
        <section className={classes.price}>{price}</section>
      </div>
      <div>
        <MealItemForm id={props.id}/>
      </div>
    </li>
  );
};

export default MealItem;
