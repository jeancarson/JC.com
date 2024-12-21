import * as React from 'react';
import { useState, useEffect } from 'react';
import './drink-styles.css';

const Adder = (props) => {
  const increment = props.increment !== undefined ? props.increment : 30;
  const [quantity, setQuantity] = useState(0);

  const removeQuantity = () => {
    if (quantity >= increment) {
      setQuantity(quantity - increment);
    } else {
      setQuantity(0);
    }
    props.onRemove();
  };

  const addQuantity = () => {
    if (props.totalQuantity + increment <= props.totalCapacity) {
      setQuantity(quantity + increment);
    }
    props.onAdd();
  };

  return (
    <div className="adder-holder">
      <button className="selection-button" onClick={removeQuantity}>
        -
      </button>
      <div className="quantity-display">
        <p className="quantity-display-text">{quantity}ml</p>
      </div>
      <button className="selection-button" onClick={addQuantity}>
        +
      </button>
    </div>
  );
};
export default Adder;
