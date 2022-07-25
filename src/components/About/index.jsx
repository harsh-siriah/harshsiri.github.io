import React from "react";
import { Stack } from "react-bootstrap";
import colors from "../../utils/colors";
import { education } from "../../assets";

function About() {
  return (
    <Stack gap={5} style={styles.container}>
      <h1 style={styles.heading}>ABOUT ME</h1>

      <img src={education} style={styles.education} alt="Education" />
    </Stack>
  );
}

export default React.memo(About);

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
  education: {
    width: "30%",
  },
};
