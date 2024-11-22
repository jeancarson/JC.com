import React from 'react';
import CountdownTimer from './CountDownTimer';
import * as ReactDOM from 'react-dom/client';
import TopScores from './TopScores';

const GameHolder = () => {
  return (
    <div style={{ border: '10px solid black', padding: '30px' }}>
      <h1 style={{ color: 'red', textAlign: 'center' }}>
        Play my game AHHHHHHHHH!!
      </h1>
      <CountdownTimer />

      <TopScores numberOfScores={5} />
    </div>
  );
};

export default GameHolder;

const gameHolderElement = document.getElementById('game-holder');
if (gameHolderElement) {
  const gameHolderRoot = ReactDOM.createRoot(
    document.getElementById('game-holder')
  );
  gameHolderRoot.render(
    <React.StrictMode>
      <GameHolder />
    </React.StrictMode>
  );
}
