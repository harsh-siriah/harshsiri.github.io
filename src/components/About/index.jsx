import React from "react";
import colors from "../../utils/colors";
import "./AboutScreen.css";
import EducationData from "./EducationData";

function About() {
  return (
    <div style={styles.container} key="About">
      <h1 style={styles.heading}>ABOUT ME</h1>

      <div className="education-box">
        <div className="year-cell-dotted-border" />
        <div className="year-cell-container">
          {EducationData.items.map((item, index) => {
            const currentItemData = EducationData.data[item];
            return (
              <div className="year-cell-content" key={currentItemData.id}>
                <div className="year-cell">
                  <p className="year-cell-text">{currentItemData.year}</p>
                </div>
                <div className="year-content-container">
                  <a
                    href={currentItemData.url}
                    className="institute-name-text"
                    target={"_blank"}
                  >
                    {currentItemData.name}
                  </a>
                  <p className="degree-text">{currentItemData.degree}</p>
                  <p className="content-text">{currentItemData.content}</p>
                </div>
              </div>
            );
          })}
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
  education: {
    width: "30%",
    marginTop: "10vh",
  },
};
