import React from "react";

const Header = ( { props } ) => (
    <header>
        <h2 className="name-main">{props.name}</h2>
        <div className="name-underline" />
        <h4 className="title-main">{props.title}</h4>
        <ul className="contact-list">
            <li>
                Email:&nbsp;
                <a href={props.email}>{props.email}</a>
            </li>
            <li>
                Phone:&nbsp;<a href={props.phone}>{props.phone}</a> 
            </li>
            <li>
                Location:&nbsp;
                <span className="contact-list-strong">{props.location}</span>
            </li>
        </ul>
    </header>
);

export default Header;
