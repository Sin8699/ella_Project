import React from "react";
import "./SectionLooking.css";
import ItemSectionLooking from "./ItemSectionLooking";

var arr = [
  {
    title: "Pursue Fitness",
    src:
      "http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/store-1.jpg"
  },
  {
    title: "US Sport Down Under",
    src:
      "http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/store-2.jpg"
  },
  {
    title: "Pmai Brand",
    src:
      "http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/store-3.jpg"
  },
  {
    title: "Tresor Collection",
    src:
      "http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/store-4.jpg"
  },
  {
    title: "Pmai Brand",
    src:
      "http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/store-3.jpg"
  }
];

var SectionLooking = () => {
  return (
    <div className="SectionLooking">
      <div className="boxB">
        <img src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-layer7.png" data-parallax='{"x": -50 , "y": 120 , "smoothness": 100}'/>
      </div>
      <div className="boxM">
        <img src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-layer8.png" data-parallax='{"x": -40 , "y": 120 , "smoothness": 120}'/>
      </div>
      <h1>
        Looking for a <strong>customize service?</strong>
        <br /> Want to <strong>pimp up your</strong> shopify store?
      </h1>
      <div className="button">
        <a href="#">get a free quote</a>
        <a href="#">showcase</a>
      </div>
      <div className="sliderLooking">
        {arr.map(x => (
          <ItemSectionLooking data={x} />
        ))}
      </div>
    </div>
  );
};
export default SectionLooking;
