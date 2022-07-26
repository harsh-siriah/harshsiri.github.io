import React from "react";
import { Stack } from "react-bootstrap";
import colors from "../../utils/colors";
import { education } from "../../assets";

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>ABOUT ME</h1>

      <img src={education} style={styles.education} alt="Education" />
    </div>
  );
}

export default React.memo(About);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
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
  education: {
    width: "30%",
    marginTop: "10vh",
  },
};
