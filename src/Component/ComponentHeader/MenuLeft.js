import React from "react";
import "./Header.css";

var onNavbar = {
  transform: "translate(470px)"
};

var offNavbar = {
  transform: "translate(0px)"
};

var onBackground = {
  width: "100%"
};
var offBackground = {
  width: "0"
};

var MenuLeft = props => {
  return (
    <div
      className="Menu"
      style={props.on ? onBackground : offBackground}
      onClick={e => {
        if (e.clientX > 470) props.setShow();
      }}
    >
      <div className="MenuLeft" style={props.on ? onNavbar : offNavbar}>
        <div className="icon" onClick={() => props.setShow()}>
          <a href="#">x</a>
        </div>
        <ul className="link">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shopify Themes</a></li>
        <li><a href="#">Shopify Modules</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Showcase</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Demo</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MenuLeft;
