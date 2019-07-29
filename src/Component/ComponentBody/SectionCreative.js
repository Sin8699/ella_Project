import React from "react";
import "./SectionCreative.css";


var SectionCreative = () => {
  return (
    <section className="SectionCreative">
      <div className="box1">
        <img className="s1" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-layer6.png" data-parallax='{"x": 160 , "y": 50 , "smoothness": 50}'/>
        <img className="s2" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-layer5.png" data-parallax='{"y": -50 , "z": -50 , "smoothness": 200}'/>
      </div>
      <img className="ImgResponsive" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/ella-shopify.png"/>
      <div className="content" id="content">
        <h1 className="title">
          Creative multi-purpose <b>shopify</b> theme
        </h1>
        <p className="des">
          Gorgeous designed for your store. Monthly Theme Added.
        </p>
        <div className="button-group">
          <a className="buttonBuy" href="#">
            Buy Now
          </a>
          <a class="buttonDiscover" href="#">
            Discover
          </a>
        </div>
      </div>
      <div className="box2">
      <img className="s1" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-layer6.png" data-parallax='{"y": -180 , "scale": 0.8 , "smoothness": 300}'/>
      <div className="group">
        <img className="s2" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-layer5.png" data-parallax='{"x": 70 , "y": 100 , "smoothness": 50}'/>
        <img className="s3" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-main-image.png" />
        </div>
      </div>
      <h4 className="description">
        <strong>FIVE YEARS Of WOW</strong> for going through in Shopify
        platform, listening all of customers’ desires as well as catching up the
        trends to combine everything what clients need.
      </h4>
    </section>
  );
};

export default SectionCreative;
