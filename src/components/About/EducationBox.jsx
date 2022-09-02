import "./AboutScreen.css";
import React from "react";
import EducationData from "./EducationData";

function EducationBox() {
  return (
    <div className="education-box">
      <div className="year-cell-container">
        <div className="year-cell-dotted-border" />
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
                  rel="noreferrer"
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
  );
}

export default React.memo(EducationBox);
