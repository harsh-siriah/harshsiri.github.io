import React from "react";
import { Image, Stack } from "react-bootstrap";
import colors from "../../utils/colors";
import copyTexts from "../../utils/copyTexts";
import { ReactComponent as LinkedInLogo } from "../../assets/linkedin-logo.svg";
import { ReactComponent as GithubLogo } from "../../assets/github-logo.svg";
import { Links } from "../../utils/links";

const profImage = require("../../assets/Prof_Image.png");

function About() {
  return (
    <Stack gap={5} style={styles.container}>
      <h1 style={styles.heading}>ABOUT ME</h1>
      <Stack direction="horizontal" gap={5}>
        <Image roundedCircle={true} src={profImage} style={styles.profImage} />
        <div style={styles.separator} />
        <p className="fs-6" style={styles.aboutText}>
          {copyTexts.aboutText}
        </p>
        <Stack gap={5} style={styles.container}>
          <a href={Links.LinkedIn} target="_blank">
            <LinkedInLogo fill={colors.cadetBlue} />
          </a>
          <a href={Links.Github} target="_blank">
            <GithubLogo fill={colors.cadetBlue} />
          </a>
        </Stack>
      </Stack>
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
    height: "255px",
    width: "4px",
    backgroundColor: "#C4C4C4BF",
    borderRadius: "10px",
  },
  aboutText: {
    fontSize: "21px",
    color: colors.textColor,
  },
};
