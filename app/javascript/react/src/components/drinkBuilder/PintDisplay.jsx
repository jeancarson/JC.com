import * as React from 'react';
import './drink-styles.css';

const PintDisplay = (props) => {
  const drinks = props.drinks;
  const totalUnits = Math.ceil(props.totalCapacity / props.increment);
  const increment = props.increment;
  const drinkStripes = [];

  Object.keys(drinks).forEach((drinkName) => {
    const drink = drinks[drinkName];
    const units = Math.ceil(drink.quantity / increment);
    for (let i = 0; i < units; i++) {
      drinkStripes.push(drink.color);
    }
  });

  const whiteSpace = totalUnits - drinkStripes.length;
  for (let i = 0; i < whiteSpace; i++) {
    drinkStripes.push('#8fdbf5');
  }

  const cappedStripes = drinkStripes.slice(0, totalUnits);
  const maskUrl = '/images/pint-glass-cutout.png';
  return (
    <div className="pint-display-container">
      {/* some STRIPES!!! */}
      <div className="pint-stripes">
        {cappedStripes.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: '100%',
              height: `${100 / totalUnits}%`,
            }}
          ></div>
        ))}
      </div>
      <div
        className="pint-mask"
        style={{
          WebkitMaskImage: `url(${maskUrl})`,
          maskImage: `url(${maskUrl})`,
          backgroundColor: 'white',
        }}
      ></div>
    </div>
  );
};

export default PintDisplay;
