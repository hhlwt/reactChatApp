import React, { useState } from 'react';
import { Button, Modal, Dropdown } from 'react-bootstrap';

const DeleteChannel = ({id, socket}) => {
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalShow(false)
    alert('Deleted!')
  }

  return (
    <>
    <Dropdown.Item href="#" onClick={() => setModalShow(true)}>Delete</Dropdown.Item>
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="m"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-light">
          Delete channel
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{'color':'white'}} className="mb-0">Are you sure?</p>
          <div className="d-flex justify-content-end">
            <Button className="me-2" onClick={() => setModalShow(false)} variant="dark">Cancel</Button>
            <Button type="submit" onClick={handleSubmit} variant="dark">Submit</Button>
          </div>
      </Modal.Body>
    </Modal>
    </>
  );
};

export default DeleteChannel;