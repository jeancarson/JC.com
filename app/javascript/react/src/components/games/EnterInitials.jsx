import React, { useEffect } from 'react';
import { Modal } from 'bootstrap';

const EnterInitials = ({ onClose }) => {
  useEffect(() => {
    const modalElement = document.getElementById('exampleModal');
    const modal = new Modal(modalElement);

    modal.show();

    const handleHidden = () => {
      onClose();
    };

    modalElement.addEventListener('hidden.bs.modal', handleHidden);

    return () => {
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
            <input
              type="text"
              maxLength="3"
              style={{ textTransform: 'uppercase' }}
              className="form-control"
              placeholder="Enter initials"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterInitials;
