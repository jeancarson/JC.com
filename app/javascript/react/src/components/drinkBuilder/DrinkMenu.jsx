import * as React from 'react';
import './drink-styles.css';
import * as ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import PriceBreakdown from './PriceBreakdown';

import DrinkCard from './DrinkCard';

const DrinkMenu = (props) => {
  const totalCapacity = props.capacity === undefined ? 570 : props.capacity;

  const increment = props.increment === undefined ? 30 : props.increment;
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [drinkList, setDrinkList] = useState([]);
  const [drinks, setDrinks] = useState({});

  useEffect(() => {
    setTotalQuantity(
      Object.values(drinks).reduce((total, drink) => total + drink.quantity, 0)
    );
  }, [drinks]);

  const handleAddQuantity = (drinkName, price, color) => {
    const currentTotalQuantity = Object.values(drinks).reduce(
      (total, drink) => total + drink.quantity,
      0
    );

    if (currentTotalQuantity + increment > totalCapacity) {
      alert('The glass is full! You cannot add more drinks.');
      return;
    }
    if (currentTotalQuantity + increment <= totalCapacity) {
      totalQuantity + increment;
      setDrinks((prevDrinks) => ({
        ...prevDrinks,
        [drinkName]: {
          quantity: (prevDrinks[drinkName]?.quantity || 0) + increment,
          price,
          color,
        },
      }));
    }

    console.log('Current Total Quantity:', currentTotalQuantity);
    console.log('Total Capacity:', totalCapacity);
    console.log('Increment:', increment);
  };
  useEffect(() => {
    console.log('Updated drinks:', drinks);
  }, [drinks]);

  const handleRemoveQuantity = (drinkName) => {
    setTotalQuantity((prevQuantity) => Math.max(prevQuantity - increment, 0));
    setDrinks((prevDrinks) => {
      const newQuantity = Math.max(
        (prevDrinks[drinkName]?.quantity || 0) - increment,
        0
      );
      if (newQuantity === 0) {
        const { [drinkName]: _, ...rest } = prevDrinks;
        return rest;
      }
      return {
        ...prevDrinks,
        [drinkName]: {
          ...prevDrinks[drinkName],
          quantity: newQuantity,
        },
      };
    });
    console.log('drinkss ', { drinks });
  };

  // const drinksUrl = 'http://localhost:8080/api/v1/drinks';

  const fetchDrinks = () => {
    fetch('/api/v1/drinks')
      .then((response) => response.json())
      .then((data) => {
        setDrinkList(data);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <div className="drink-builder-container">
      <div className="drink-menu">
        {drinkList.length > 0 ? (
          drinkList.map((drink) => (
            <DrinkCard
              key={drink.id}
              title={drink.name}
              description={drink.description}
              image={drink.imagepath}
              price={drink.priceml}
              totalCapacity={totalCapacity}
              totalQuantity={totalQuantity}
              onAdd={() =>
                handleAddQuantity(drink.name, drink.priceml, drink.color)
              }
              onRemove={() => handleRemoveQuantity(drink.name)}
              increment={increment}
            />
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
      <div className="price-breakdown-container" id="price-breakdown">
        <PriceBreakdown
          drinks={drinks}
          totalCapacity={totalCapacity}
          increment={increment}
        />
      </div>
    </div>
  );
};

export default DrinkMenu;

document.addEventListener('DOMContentLoaded', () => {
  const drinkMenuElement = document.getElementById('drink-menu');
  if (drinkMenuElement) {
    console.log('Found drink menu element');
    const drinkMenuRoot = ReactDOM.createRoot(drinkMenuElement);
    drinkMenuRoot.render(
      <React.StrictMode>
        <DrinkMenu />
      </React.StrictMode>
    );
  }
});
