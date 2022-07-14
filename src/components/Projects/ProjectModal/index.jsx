import React, { useEffect, useCallback, useState } from "react";
import Modal from "react-bootstrap/Modal";
import EventTypes from "../../../services/LocalEvent/EventTypes";
import { LocalEvent } from "../../../services/LocalEvent/LocalEvent";

const petronusImage = require("../../../assets/petronus_logo.png");

function ProjectModal(props) {
  const { projectId } = props;

  const [showModal, setShowModal] = useState(false);

  const onShow = useCallback((projectId) => {
    console.log("Showing modal!");
    setShowModal(true);
  }, []);

  LocalEvent.on(EventTypes.ProjectModal.Show, onShow);

  useEffect(() => {
    return () => {
      LocalEvent.off(EventTypes.ProjectModal.Show, onShow);
    };
  }, []);

  return (
    <Modal
      centered
      fullscreen="sm-down"
      show={showModal}
      onHide={() => {
        setShowModal(false);
      }}
      dialogClassName="modal-90w"
      // backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Project Name</Modal.Title>
        <img src={petronusImage} className="main_image" />
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    </Modal>
  );
}

export default ProjectModal;
