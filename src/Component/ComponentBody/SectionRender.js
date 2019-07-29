import React from "react";
import "./SectionGorgeous.css";
import ItemSection from "./ItemSection";


var SectionRender = props => {
  return (
    <div className="BackgroundSpecification">
      <div className="groundItem"></div>
      <p style={props.des===""?{margin:"30px auto"}:{margin:"50px auto"}}>{props.des}</p>
      <div className="SectionRender">
        {props.arr.map(x => (
          <ItemSection page={props.page} zoom={props.zoom}>{x}</ItemSection>
        ))}
      </div>
    </div>
  );
};

export default SectionRender;
