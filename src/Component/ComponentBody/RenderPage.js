import React from "react";
import "./SectionHomepages.css";
import SectionRender from "./SectionRender";

var RenderPage = props => {
  console.log(props.data.arr);
  return (
    <div className="RenderPage">
      <h1 className="title">{props.data.title}</h1>
      <p className="des">{props.data.des}</p>
      <SectionRender arr={props.data.arr} page={props.data.page} zoom={props.zoom} des="" />
    </div>
  );
};

export default RenderPage;
