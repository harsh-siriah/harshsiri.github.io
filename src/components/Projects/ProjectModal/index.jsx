import React, { useEffect, useCallback, useState } from "react";
import Modal from "react-bootstrap/Modal";
import EventTypes from "../../../services/LocalEvent/EventTypes";
import { AndroidLogoSvg } from "../../../assets";
import { LocalEvent } from "../../../services/LocalEvent/LocalEvent";
import "./projectModal.css";
import colors from "../../../utils/colors";
import { useMemo } from "react";
import { ProjectDataHelper, ProjectModalDataKeys } from "./projectDataHelper";
import technologyAssets from "../../../assets/technologyAssets";

function ProjectModal() {
  const [showModal, setShowModal] = useState(false);
  const [currentProjectData, setCurrentProjectData] = useState(null);

  const onShow = useCallback((projectId) => {
    setCurrentProjectData(ProjectDataHelper.getProjectModalData(projectId));

    setShowModal(true);
  }, []);

  const hideModal = useCallback(() => {
    setShowModal(false);

    setCurrentProjectData(null);
  }, []);

  useEffect(() => {
    LocalEvent.on(EventTypes.ProjectModal.Show, onShow);
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
      {currentProjectData && showModal ? (
        <div className="modal-body-style">
          <div style={maxContentStyle}>
            <h1 className="project-title">
              {currentProjectData?.[ProjectModalDataKeys.title]}
            </h1>
          </div>
          <div className="technologies" style={maxContentStyle}>
            {currentProjectData?.[ProjectModalDataKeys.technologies] &&
            currentProjectData?.[ProjectModalDataKeys.technologies].length > 0
              ? currentProjectData?.[ProjectModalDataKeys.technologies]?.map(
                  (item) => {
                    const Technology = technologyAssets?.[item];
                    return (
                      <Technology
                        style={{
                          height: "40px",
                          width: "40px",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                        fill={colors.cadetBlue}
                      />
                    );
                  }
                )
              : null}
          </div>
          <div className="modal-content-text">
            <div className="summary">
              <h5 className="summary-text">
                {currentProjectData?.[ProjectModalDataKeys.summary]}
              </h5>
            </div>
            <div className="sections">
              {currentProjectData?.[ProjectModalDataKeys.content].map(
                (section) => {
                  return (
                    <div>
                      <h4 className="section-title">{section.title}</h4>
                      {section.content}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}

export default ProjectModal;
