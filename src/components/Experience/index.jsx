import React, { useState } from "react";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import colors from "../../utils/colors";
import ExperienceContentTab from "./ExperienceContentTab";
import experienceData from "../../utils/experience.json";

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

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="tabs">
                <Nav.Item>
                  {items.map((item, index) => {
                    const localData = data?.data?.[item];
                    const text = localData?.[ExperienceDataKeys.TabTitle];
                    const key = localData?.[ExperienceDataKeys.id];

                    const isLastItem = index === items.length - 1;
                    console.log({ isLastItem, item });

                    return (
                      <div>
                        <Nav.Link eventKey={key}>
                          <p
                            style={{
                              textTransform: "none",
                              textAlign: "center",
                            }}
                          >
                            {text}
                          </p>
                        </Nav.Link>
                        {!isLastItem ? <div style={styles.separator} /> : null}
                      </div>
                    );
                  })}
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {items.map((item) => {
                  const localData = data?.data?.[item];

                  const key = localData?.[ExperienceDataKeys.id];

                  return (
                    <Tab.Pane eventKey={key}>
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

  const [currentTab, setCurrentTab] = useState(categories[0]);

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={currentTab}
      onSelect={(k) => setCurrentTab(k)}
      className="mb-3"
    >
      {categories.map((category) => {
        const localData = data[category];

        const eventKey = localData?.[ExperienceDataKeys.id];
        const title = localData?.[ExperienceDataKeys.title];

        return (
          <Tab eventKey={eventKey} title={title}>
            <ExperienceTable data={localData} />
          </Tab>
        );
      })}
    </Tabs>
  );
}

export default Experience;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  box: {
    // height: "475px",

    width: "900px",
    borderColor: "#B5BEBE",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "5px",
  },

  separator: {
    width: "80%",
    height: "1px",
    borderColor: "#B5BEBE",
    borderWidth: "0.5px",
    borderStyle: "solid",
    marginLeft: "20px",
  },
};
