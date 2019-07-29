import React from "react";
import "./SectionCustomers.css";

var ItemSectionCustomers = () => {
  return (
    <div className="ItemSectionCustomers">
      <div className="image">
          <img
            src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/avatar1.png"
            alt=""
          />
        <div className="titleItem">
          <h4 className="name">VictorMontsigny</h4>
          <p className="review">for Design Quality</p>
        </div>
      </div>
      <div className="content">
        <p className="comment">
          The theme is beautiful and the custommer support is AMAZING, you can
          ask them whatever you need for your theme and they will fix it for
          you.
          <br />
          Really good quality
        </p>
      </div>
    </div>
  );
};

export default ItemSectionCustomers;
