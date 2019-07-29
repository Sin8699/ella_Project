import React, { useState } from "react";
import "./Header.css";
import MenuLeft from "./MenuLeft";

var Header = () => {
  var [show, set] = useState(false);
  return (
    <div className="Contain">
      <div className="Header">
        <div className="logo_title">
        <div className="title">
          <div className="iconMenu" onClick={() => set(!show)}>
            <div />
            <div />
            <div />
          </div>
          <div className="logo">
            <a href="#" title="Product Filter Logo">
              <img
                src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/ella-logo-retina.png"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="link">
          <a href="#">Home</a>
          <a href="#HomePages">Page Layouts</a>
          <a href="#Multiple">Features</a>
          <a href="#">Online Documentation</a>
          <a href="#">Need Help?</a>
        </div>
        </div>
        <div className="buynow" id="buynow">buy now</div>
      </div>
      <MenuLeft on={show} setShow={() => set(!show)} />
    </div>
  );
};

export default Header;
