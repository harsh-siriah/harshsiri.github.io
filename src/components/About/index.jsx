import React from "react";
import { Col, Image, Stack } from "react-bootstrap";
import colors from "../../utils/colors";

function About() {
  return (
    <Stack gap={5} style={styles.container}>
      <h1 style={styles.heading}>ABOUT ME</h1>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      ></Col>
    </Stack>
  );
}

export default About;

const styles = {
  container: {
    justifyContent: "center",
    display: "flex",
    height: "100%",
    marginLeft: "130px",
    marginRight: "130px",
  },
  heading: {
    fontSize: "48px",
    color: colors.cadetBlue,
    width: "100%",
    textAlign: "center",
  },
  profImage: {
    height: "333px",
  },
  separator: {
    width: "80vw",
    height: "4px",
    backgroundColor: "#C4C4C4BF",
    borderRadius: "10px",
  },
  aboutText: {
    fontSize: "21px",
    color: colors.textColor,
  },
};
