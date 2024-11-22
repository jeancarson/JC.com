import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './SunClickGame.css';
import Sun from './Sun';

const SunClickGame = () => {
  const containerRef = React.useRef(null); // Correctly reference the container
  const sunClickGameElement = document.getElementById(
    'sun-click-game-container'
  );
  const backgroundImage = sunClickGameElement.dataset.backgroundImage;
  return (
    <div
      ref={containerRef}
      id="sun-click-game-container"
      className="sun-click-game"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image from the data attribute
      }}
    >
      <div className="sun-click-game-content">
        <Sun containerRef={containerRef} />{' '}
        {/* Pass ref to the Sun component */}
      </div>
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
