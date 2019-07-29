import React from "react";
import "./Footer.css";

var Footer = () => {
  return (
    <div className="Footer">
      <div className="box"  data-parallax='{"x": -40 , "y": 120 , "smoothness": 120}'>
      <img  src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-layer9.png"/>
      </div>
      <div className="Foot1">
        <h1 className="title">LOVE OUR WORKS</h1>
        <div className="rating">
          Please don’t forget to rate
          <img src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/rating.png" />
          our Shopify Themes. Thank you!
        </div>
        <div className="link">
          <span>© 2019 HaloThemes.com</span>
          <div className="item">
            <a href="#">Shopify Themes &amp; Templates</a>
            <a href="#">Shopify Modules </a>
            <a href="#">BigCommerce Themes</a>
            <a href="#">BigCommerce Addons</a>
            <a href="#">Custom Service</a>
          </div>
          <a href="#" className="contact">
            Contact Us
          </a>
        </div>
      </div>
      <div className="Foot2">
        <p>
          Images used and included in this theme are for demo purpose only. They
          are not a part of the theme and NOT included in the final purchase
          files.
        </p>
        <div className="info">
          COMMERCIAL USAGE IS NOT ALLOWED AND IS AT YOUR OWN RISK.
        </div>
      </div>
    </div>
  );
};

export default Footer;
