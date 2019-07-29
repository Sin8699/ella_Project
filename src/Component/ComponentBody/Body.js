import React from "react";
import SectionCreative from "./SectionCreative";
import SectionFlex from "./SectionFlex";
import SectionGorgeous from "./SectionGorgeous";
import SectionHomepages from "./SectionHomepages";
import SectionCompatibe from "./SectionCompatibe";
import SectionMainFeatures from "./SectionMainFeatures";
import SectionMultiple from './SectionMultiple';
import SectionCustomers from "./SectionCustomers";
import SectionLooking from "./SectionLooking";

var Body = () => {
  return (
    <div className="Body">
      <SectionCreative />
      <SectionFlex />
      <SectionGorgeous/>
      <SectionHomepages/>
      <SectionCompatibe/>
      <SectionMainFeatures/>
      <SectionMultiple/>
      <SectionCustomers/>
      <SectionLooking/>
    </div>
  );
};

export default Body;
