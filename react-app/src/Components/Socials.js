import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedinIn,
  faFacebook,
  faGithub,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faReact,
  faWordpressSimple,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faLinkedinIn,
  faFacebook,
  faGithub,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faReact,
  faWordpressSimple,
  faPhp,
);

function Socials(props) {
    const listItems = props.data.map(item => (
      <li key={item.id} className="icon-list-item">
        {item.url ? (
          <a href={item.url}>
            <FontAwesomeIcon icon={["fab", item.icon]} />
          </a>
        ) : (
          <div className="icon-list-item-captioned">
            <FontAwesomeIcon icon={["fab", item.icon]} />
            <span className="caption">{item.skillname}</span>
          </div>
        )}
      </li>
    ));
    return (
      <div className={"icon-section " + props.data[0].type}>
        {props.data[0].type === "technology" ? (
          <h3 className={"section-header " + props.data[0].type}>
            {props.data[0].type}
          </h3>
        ) : (
          ""
        )}
        <ul className="icon-list">{listItems}</ul>
      </div>
    );
  }

export default Socials;