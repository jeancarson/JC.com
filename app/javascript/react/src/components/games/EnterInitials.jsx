import React, { useState, useRef, useEffect } from 'react';
import ServerSideError from '../ServerSIdeError';

const EnterInitials = ({ score, onClose }) => {
  const [isServerSideError, setIsServerSideError] = useState(false);
  const [serverSideErrors, setServerSideErrors] = useState([]);
  const inputRef = useRef(null);
  const [initials, setInitials] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true); // Ensure the modal is open when triggered

  const handleInputChange = (event) => {
    const value = event.target.value.toUpperCase().slice(0, 3);
    setInitials(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Initials:', initials);

    const response = await fetch('/count_down_game_scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document
          .querySelector('meta[name="csrf-token"]')
          .getAttribute('content'),
      },
      body: JSON.stringify({ initials, score }),
    });

    if (response.ok) {
      console.log('Score submitted successfully');
      setIsServerSideError(false);
      setServerSideErrors([]);
      window.location.reload();
      onClose();
    } else {
      const data = await response.json();
      setIsServerSideError(true);
      setServerSideErrors(data.errors || ['Failed to submit score']);
      console.error('Failed to submit score');
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus input when modal is shown
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              width: '90%',
              maxWidth: '500px',
              padding: '20px',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h1 style={{ margin: '0', fontSize: '1.5rem' }}>
                Enter your initials
              </h1>
              <button
                onClick={closeModal}
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                }}
              >
                &times;
              </button>
            </div>
            <div style={{ marginTop: '15px' }}>
              {isServerSideError && (
                <ServerSideError errors={serverSideErrors} />
              )}
              <p>Your score: {score}</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  maxLength="3"
                  style={{
                    textTransform: 'uppercase',
                    width: '100%',
                    padding: '8px',
                    fontSize: '1rem',
                    marginBottom: '15px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                  }}
                  onChange={handleInputChange}
                  placeholder="Enter initials"
                  ref={inputRef}
                />
                <div style={{ textAlign: 'right' }}>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    style={{
                      backgroundColor: '#007bff',
                      color: 'white',
                      padding: '10px 15px',
                      fontSize: '1rem',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EnterInitials;
