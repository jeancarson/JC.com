import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import '../../my-styles.css';

const GameCarosel = () => {
  return (
    <div className="flex-container-row">
      <CarolselElement
        title="Stop the clock"
        description="How close to 0 can ou stop the timer or will you be a LOSER"
        link="play"
        image="/images/clock-xxl.png"
        // image="<%= asset_path('the-banquet.png') %>"
      />
      <CarolselElement />
      <CarolselElement />
    </div>
  );
};

const CarolselElement = ({
  title = '',
  description = '',
  image = '',
  link = '',
}) => {
  return (
    <a href={link} className="card-link" style={{ textDecoration: 'none' }}>
      <div className="card1">
        <div className="card2">
          <div style={{ padding: '20px' }}>
            <div
              style={{
                justifyContent: 'center',
                display: 'flex',
                margin: '10px',
              }}
            >
              {image && <img src={image} alt={title} />}{' '}
            </div>
            <h3 style={{ color: 'white' }} className="adale-mono-font">
              {title}
            </h3>
            <p style={{ color: 'white' }} className="adale-mono-font">
              {description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default GameCarosel;

document.addEventListener('DOMContentLoaded', () => {
  const gameCaroselElement = document.getElementById('game-carosel');
  if (gameCaroselElement) {
    console.log('Found game carosel element');
    const gameCaroselRoot = ReactDOM.createRoot(gameCaroselElement);
    gameCaroselRoot.render(
      <React.StrictMode>
        <GameCarosel />
      </React.StrictMode>
    );
  } else {
    console.log("Can't find a game carosel element");
  }
});
