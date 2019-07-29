import React from "react";
import "./SectionGorgeous.css";
import SectionRender from "./SectionRender";

var defalutDate = {
  page: "Shopify",
  arr: [
    {
      src:
        "http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/theme-1.jpg",
      link: "Furniture",
      title: "Furnitica",
      date: "25 August, 2017",
      isComing: "false",
      isNew:"false",
      background: "true"
    },
    {
      src:
        "http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/theme-2.jpg",
      link: "Accessories",
      title: "The Bagratica",
      date: "9 February, 2017",
      isComing: "false",
      isNew:"false",
      background: "true"
    },
    {
      src:
        "http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/theme-3.jpg",
      link: "Bicycle",
      title: "Bicycle",
      date: "25 December, 2018",
      isComing: "false",
      isNew:"false",
      background: "true"
    },
    {
      src:
        "http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/theme-4.jpg",
      link: "Pet",
      title: "Petica",
      date: "2 January, 2019",
      isComing: "false",
      isNew:"false",
      background: "true"
    },
    {
      src:
        "http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/theme-5.jpg",
      link: "Jewelry &amp; Accessories",
      title: "Jewelias",
      date: "9 April, 2019",
      isComing: "false",
      isNew:"false",
      background: "true"
    },
    {
      src:
        "http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/theme-6a.jpg",
      link: "Watches",
      title: "WatchTICA",
      date: "NA",
      isComing: "true",
      isNew:"false",
      background: "true"
    }
  ]
};

var SectionGorgeous = () => {
  return (
    <div className="SectionGorgeous">
      <h2>Gorgeous Child Themes</h2>
      <SectionRender
        arr={defalutDate.arr}
        page={defalutDate.page}
        zoom="false"
        des="05+ Gorgeous Child Themes. Monthly New Theme Added."
      />
    </div>
  );
};

export default SectionGorgeous;
