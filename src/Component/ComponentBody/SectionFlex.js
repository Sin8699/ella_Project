import React from "react";
import "./SectionFlex.css";
import ItemSectionFlex from "./ItemSectionFlex";

var SectionFlex = () => {
  return (
    <div class="SectionFlex">
      <div className="box1">
        <div className="B1_S1" data-parallax='{"x": 100 , "y": -80 , "scale": 0.5 , "smoothness": 100}'>
        <img className="s1" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-layer6.png"/>
        </div>
        <div className="B1_S2" data-parallax='{"y": 150 , "smoothness": 200}'>
        <img className="s2" src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-layer5.png"/>
        </div>
      </div>
      <ItemSectionFlex
        icon="fa fa-heart"
        title="New Monthly Theme"
        des=" New shopify theme will be monthly released, so that satisfying your
            clients is not so rough anymore &amp; keep your store looking fresh."
      />
      <ItemSectionFlex
        icon="fa fa-star"
        title="Stunning Design"
        des=" Want to increase your sales just in the first visit. Come to us &amp; you will see how miracle our flagship shopify themes are."
      />
      <ItemSectionFlex
        icon="fa fa-cog"
        title="Easy to Use and Implement"
        des=" We analyze, then suppose you the best methods for any necessary processes or features make your website operate stably and smoothly."
      />
      <ItemSectionFlex
        icon="fa fa-check"
        title="Outstanding Support"
        des="Get the best technical support around! If you have questions or problems, just contact us directly at: support@halothemes.com we're here to help!"
      />
      <ItemSectionFlex
        icon="fa fa-window-restore"
        title="Browser Compatibility"
        des=" One of our goal is to bring you compatible themes with most of the commonly used browsers which become a business core advantage."
      />
      <ItemSectionFlex
        icon="fa fa-dot-circle"
        title="Search Engine Optimization"
        des=" Combination of SEO and our web development team make a powerful weapon to get super high conversion rate websites."
      />
    </div>
  );
};

export default SectionFlex;
