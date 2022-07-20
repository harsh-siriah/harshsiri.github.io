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
          >
            <Col>
              <label className="form-label">Email address</label>
              <input className="form-input" type="email" />
            </Col>
            <Col>
              <label className="form-label">Name</label>
              <input className="form-input" type="text" />
            </Col>
          </form>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default React.memo(ContactPage);
