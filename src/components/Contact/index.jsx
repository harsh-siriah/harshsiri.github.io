import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="container">
      <Row>
        <Col>
          <form
            action="https://formsubmit.co/harshsiriah1@email.com"
            method="POST"
            className="form-container"
          >
            <div className="form-item">
              <label className="form-label">Email address</label>
              <input className="form-input" type="email" required />
            </div>
            <div className="form-item">
              <label className="form-label">Name</label>
              <input className="form-input" type="text" required />
            </div>
            <div className="form-item">
              <label className="form-label">Message</label>
              <textarea
                className="form-input form-input-message"
                type="text"
                required
              ></textarea>
            </div>
            <input type="submit" className="form-submit-button" />
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default React.memo(ContactPage);
