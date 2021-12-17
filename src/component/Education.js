import React, { Component } from "react";
import "../css/App.css";
class Education extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="box sideDecor" data-testid="interests-box">
        <h2 className="sectionHeaderText" id="interests">
          Education
        </h2>
        <h3>Brigham Young University-Idaho </h3>
        <h4>BS, Software Engineering</h4>
        <p>Relevant classes: Frontend web development II</p>
        <h3>NuCamp</h3>
        <p>Relevant classes: React, React Native</p>
      </div>
    );
  }
}
export default Education;
