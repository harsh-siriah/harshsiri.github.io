import React, { useMemo } from "react";
import { Stack } from "react-bootstrap";
import colors from "../../utils/colors";

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
          return <li style={styles.listItems}>{item}</li>;
        })}
      </ul>
    );
  }, [contentArray]);

  return (
    <Stack style={styles.container}>
      <h1>{title}</h1>
      <Stack direction="horizontal" style={styles.horizontalStack}>
        <p style={styles.pText}>{date}</p>
        <p style={styles.pText}>{location}</p>
      </Stack>
      {renderUnorderedList}
    </Stack>
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
    color: colors.white,
  },
};