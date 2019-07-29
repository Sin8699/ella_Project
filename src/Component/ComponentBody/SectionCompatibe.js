import React from "react";
import "./SectionCompatibe.css";

var SectionCompatibe = () => {
  return (
    <div className="SectionCompatibe">
      <h1>Most Compatibe Apps</h1>
      <p>Our Ella theme is compatible with almost Shopify apps *</p>
      <div className="items">
        <img className="item1" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/app6.png" />
        <div className="contain1">
        <img className="item2" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/app4.png" />
        <div className="contain2">
        <img className="item3" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/app2.png" />
        <img className="item3" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/app1.png" />
        <img className="item3" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/app3.png" />
        </div>
        <img className="item2" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/app5.png" />
        </div>
        <img className="item1" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/app7.png" />
      </div>
      <div className="link">
        Product Filter and Search by <a href="#">BoostCommerce</a>
      </div>
    </div>
  );
};

export default SectionCompatibe;
