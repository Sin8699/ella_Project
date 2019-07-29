import React, { useEffect } from "react";
import "./SectionGorgeous.css";
import $ from "jquery";

var hidden = {
  display: "none"
};

var show = {
  visibility: "visible"
};
var coming = {
  pointerEvents: "none"
};
var noComing = {
  pointerEvents: "auto"
};

$(window).ready(()=> {
  $('.ItemSection:not(.coming)')
      .mouseenter(function() {
          var height = $(this).height() - $(this).find('img').height();
          if(height < 0 ) {
              $(this).find('img').css('transform', 'translateY('+height+'px)');
          }
      })
      .mouseleave(function() {
          $(this).find('img').css('transform', 'translateY(0)');
      });
});

var ItemSection = props => {
  console.log(props.children);
  useEffect(() => {
    console.log(props.zoom);
    if (props.zoom == "true") {
      $(".ItemSection").css("animation", "none");
      setTimeout(() => {
        $(".ItemSection").css("animation", "Zoom 2s");
      }, 100);
    }
    else
    $(".ItemSection").css("animation", "none");
  });
  return (
    <div
      className="ItemSection"
      style={props.children.isComing === "true" ? coming : noComing}
    >
      <div
        className="new"
        style={props.children.isNew === "true" ? show : hidden}
      >
        New
      </div>
      <div className="containImg">
        <div
          className="coming"
          style={props.children.isComing === "true" ? show : hidden}
        >
          Coming Soon
        </div>
        <img id="img" src={props.children.src} />
      </div>
      <div className="containDetail">
        <div
          className="background"
          style={
            props.children.background === "true"
              ? { background: "#fbfaff" }
              : { background: "#fff" }
          }
        >
          <div className="link">
            <p>{props.page}</p>
            <p className="shop">{props.children.link}</p>
          </div>
          <div className="title">
            <p>{props.children.title}</p>
            <a href="#">
              <i class="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
        <div
          className="date"
          style={props.children.date === "" ? hidden : show}
        >
          <span className="name">Release Date:</span>
          <span className="detail">{props.children.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemSection;
