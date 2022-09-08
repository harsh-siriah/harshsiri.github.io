import React, { useEffect, useCallback, useState } from "react";
import Modal from "react-bootstrap/Modal";
import EventTypes from "../../../services/LocalEvent/EventTypes";
import { LocalEvent } from "../../../services/LocalEvent/LocalEvent";
import "./projectModal.css";
import colors from "../../../utils/colors";
import { useMemo } from "react";
import { ProjectDataHelper, ProjectModalDataKeys } from "./projectDataHelper";
import technologyAssets from "../../../assets/technologyAssets";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { TechnologyNameMap } from "../../../constants/TechnologyNames";
import UrlHelper from "../../../utils/UrlHelper";

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

  const renderTechnologies = useMemo(() => {
    return currentProjectData?.[ProjectModalDataKeys.technologies] &&
      currentProjectData?.[ProjectModalDataKeys.technologies].length > 0
      ? currentProjectData?.[ProjectModalDataKeys.technologies]?.map((item) => {
          const technologyName = TechnologyNameMap[item];
          const Technology = technologyAssets?.[item];
          return (
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="button-tooltip">{technologyName}</Tooltip>}
            >
              <Technology
                style={{
                  height: "40px",
                  width: "40px",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
                fill={colors.cadetBlue}
              />
            </OverlayTrigger>
          );
        })
      : null;
  }, [currentProjectData]);

  const renderCheckItOutSection = useMemo(() => {
    return currentProjectData?.[ProjectModalDataKeys.projectCheckItOut] &&
      currentProjectData?.[ProjectModalDataKeys.projectCheckItOut].length >
        0 ? (
      <div>
        <div className="project-modal-separator" />
        <div className="project-check-it-out-container">
          <p className="project-check-it-out-text">Check it out: </p>
          {currentProjectData?.[ProjectModalDataKeys.projectCheckItOut]?.map(
            (item) => {
              const projectUrl = item.url;
              const Technology = technologyAssets?.[item.technology];
              return (
                <div
                  className="project-check-it-out-item"
                  onClick={() => {
                    UrlHelper.openInNewTab(projectUrl);
                  }}
                >
                  <Technology
                    style={{
                      height: "25px",
                      width: "25px",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                    fill={colors.cadetBlue}
                    key={projectUrl}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    ) : null;
  }, [currentProjectData]);

  return (
    <Modal
      centered
      fullscreen="sm-down"
      show={showModal}
      onHide={hideModal}
      dialogClassName="modal-100w"
      size="xl"
    >
      {currentProjectData && showModal ? (
        <div className="modal-body-style">
          <div style={maxContentStyle}>
            <h1 className="project-title">
              {currentProjectData?.[ProjectModalDataKeys.title]}
            </h1>
            {currentProjectData?.[ProjectModalDataKeys.subtitle] ? (
              <p className="project-sub-title">
                {currentProjectData?.[ProjectModalDataKeys.subtitle]}
              </p>
            ) : null}
          </div>
          <div className="project-modal-technologies" style={maxContentStyle}>
            {renderTechnologies}
          </div>
          {renderCheckItOutSection}
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
