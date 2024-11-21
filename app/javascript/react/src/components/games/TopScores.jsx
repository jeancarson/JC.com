import * as React from 'react';
import { useState, useEffect } from 'react';

const TopScores = ({ numberOfScores }) => {
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/count_down_game_scores')
      .then((response) => response.json())
      .then((data) => {
        setScores(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  const displayedScores = scores.slice(0, numberOfScores);

  return (
    <div
      className="container"
      style={{
        border: '4px solid black',
        padding: '30px',
      }}
    >
      <h1 className="text-center">Top {numberOfScores} Scores</h1>
      {isLoading && <p>Loading...</p>}
      <table className="table">
        <thead>
          <tr>
            <th>Initials</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {displayedScores.map((score) => (
            <tr key={score.id}>
              <td>{score.initials}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopScores;
