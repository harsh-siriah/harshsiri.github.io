import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import colors from "../../utils/colors";
import copyTexts from "../../utils/copyTexts";
import "./ContactPage.css";
import { Links } from "../../utils/links";
import { GithubLogoSvg, LinkedInLogoSvg, CvIconSvg } from "../../assets";

const profImage = require("../../assets/Prof_Image.png");

function ContactPage() {
  return (
    <div className="contact-page-container" key="ContactPage">
      <h1 style={styles.heading}>Contact me</h1>
      <Row className="container">
        <Col>
          <form
            action="https://formsubmit.co/bb830a004611bb6c6974afe9e13439f8"
            method="POST"
            className="form-container"
          >
            <div className="form-item">
              <label className="form-label">Email address</label>
              <input className="form-input" type="email" required />
            </div>
            <div className="form-item">
              <label className="form-label">Name</label>
              <input className="form-input" type="text" required />
            </div>
            <div className="form-item">
              <label className="form-label">Message</label>
              <textarea
                className="form-input form-input-message"
                type="text"
                required
              ></textarea>
            </div>
            <input type="submit" className="form-submit-button" />
          </form>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            roundedCircle={true}
            src={profImage}
            style={styles.profImage}
          />
          <div style={styles.separator} />
          <p className="about-harsh-text">{copyTexts.aboutText}</p>
          <div className="social-icons-container">
            <a href={Links.LinkedIn} target="_blank">
              <LinkedInLogoSvg
                fill={colors.cadetBlue}
                className="social-icons"
              />
            </a>
            <a href={Links.Github} target="_blank">
              <GithubLogoSvg fill={colors.cadetBlue} className="social-icons" />
            </a>
            <a href={Links.Resume} target="_blank">
              <CvIconSvg fill={colors.cadetBlue} className="social-icons" />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default React.memo(ContactPage);

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
    textTransform: "uppercase",
    marginTop: "10vh",
  },
  profImage: {
    height: "30%",
  },
  separator: {
    width: "20vw",
    height: "4px",
    backgroundColor: "#C4C4C4BF",
    borderRadius: "10px",
    marginTop: "20px",
    marginBottom: "20px",
  },
};
