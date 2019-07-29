import React,{useState} from "react";
import "./SectionHomepages.css";
import RenderPage from "./RenderPage";
import {defaultHome,defaultCollection,defaultCategory,defaultBlog,defaultOther,defaultProduct} from "./DataPage";

var active={
    background: "#ff4719",
    color: "white",
    borderRadius: "30px"
}
var noActive={
    background: "#fff",
    color: "#8b919f"
}


var SectionHomepages = () => {
    var [isActive,set]=useState(null);
    var [data,setData]=useState(defaultHome);
  return (
    <div className="SectionHomepages" id="HomePages">
      <div className="header">
        <a href="#tab" style={isActive===1?active:noActive} onClick={()=>{set(1);setData(defaultHome)}}>hompages</a>
        <a href="#tab" style={isActive===2?active:noActive} onClick={()=>{set(2);setData(defaultCollection)}}>Collections Pages</a>
        <a href="#tab" style={isActive===3?active:noActive} onClick={()=>{set(3);setData(defaultCategory)}}>Category Pages</a>
        <a href="#tab" style={isActive===4?active:noActive} onClick={()=>{set(4);setData(defaultProduct)}}>Product Pages</a>
        <a href="#tab" style={isActive===5?active:noActive} onClick={()=>{set(5);setData(defaultBlog)}}>Blog Pages</a>
        <a href="#tab" style={isActive===6?active:noActive} onClick={()=>{set(6);setData(defaultOther)}}>Other Pages</a>
      </div>
      <RenderPage data={data} zoom="true"/>
    </div>
  );
};

export default SectionHomepages;
