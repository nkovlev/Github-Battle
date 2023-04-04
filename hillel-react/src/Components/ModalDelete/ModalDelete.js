import React from 'react';
import './ModalDelete.css';

function Modal(props) {
  const { title, message, onCancel, onConfirm } = props;

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onCancel}>No</button>
          <button onClick={onConfirm}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
