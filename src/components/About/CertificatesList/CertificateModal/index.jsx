import React, { useEffect, useCallback, useState } from "react";
import Modal from "react-bootstrap/Modal";
import EventTypes from "../../../../services/LocalEvent/EventTypes";
import { LocalEvent } from "../../../../services/LocalEvent/LocalEvent";
import "./certificateModal.css";
import CertificatesDataHelper, {
  CertificatesDataKeys,
} from "../CertificatesData/CertificatesDataHelper";
import Accordion from "react-bootstrap/Accordion";

function CertificateModal() {
  const [showModal, setShowModal] = useState(false);
  const [currentCertificateData, setCurrentCertificateData] = useState(null);

  const onShow = useCallback((certificateId) => {
    setCurrentCertificateData(
      CertificatesDataHelper.getCertificatesDataById(certificateId)
    );

    setShowModal(true);
  }, []);

  const hideModal = useCallback(() => {
    setShowModal(false);

    setCurrentCertificateData(null);
  }, []);

  useEffect(() => {
    LocalEvent.on(EventTypes.CertificateModal.Show, onShow);
    return () => {
      LocalEvent.off(EventTypes.CertificateModal.Show, onShow);
    };
  }, []);

  return (
    <Modal
      centered
      fullscreen="sm-down"
      show={showModal}
      onHide={hideModal}
      dialogClassName="modal-100w"
      size="lg"
    >
      {currentCertificateData && showModal ? (
        <div className="modal-body-style">
          <p className="project-title">
            {currentCertificateData[CertificatesDataKeys.Name]}
          </p>
          <p className="source-text">
            {currentCertificateData[CertificatesDataKeys.Source]}
          </p>
        </div>
      ) : null}
    </Modal>
  );
}

export default CertificateModal;
