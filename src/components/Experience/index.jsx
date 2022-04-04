import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import colors from "../../utils/colors";

function Experience() {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        {/* <div style={styles.separator} /> */}
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="firstItem">Tab 1</Nav.Link>
                  <Nav.Link eventKey="secondItem">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="firstItem">
                  Hello, my name is harsh.
                </Tab.Pane>
                <Tab.Pane eventKey="secondItem">NOPE NEOPE NOPE.</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}

export default Experience;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  box: {
    height: "475px",
    width: "900px",
    borderColor: "#B5BEBE",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "20px",
  },
  separator: {
    height: "100%",
    width: "1px",
    borderColor: "#B5BEBE",
    borderWidth: "0.5px",
    borderStyle: "solid",
    marginLeft: "220px",
  },
};
