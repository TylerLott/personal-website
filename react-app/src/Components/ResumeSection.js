import React from "react";

function ResumeSection(props) {
  const listItems = props.data.map(obj => (
    <li key={obj.id} className="resume-list-item">
      <h3 className="organisation-header">{obj.organization}</h3>
      <div className="resume-item-inline">
        <h4 className="field-header">{obj.field}</h4>
        <p className="date">{obj.endYear}</p>
      </div>
      <p className="description">{obj.description}</p>
    </li>
  ));
  return (
    <section id={props.data[0].type}>
      <h3 className="section-header">{props.data[0].type}</h3>
      <ul className="resume-list">{listItems}</ul>
    </section>
  );
}

export default ResumeSection;