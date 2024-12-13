import * as React from 'react';
import { useState, useEffect } from 'react';
import '../../my-styles.css';

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
        heighth: '50%',
        borderRadius: '0px 0px 30px 30px',
        justifyContent: 'center',
        // alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#7c8980',
      }}
    >
      <h1 className="text-center adale-mono-font">
        Top {numberOfScores} Scores
      </h1>
      {isLoading && <p>Loading...</p>}
      <table
        className="table"
        style={{ borderCollapse: 'collapse', width: '100%' }}
      >
        <thead style={{ textAlign: 'center', borderBottom: '2px solid black' }}>
          <tr>
            <th
              className="adale-mono-font"
              style={{ border: '1px solid black' }}
            >
              Initials
            </th>
            <th
              className="adale-mono-font"
              style={{ border: '1px solid black' }}
            >
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedScores.map((score) => (
            <tr key={score.id}>
              <td
                className="adale-mono-font"
                style={{ border: '1px solid black' }}
              >
                {score.initials}
              </td>
              <td
                className="adale-mono-font"
                style={{ border: '1px solid black' }}
              >
                {score.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopScores;
