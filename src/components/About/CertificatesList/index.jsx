import "./certificatesList.css";
import React, { useCallback } from "react";
import { useListScrollHandler } from "../../../hooks/useListScrollHandler";
import CertificatesDataHelper from "./CertificatesData/CertificatesDataHelper";
import { Accordion } from "react-bootstrap";
import { isArray, isEmpty } from "lodash";
import UrlHelper from "../../../utils/UrlHelper";

function CertificateCell(props) {
  const { id, index } = props;
  const certificateData = CertificatesDataHelper.getCertificatesDataById(id);

  const { name, source, url: mainUrl } = certificateData;

  const content = certificateData?.content || [];

  const openMainCertificate = useCallback(() => {
    UrlHelper.openInNewTab(mainUrl);
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
          {isArray(content) && !isEmpty(content) ? (
            <div className="body-sub-heading-container">
              <div className="body-sub-heading-divider" />
              <p className="body-sub-heading-text">Included courses</p>
            </div>
          ) : null}
          {isArray(content) &&
            !isEmpty(content) &&
            content.map((_item, _index) => {
              return (
                <div className="certificates-cell-container" key={_index}>
                  <div className="certificates-cell-header-container">
                    <p className="certificates-cell-title">{_item?.name}</p>
                    <p className="certificates-cell-sub-title">
                      {_item?.source}
                    </p>
                    <div
                      className="view-certificate-button"
                      onClick={() => {
                        UrlHelper.openInNewTab(_item?.url);
                      }}
                    >
                      <p className="view-certificate-text">View Certificate </p>
                    </div>
                  </div>
                </div>
              );
            })}
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
      <div className="overflow-scroll-content">
        <Accordion>
          {CertificatesDataHelper.getCertificatesDataItemsList().map(
            (item, index) => {
              return <CertificateCell id={item} index={index} key={item} />;
            }
          )}
        </Accordion>
      </div>
    </div>
  );
}

export default React.memo(CertificatesList);
