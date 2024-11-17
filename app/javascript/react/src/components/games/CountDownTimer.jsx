import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const initialTime = 5000; // Start at 5000 ms (5 seconds)
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      // Only set the timer when the game is running
      timer = setInterval(() => {
        setTimeLeft((prevTime) => Math.max(prevTime - 10, 0)); // Decrease time by 10ms
      }, 10);
    } else if (!isRunning) {
      // Stop the timer when the game is paused
      clearInterval(timer);
    }

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, [isRunning, timeLeft]);

  const handleKeyDown = (event) => {
    if (event.code === 'Space') {
      event.preventDefault();
      setIsRunning((prev) => !prev); // Toggle timer state (start/pause)
    }

    // Only handle "Enter" when the timer is paused
    if (event.code === 'Enter' && !isRunning) {
      handleEnter(); // Submit score only if the game is paused
    }
  };

  const handleEnter = () => {
    event.preventDefault();
    if (!isRunning) {
      // Check that the game is paused
      // Set score based on current timeLeft
      //   setScore(formatTime(timeLeft)); // Pass the correct timeLeft value
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime); // Reset to initial time
    setScore(null); // Clear the score
    event.target.blur(); // Remove focus from the button
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
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsRunning(false); // Stop the timer when timeLeft reaches 0
    }
  });
  useEffect(() => {
    if (timeLeft != initialTime) {
      setScore(formatTime(timeLeft));
    }
  }, [timeLeft]);

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        backgroundColor: timeLeft === 0 ? 'red' : 'transparent',
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
      <p>
        Press <strong>Enter</strong> to submit your score (only when paused).
      </p>
      <button
        onClick={handleReset}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Reset
      </button>
      <h3>{score !== null ? `Score: ${score}` : ''}</h3>
    </div>
  );
};

export default CountdownTimer;
