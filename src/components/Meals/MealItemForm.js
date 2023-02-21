import React from "react";
import classes from'./MealItemForm.module.css'
import Input from '../UI/Input/Input'

const MealItemForm=(props)=>{
    return <form>
        <div className={classes.form}>
        <Input  label='Amount' input={{
            type:'number',
            id:'amount' + props.id,
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button type="button">+ADD</button>
        </div>
    </form>
};

export default MealItemForm;