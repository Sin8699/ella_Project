import React from "react";
import "./SectionCustomers.css";
import ItemSectionCustomers from "./ItemSectionCustomers";

var SectionCustomers = () => {
  return (
    <div className="SectionCustomers">
      <img
        className="box"
        src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-layer12.png"
      />
      <div className="title">
        <h1>Customers Reviews</h1>
        <p>
          <strong>THANK YOU!</strong> If you love our theme, don't forget to
          rate it
        </p>
        <img src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/rating.png" />
      </div>
      <div className="sliderRating">
        <ItemSectionCustomers />
        <ItemSectionCustomers />
        <ItemSectionCustomers />

        <ItemSectionCustomers />
        <ItemSectionCustomers />
        <ItemSectionCustomers />

        <ItemSectionCustomers />
        <ItemSectionCustomers />
        <ItemSectionCustomers />
      </div>
      <div className="read">
      <a href="#">Read all reviews</a>
      </div>
    </div>
  );
};
export default SectionCustomers;
