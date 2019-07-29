import React from "react";
import "./SectionLooking.css";

var ItemSectionLooking = (props) => {
  return (
    <div className="ItemSectionLooking">
     <h5 class="name">{props.data.title}</h5>
      <a>
        <img src={props.data.src} />
      </a>
    </div>
  );
};
export default ItemSectionLooking;
