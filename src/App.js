import React from "react";
import { connect } from "react-redux";
import "./MAIN.css";
import Header from "./Component/ComponentHeader/Header";
import Body from "./Component/ComponentBody/Body";
import Footer from "./Component/ComponentFooter/Footer";
import $ from "jquery";

$(window).scroll(() => {
  if (document.documentElement.getBoundingClientRect().top + 140 < 50) {
    $(".Header").addClass("HeaderFixed");
    $("#content").css("margin", "200px 0 0 70px");
    $("#buynow").css({
      "border-color": "black",
      color: "black",
      padding: "10px 20px",
      "font-size": "17px"
    });
  }
   else {
    $(".Header").removeClass("HeaderFixed");
    $("#content").css("margin", "100px 0 0 70px");
    $("#buynow").css({
      "border-color": "white",
      color: "white",
      padding: "10px 20px",
      "font-size": "20px"
    });
  }

  

  if (document.documentElement.getBoundingClientRect().top + 180 < 50) {
    $(".ComeBack").show();}
    else
     $(".ComeBack").hide();
});

var App = () => {
  return (
    <div className="MAIN">
      <div className="ComeBack">
        <a href="#root">
          <i className="fas fa-chevron-up" />
        </a>
      </div>
      <Header />
      <Body />
      <Footer />
      
    </div>
  );
};

export default App;
