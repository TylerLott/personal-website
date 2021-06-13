import React from "react";

function ProjectSection(props) {
  const listItems = props.data.map(obj => (
    <li key={obj.id} className="project-list-item">
      <h3 className="project-header">{obj.name}</h3>
      <div className="project-item-inline">
        <h4 className="field-header">{obj.type}</h4>
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

export default ProjectSection;