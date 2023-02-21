import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {

const price=`$${props.price}`
  return (
    <li className={classes.meal}>
      <div>
        <h2>{props.name}</h2>
        <section className={classes.description}>{props.description}</section>
        <section className={classes.price}>{price}</section>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;