import React, { useCallback, useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import colors from "../../utils/colors";
import ExperienceContentTab from "./ExperienceContentTab";
import experienceData from "../../utils/experience.json";
import "./Experience.css";
import { LocalEvent } from "../../services/LocalEvent/LocalEvent";
import EventTypes from "../../services/LocalEvent/EventTypes";
import { useListScrollHandler } from "../../hooks/useListScrollHandler";

const ExperienceDataKeys = {
  TabTitle: "tab-title",
  id: "id",
  title: "title",
  date: "date",
  location: "location",
  content: "content",
};

function ExperienceTable(props) {
  const { data = {} } = props;

  const items = data?.items || [];

  const customNavItem = "custom-nav-item";
  const customNavItemActive = "custom-nav-item-active";
  const customNavLink = "custom-nav-link";

  const [selectedCell, setSelectedCell] = useState(data?.data?.[items[0]]?.id);

  const onCellItemSelect = useCallback((key) => {
    setSelectedCell(key);
  }, []);

  const { onMouseEnter, onMouseLeave } = useListScrollHandler();

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav
                variant="tabs"
                style={styles.navContainer}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {items.map((item, index) => {
                  const localData = data?.data?.[item];
                  const text = localData?.[ExperienceDataKeys.TabTitle];
                  const key = localData?.[ExperienceDataKeys.id];

                  const isLastItem = index === items.length - 1;
                  return (
                    <div style={styles.navCellItemContainer}>
                      <Nav.Item
                        bsPrefix={
                          key == selectedCell
                            ? customNavItemActive
                            : customNavItem
                        }
                      >
                        <Nav.Link
                          active={key == selectedCell}
                          eventKey={key}
                          bsPrefix={customNavLink}
                          onClick={() => {
                            onCellItemSelect(key);
                          }}
                        >
                          {text}
                        </Nav.Link>
                      </Nav.Item>
                      {!isLastItem ? <div style={styles.separator} /> : null}
                    </div>
                  );
                })}
              </Nav>
            </Col>
            <Col sm={9} style={styles.contentColumn}>
              {/* <div style={styles.verticalSeparator} /> */}
              <Tab.Content>
                {items.map((item) => {
                  const localData = data?.data?.[item];

                  const key = localData?.[ExperienceDataKeys.id];

                  return (
                    <Tab.Pane active={key === selectedCell} eventKey={key}>
                      <ExperienceContentTab
                        title={localData?.[ExperienceDataKeys.title]}
                        date={localData?.[ExperienceDataKeys.date]}
                        location={localData?.[ExperienceDataKeys.location]}
                        contentArray={localData?.[ExperienceDataKeys.content]}
                      />
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}

function Experience() {
  const categories = experienceData.categories;
  const data = experienceData.data;

  return (
    <div style={styles.screen}>
      <h1 style={styles.heading}>WORK EXPERIENCE</h1>
      <div style={styles.container}>
        {categories.map((category, index) => {
          const localData = data[category];

          return <ExperienceTable data={localData} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Experience;

const styles = {
  screen: {},
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  heading: {
    fontSize: "48px",
    color: colors.cadetBlue,
    width: "100%",
    textAlign: "center",
    marginTop: "50pt",
    marginBottom: "20pt",
  },
  box: {
    // height: "475px",
    height: "70vh",
    width: "70%",
    borderColor: "#B5BEBE",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "11px",
  },

  separator: {
    width: "80%",
    height: "1px",
    borderColor: "#B5BEBE",
    borderWidth: "0.5px",
    borderStyle: "solid",
    marginLeft: "20px",
    marginTop: "2.5pt",
    marginBottom: "2.5pt",
  },

  navCellItemContainer: {
    width: "100%",
    marginLeft: "5pt",
    marginRight: "5pt",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  navContainer: {
    paddingTop: "5pt",
    paddingBottom: "5pt",
    overflowY: "scroll",
    height: "70vh",
    overflowX: "hidden",
    borderWidth: "0px",
  },

  contentColumn: { display: "flex" },
};
