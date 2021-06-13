import React from "react";

function Navigation(props) {
  const menuItemsArray = props.data;
  const menuItems = props.data.map(item => (
    <li key={item.id} className="menu-list-item">
      <a href={"#" + item.title} className="slide-right">
        {item.title}
      </a>
    </li>
  ));

  return (
    <div className={props.toggle ? "side-menu open" : "side-menu closed"}>
      <nav>
        <ul className="menu-list">{menuItems}</ul>
      </nav>
    </div>
  );
}

export default Navigation;