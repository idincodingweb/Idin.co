import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/VideoModal.css'; // Buat file CSS ini sesuai kebutuhan

const VideoModal = ({ show, handleClose, videoSrc }) => {
  return (
    <Modal show={show} onHide={handleClose} className="modal-video fade" centered>
      <Modal.Dialog>
        <Modal.Content className="rounded-0">
          <Modal.Header>
            <Modal.Title id="exampleModalLabel">Idin Code Video</Modal.Title>
            <Button variant="close" onClick={handleClose} aria-label="Close"></Button>
          </Modal.Header>
          <Modal.Body>
            <div className="ratio ratio-16x9">
              <iframe
                className="embed-responsive-item"
                src={videoSrc}
                allowFullScreen
                allowscriptaccess="always"
                allow="autoplay"
                title="Idin Code Video"
              ></iframe>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Dialog>
    </Modal>
  );
};

export default VideoModal;
