import * as React from 'react';
import './drink-styles.css';
import * as ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

import DrinkCard from './DrinkCard';

const DrinkMenu = (props) => {
  const totalCapacity = props.capacity === undefined ? 570 : props.capacity;
  const increment = props.increment === undefined ? 30 : props.increment;
  const [totalQuantity, setTotalQuantity] = useState(0);

  const handleAddQuantity = () => {
    setTotalQuantity((prevQuantity) =>
      Math.min(totalCapacity, prevQuantity + increment)
    );
    console.log('Total quantity: ', { totalQuantity });
  };

  const handleRemoveQuantity = () => {
    setTotalQuantity((prevQuantity) => Math.max(prevQuantity - increment, 0));
    console.log('Total quantity: ', { totalQuantity });
  };

  const [drinkList, setDrinkList] = useState([]);
  const drinksUrl = 'http://localhost:3000/api/v1/drinks';

  const fetchDrinks = () => {
    fetch(drinksUrl)
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
    <div className="drink-menu">
      <DrinkCard
        title="Mojito"
        description="A refreshing Cuban cocktail made with rum, lime, mint, and sugar."
        image="tequila.png"
        price={5}
        totalCapacity={totalCapacity}
        totalQuantity={totalQuantity}
        onAdd={handleAddQuantity}
        onRemove={handleRemoveQuantity}
        increment={increment}
      />
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
