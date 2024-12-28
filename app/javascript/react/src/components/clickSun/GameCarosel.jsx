import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './game-carosel-styles.css';
import '../../my-styles.css';

const GameCarosel = () => {
  return (
    <div className="flex-container-row">
      <CaroselElement
        title="Stop the clock"
        description="How close to 0 can you stop the timer or will you be a LOSER??"
        link="play"
        image="/images/clock-xxl.png"
      />{' '}
      <CaroselElement
        title="Drink builder"
        description="Create a drink for me! If you purchase it I will actually order it!"
        link="drinkUP"
        image="/images/drink-icon.png"
      />
      <CaroselElement
        title="View my CV"
        description="This isn't a game :( but while I'm making more you can read about what I've been doing"
        link="serious"
        image="/images/cv.png"
      />
    </div>
  );
};

const CaroselElement = ({
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
              {image && (
                <img
                  src={image}
                  alt={title}
                  style={{ height: '50%', width: '50%' }}
                />
              )}{' '}
            </div>
            <h3 className="adale-mono-font title">{title}</h3>
            <p className="adale-mono-font description">{description}</p>
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
