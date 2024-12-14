import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './sun-click-game.css';
import Sun from './Sun';
import '../../my-styles.css';

const SunClickGame = () => {
  const containerRef = React.useRef(null); // Correctly reference the container
  const sunClickGameElement = document.getElementById(
    'sun-click-game-container'
  );
  const backgroundImage = sunClickGameElement.dataset.backgroundImage;
  return (
    <div>
      <div
        ref={containerRef}
        id="sun-click-game-container"
        className="sun-click-game"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Set the background image from the data attribute
          marginBottom: '20vh',
        }}
      >
        <div className="sun-click-game-content">
          <Sun containerRef={containerRef} />{' '}
          {/* Pass ref to the Sun component */}
        </div>
      </div>
      <div className="card1">
        <div className="card2"></div>
      </div>
      <h1 className="adale-mono-font" style={{ color: 'white' }}>
        Click the sun!
      </h1>
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
          <p className="adale-mono-font" style={{ color: 'white' }}>
            Click the sun!
          </p>
        </div>
        <SunClickGame />
      </React.StrictMode>
    );
  } else {
    console.log("Can't find a sun click game element");
  }
});
