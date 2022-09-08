import React, { useMemo } from "react";
import "./Experience.css";

function ExperienceContentTab(props) {
  const {
    title = "React Native Developer",
    date = "Jun 2021",
    location = "Pune, India (Remote)",
    contentArray = ["Point 1", "Point 2"],
  } = props;

  const renderUnorderedList = useMemo(() => {
    return (
      <ul>
        {contentArray.map((item) => {
          return (
            <li
              style={styles.listItems}
              className="experience-content-tab-unordered-list-items"
            >
              {item}
            </li>
          );
        })}
      </ul>
    );
  }, [contentArray]);

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div style={styles.horizontalStack}>
        <p style={styles.pText}>{date}</p>
        <p style={styles.pText}>{location}</p>
      </div>
      <div>{renderUnorderedList}</div>
    </div>
  );
}

export default ExperienceContentTab;

const styles = {
  container: {
    padding: "20px",
  },
  horizontalStack: {
    display: "flex",
    justifyContent: "space-between",
  },
  pText: {
    textTransform: "capitalize",
  },
  listItems: {
    fontSize: "1.2em",
  },
};
