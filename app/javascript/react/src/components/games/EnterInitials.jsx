import React, { useEffect, useState, useRef } from 'react';
import { Modal } from 'bootstrap';
import ServerSideError from '../ServerSIdeError';

const EnterInitials = ({ score, onClose }) => {
  const [isServerSideError, setIsServerSideError] = useState(false);
  const [serverSideErrors, setServerSideErrors] = useState([]);
  const inputRef = useRef(null);
  const [initials, setInitials] = useState('');

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
    const modalElement = document.getElementById('exampleModal');
    const modal = new Modal(modalElement);

    modal.show();
    const handleModalShown = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    modalElement.addEventListener('shown.bs.modal', handleModalShown);

    const handleHidden = () => {
      onClose();
    };

    modalElement.addEventListener('hidden.bs.modal', handleHidden);

    return () => {
      modalElement.removeEventListener('shown.bs.modal', handleModalShown);
      modalElement.removeEventListener('hidden.bs.modal', handleHidden);
      modal.hide();
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) backdrop.remove();
    };
  }, [onClose]);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Enter your initials
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {isServerSideError && <ServerSideError errors={serverSideErrors} />}
            <p>Your score: {score}</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                maxLength="3"
                style={{ textTransform: 'uppercase' }}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter initials"
                ref={inputRef}
              />

              <div className="modal-footer">
                {/* <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Canc
            </button> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterInitials;
