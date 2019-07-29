import React from "react";
import "./SectionFlex.css";

var ItemSectionFlex = (props) => {
  return (
    <div className="ItemSectionFlex">
        <div className="icon">
          <i className={props.icon}/>
        </div>
        <div className="content">
          <h3>{props.title}</h3>
          <p>
           {props.des}
          </p>
        </div>
    </div>
  );
};


export default ItemSectionFlex;
