import "./certificatesList.css";
import React, { useCallback } from "react";
import { useListScrollHandler } from "../../../hooks/useListScrollHandler";
import CertificatesDataHelper from "./CertificatesData/CertificatesDataHelper";
import { Accordion } from "react-bootstrap";

function CertificateCell(props) {
  const { id, index } = props;
  const {
    name,
    source,
    url: mainUrl,
  } = CertificatesDataHelper.getCertificatesDataById(id);

  const openInNewTab = useCallback((url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const openMainCertificate = useCallback(() => {
    openInNewTab(mainUrl);
  }, [mainUrl]);

  return (
    <Accordion.Item eventKey={index} bsPrefix="certificates-cell-container">
      <Accordion.Header>
        <div className="certificates-cell-header-container">
          <p className="certificates-cell-title">{name}</p>
          <p className="certificates-cell-sub-title">{source}</p>
        </div>
      </Accordion.Header>
      {CertificatesDataHelper.doesMainCertificateExist(id) ? (
        <Accordion.Body>
          <div
            className="view-certificate-button"
            onClick={openMainCertificate}
          >
            <p className="view-certificate-text">View Certificate </p>
          </div>
          <p className="body-sub-heading-text">Included courses</p>
          {}
        </Accordion.Body>
      ) : null}
    </Accordion.Item>
  );
}

function CertificatesList() {
  const { onMouseEnter, onMouseLeave } = useListScrollHandler();

  return (
    <div
      className="certificates-list"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Accordion>
        {CertificatesDataHelper.getCertificatesDataItemsList().map(
          (item, index) => {
            return <CertificateCell id={item} index={index} />;
          }
        )}
      </Accordion>
    </div>
  );
}

export default React.memo(CertificatesList);
