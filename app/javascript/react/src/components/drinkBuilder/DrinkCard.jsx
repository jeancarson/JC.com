import * as React from 'react';
import './drink-styles.css';
import Adder from './Adder';
import { useState } from 'react';

const DrinkCard = (props) => {
  const roundedPrice = (props.price * props.increment).toFixed(2);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div className="drink-card">
      <div className="drink-image-card">
        {props.image && (
          <img
            className="drink-image"
            src={`/images/${props.image}`}
            alt={props.title}
          />
        )}
      </div>
      <div className="drink-description-box">
        <h1 className="drink-title-text">
          {props.title} €{roundedPrice}/portion
        </h1>
        <p className="drink-description-text">{props.description}</p>
        {/* <p className="drink-price-text">Price: ${props.price}</p> */}
      </div>
      <Adder
        totalCapacity={props.totalCapacity}
        totalQuantity={props.totalQuantity}
        onAdd={props.onAdd}
        onRemove={props.onRemove}
        increment={props.increment}
        price={props.price}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      ></Adder>
    </div>
  );
};
export default DrinkCard;
