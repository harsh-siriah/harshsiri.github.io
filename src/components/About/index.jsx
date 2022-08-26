import React from "react";
import colors from "../../utils/colors";
import "./AboutScreen.css";
import CertificatesList from "./CertificatesList";
import EducationBox from "./EducationBox";

function About() {
  return (
    <div style={styles.container} key="About">
      <h1 style={styles.heading}>ABOUT ME</h1>
      <div className="content">
        <div>
          <h3 className="sub-headings">Education</h3>
          <EducationBox />
        </div>
        <div>
          <h3 className="sub-headings">Ceritificates</h3>
          <CertificatesList />
        </div>
      </div>
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
};
