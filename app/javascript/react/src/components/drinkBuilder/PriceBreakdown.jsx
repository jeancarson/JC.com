import React from 'react';
import { useHistory } from 'react-router-dom';
import './drink-styles.css';
import PintDisplay from './PintDisplay';

// props will be something like
/*
{
  coors: {quantity: 300, price: 3.60, color: 'gold'},
  budweiser: {quantity: 200, price: 4.00, color: 'red'}
}
*/
const PriceBreakdown = (props) => {
  const drinks = props.drinks;
  const increment = props.increment;
  const totalCapacity = props.totalCapacity;
  const history = useHistory();

  const handleCheckout = () => {
    history.push('/checkout', { drinks });
  };

  return (
    <div>
      <div className="pint-macros-container">
        <PintDisplay
          increment={increment}
          totalCapacity={totalCapacity}
          drinks={drinks}
        />
        <div className="buy-details-container">
          <p className="price-breakdown-title">
            Total: €
            {Object.keys(drinks)
              .reduce(
                (acc, drinkName) =>
                  acc + drinks[drinkName].price * drinks[drinkName].quantity,
                0
              )
              .toFixed(2)}
          </p>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
      <div className="price-breakdown-details">
        <p className="price-breakdown-title">Price Breakdown</p>
        {Object.keys(drinks).map((drinkName) => {
          const drink = drinks[drinkName];
          return (
            <div key={drinkName} className="price-breakdown-item">
              <p className="price-breakdown-name">{drinkName}</p>
              <p className="price-breakdown-price">
                €{(drink.price * drink.quantity).toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceBreakdown;
