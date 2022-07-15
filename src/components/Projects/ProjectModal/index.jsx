import React, { useEffect, useCallback, useState } from "react";
import Modal from "react-bootstrap/Modal";
import EventTypes from "../../../services/LocalEvent/EventTypes";
import { AndroidLogoSvg } from "../../../assets";
import { LocalEvent } from "../../../services/LocalEvent/LocalEvent";
import "./projectModal.css";
import colors from "../../../utils/colors";
import { useMemo } from "react";

const petronusImage = require("../../../assets/petronus_logo.png");

function ProjectModal(props) {
  const { projectId } = props;

  const technologies = [AndroidLogoSvg, AndroidLogoSvg];

  const sections = [
    {
      title: "Section Title",
      content: "This is the content",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const onShow = useCallback((projectId) => {
    setShowModal(true);
  }, []);

  const hideModal = useCallback((projectId) => {
    setShowModal(false);
  }, []);

  LocalEvent.on(EventTypes.ProjectModal.Show, onShow);

  useEffect(() => {
    return () => {
      LocalEvent.off(EventTypes.ProjectModal.Show, onShow);
    };
  }, []);

  const maxContentStyle = useMemo(
    () => ({ height: "max-content", width: "max-content" }),
    []
  );

  return (
    <Modal
      centered
      fullscreen="sm-down"
      show={showModal}
      onHide={hideModal}
      dialogClassName="modal-90w"
      size="xl"
    >
      <div className="modal-body-style">
        <div style={maxContentStyle}>
          <h1 className="project-title">PETronus</h1>
        </div>
        <div className="technologies" style={maxContentStyle}>
          {technologies && technologies.length > 0
            ? technologies?.map((Item) => {
                return (
                  <Item
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                    fill={colors.cadetBlue}
                  />
                );
              })
            : null}
        </div>
        <div className="modal-content-text">
          <div className="summary">
            <h5 className="summary-text">This is the summary</h5>
          </div>
          <div className="sections">
            {sections.map((section) => {
              return (
                <div>
                  <h4 className="section-title">{section.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectModal;
