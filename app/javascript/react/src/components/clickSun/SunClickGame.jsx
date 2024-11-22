import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './SunClickGame.css';
import Sun from './Sun';

const SunClickGame = () => {
  const sunClickGameElement = document.getElementById(
    'sun-click-game-container'
  );
  const backgroundImage = sunClickGameElement.dataset.backgroundImage;

  console.log('Rendering SunClickGame');
  return (
    <div
      className="sun-click-game"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Sun />
      <h1>playyyy!</h1>
    </div>
  );
};
export default SunClickGame;

document.addEventListener('DOMContentLoaded', () => {
  const sunClickGameElement = document.getElementById(
    'sun-click-game-container'
  );
  if (sunClickGameElement) {
    console.log('Found sun click game element');
    const sunClickGameRoot = ReactDOM.createRoot(sunClickGameElement);
    sunClickGameRoot.render(
      <React.StrictMode>
        <div>
          <h1>Click the sun!</h1>
        </div>
        <SunClickGame />
      </React.StrictMode>
    );
  } else {
    console.log("Can't find a sun click game element");
  }
});
