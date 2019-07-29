import React from "react";
import "./SectionGorgeous.css";
import {ItemSectionZoom,ItemSection} from "./ItemSection";


var SectionRender = props => {
  console.log(props.zoom);
  return (
    <div className="BackgroundSpecification">
      <div className="groundItem"></div>
      <p style={props.des===""?{margin:"30px auto"}:{margin:"50px auto"}}>{props.des}</p>
      <div className="SectionRender">
        {props.zoom==="true"?props.arr.map(x => (
          <ItemSectionZoom page={props.page}>{x}</ItemSectionZoom>
        )):props.arr.map(x => (
          <ItemSection page={props.page}>{x}</ItemSection>
        ))}
      </div>
    </div>
  );
};

export default SectionRender;
