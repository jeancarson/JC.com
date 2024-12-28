import React, { useState, useEffect } from 'react';
import EnterInitials from './EnterInitials';
import './count-down-game.css';
import '../../my-styles.css';

const CountdownTimer = () => {
  const initialTime = 5000; // Start at 5000 ms (5 seconds)
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(null);
  const [showInitials, setShowInitials] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => Math.max(prevTime - 10, 0)); // Decrease time by 10ms
      }, 10);
    }
    return () => clearInterval(timer); // Cleanup the interval on unmount or state change
  }, [isRunning, timeLeft]);

  const handleKeyDown = (event) => {
    if (event.code === 'Space') {
      event.preventDefault();
      if (isRunning) {
        // Pause the game
        setIsRunning(false);
        setIsGameOver(true);
        console.log('Paused the game');
      } else if (!isRunning && !isGameOver) {
        // Start the game
        setIsRunning(true);
        setIsGameOver(false);
        console.log('Started the game');
      }
    }

    if (event.code === 'Enter' && !isRunning && isGameOver) {
      event.preventDefault();
      handleEnter();
    }
  };

  const handleEnter = () => {
    if (isGameOver && timeLeft > 0) {
      setScore(formatTime(timeLeft)); // Set score based on current timeLeft
      console.log('Score submitted:', formatTime(timeLeft));
      setShowInitials(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime); // Reset to initial time
    setScore(null); // Clear the score
    setIsGameOver(false);
  };

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const millis = milliseconds % 1000;
    return `${seconds}.${millis.toString().padStart(3, '0')}`; // Format time
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown); // Cleanup event listener
    };
  }, [isRunning, isGameOver]); // Dependencies ensure the correct state is used

  useEffect(() => {
    if (timeLeft === 0) {
      setIsRunning(false);
      setIsGameOver(true); // Stop the timer when timeLeft reaches 0
    }
  }, [timeLeft]);

  const handleCloseModal = () => {
    setShowInitials(false);
  };
  useEffect(() => {
    if (score !== null) {
      console.log('Score updated:', score);
    }
  }, [score]);

  return (
    <div
      style={{
        border: '4px solid black',
        padding: '30px',
        textAlign: 'center',
        heigth: '50%',
        backgroundColor: !isGameOver
          ? 'rgba(245, 245, 245, 0.7)'
          : timeLeft === 0
            ? 'rgba(182, 39, 0, 0.7)'
            : 'rgba(1, 74, 22, 0.7)',
        minHeight: '50vh',
        paddingTop: '20px',
        transition: 'background-color 0.1s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5px',
        borderRadius: '30px 30px 0px 0px',
      }}
    >
      <h1
        className="adale-mono-font"
        style={{ color: isGameOver ? 'white' : 'black' }}
      >
        <strong>STOOOOP the timer as close to zero as possible!</strong>
      </h1>
      <h2
        className="adale-mono-font"
        style={{ color: isGameOver ? 'white' : 'black' }}
      >
        {formatTime(timeLeft)} seconds
      </h2>
      {!isGameOver ? (
        <p className="adale-mono-font">
          Press the <strong>space bar</strong> to start/pause the timer
        </p>
      ) : timeLeft === 0 ? (
        <p className="adale-mono-font" style={{ color: 'white' }}>
          YOU LOSE... LOSER
        </p>
      ) : (
        <p className="adale-mono-font" style={{ color: 'white' }}>
          Press <strong>Enter</strong> to submit your score.
        </p>
      )}

      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
      {showInitials && (
        <EnterInitials score={score} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CountdownTimer;
