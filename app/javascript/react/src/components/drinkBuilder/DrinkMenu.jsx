import * as React from 'react';
import './drink-styles.css';
import * as ReactDOM from 'react-dom/client';
import { useState } from 'react';

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
  return (
    <div className="drink-menu">
      <DrinkCard
        title="Mojito"
        description="A refreshing Cuban cocktail made with rum, lime, mint, and sugar."
        image="tequila.png"
        totalCapacity={totalCapacity}
        totalQuantity={totalQuantity}
        onAdd={handleAddQuantity}
        onRemove={handleRemoveQuantity}
        increment={increment}
      />
      <DrinkCard
        title="Old Fashione"
        description="A classic cocktail made with bourbon, sugar, bitters, and a twi."
        image="orange-juice.png"
        totalCapacity={totalCapacity}
        totalQuantity={totalQuantity}
        onAdd={handleAddQuantity}
        onRemove={handleRemoveQuantity}
        increment={increment}
      />
      <DrinkCard
        title="Margarita"
        description="A popular Mexican cocktail made with tequila, lime, and orange liqueur."
        image="tullamore-dew.jpg"
      />
      <DrinkCard
        title="Margarita"
        description="A popular Mexican cocktail made with tequila, lime, and orange liqueur."
        image="coors.jpg"
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
