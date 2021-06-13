import React from "react";

function Skills(props) {
    const listSkills = props.data.map(item => (
        <li key={item.id} className="skill-list-item">
            <span className="caption">{item.skillName}</span>
        </li>
    ));
    return (
        <section id={props.data[0].type}>
            <h3 className={"section-header " + props.data[0].type}>
                {props.data[0].type}
            </h3>
            <ul className="icon-list">{listSkills}</ul>
        </section>
    );
}

export default Skills;