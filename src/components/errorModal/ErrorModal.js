import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const ErrorModal = ({ error, setError }) => {
  const handleCloseModal = () => {
    setError('');
  };

  return (
    <Modal show={error} keyboard={false} backdrop='static' onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Sorry, this is a bit embarrassing, but looks like things got a bit messy here, please come
          back later.
        </p>
        <p>
          message: <span>{error}</span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
