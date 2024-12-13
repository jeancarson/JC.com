import React from 'react';
import CountdownTimer from './CountDownTimer';
import * as ReactDOM from 'react-dom/client';
import TopScores from './TopScores';
import './count-down-game.css';

const GameHolder = () => {
  return (
    <div className="game-holder">
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
