import React from 'react';
import classes from './Order.css';

const order = (props) => {
    const ingredients =[];
    for (let IngredientName in props.ingredients) {
        ingredients.push({
            name: IngredientName,
            amount: props.ingredients[IngredientName]
        });
    }
    const ingredientOutput = ingredients.map(igkey => {
        return <span 
        key={igkey.name}
        style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'}}>{igkey.name} ({igkey.amount})</span>;
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );

};

export default order;