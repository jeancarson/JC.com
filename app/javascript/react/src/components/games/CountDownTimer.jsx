import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const initialTime = 5000;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => Math.max(prevTime - 10, 0));
      }, 10);
    } else if (!isRunning) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleKeyDown = (event) => {
    if (event.code === 'Space' && !isGameOver) {
      setIsRunning((prev) => !prev);
      setIsGameOver(true);
    }
  };
  useEffect(() => {
    console.log('isRunning state changed:', isRunning); // Logs when isRunning state changes
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
    event.target.blur();
  };

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const millis = milliseconds % 1000;
    return `${seconds}.${millis.toString().padStart(3, '0')}`;
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        backgroundColor: !isGameOver
          ? 'white'
          : timeLeft === 0
            ? 'red'
            : 'green',
        minHeight: '100vh',
        paddingTop: '20px',
        transition: 'background-color 0.1s ease',
      }}
    >
      <h1>Countdown Timer</h1>
      <h2>{formatTime(timeLeft)} seconds</h2>
      <p>
        Press the <strong>space bar</strong> to start/pause the timer.
      </p>
      <button
        onClick={handleReset}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Reset
      </button>
    </div>
  );
};

export default CountdownTimer;
